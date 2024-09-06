/* eslint-disable no-plusplus */

'use client';

import { useRef, useState } from 'react';

import { useIsomorphicLayoutEffect } from '@/hooks/use-isomorphic-layout-effect';
import { ReactiveAnimation } from '@/components/reactive-ascii/reactive-animation';

interface UseReactiveAsciiArgs {
  asciiText: string;
  animations: ReactiveAnimation[];
  fps: number;
}

interface UseReactiveAsciiController {
  restart: () => void;
  togglePlayingState: () => void;
}

type AnimationHandler = ReturnType<ReactiveAnimation>;
interface ReactiveAsciiState {
  asciiText: string;
  pos: number;
  fps: number;
  animations: AnimationHandler[];
  animationIdx: number;
  playing: boolean;
}

export const useReactiveAscii = ({ asciiText, fps, animations }: UseReactiveAsciiArgs) => {
  const [playing, setPlaying] = useState(true);
  const cachedAnimations = useRef(animations);
  const reactiveAsciiRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number>(0);

  useIsomorphicLayoutEffect(() => {
    cachedAnimations.current = animations;
  });

  const reactiveAsciiStateRef = useRef<ReactiveAsciiState>({
    asciiText,
    animations: [],
    fps,
    pos: -1,
    playing: true,
    animationIdx: 0
  });

  const reactiveAsciiController = useRef<UseReactiveAsciiController>({
    togglePlayingState: () => {
      // setPlaying(prev => !prev);

      const isDoneAnimating = reactiveAsciiStateRef.current.animationIdx === animations.length ;

      if (isDoneAnimating) {
        reactiveAsciiStateRef.current.animationIdx = 0;

        reactiveAsciiStateRef.current.playing = true;
        setPlaying(true);
      } else {
        reactiveAsciiStateRef.current.playing = !reactiveAsciiStateRef.current.playing;
        setPlaying(prev => !prev);
      }
    },

    restart() {
      for (const animation of reactiveAsciiStateRef.current.animations) {
        animation.restart();
      }

      reactiveAsciiStateRef.current.animationIdx = 0;
      reactiveAsciiStateRef.current.playing = true;

      setPlaying(true);
    }
  });

  useIsomorphicLayoutEffect(() => {
    const animations = cachedAnimations.current;

    let done = false;

    let start: number;

    let frame = -1;

    const reactiveAscii = reactiveAsciiRef.current;

    let delay = 1000 / reactiveAsciiStateRef.current.fps;

    delay += asciiText.length;

    const finish = (idx: number) => {
      if (idx === animations.length - 1) {
        done = true;

        reactiveAsciiStateRef.current.playing = false;
        setPlaying(false);

        return;
      }

      reactiveAsciiStateRef.current.animationIdx += 1;
    };

    if (reactiveAscii && !reactiveAsciiStateRef.current.animations.length) {
      reactiveAscii.style.opacity = '0';

      for (let i = 0; i < animations.length; i++) {
        const animation = animations[i];

        reactiveAsciiStateRef.current.animations.push(
          animation({
            finish: () => {
              finish(i);
            },
            canvas: reactiveAscii,
            text: asciiText,
            fps
          })
        );
      }
    }

    const reactiveAnimations = reactiveAsciiStateRef.current.animations;

    const animate = (timestamp: number) => {
      if (!reactiveAscii) {
        cancelAnimationFrame(rafRef.current);

        return;
      }

      if (reactiveAsciiStateRef.current.playing) {
        if (start === undefined) {
          start = timestamp;
        }

        const elapsed = timestamp - start;
        const seg = Math.floor(elapsed / delay);

        if (seg > frame) {
          frame = seg;

          if (done) cancelAnimationFrame(rafRef.current);

          const currentAnimation = reactiveAnimations[reactiveAsciiStateRef.current.animationIdx];

          currentAnimation.run();
        }

        if (!done) {
          rafRef.current = requestAnimationFrame(animate);
        } else {
          cancelAnimationFrame(rafRef.current);
        }
      } else {
        cancelAnimationFrame(rafRef.current);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== undefined) cancelAnimationFrame(rafRef.current);
    };
  }, [playing]);

  return [reactiveAsciiRef, reactiveAsciiController] as const;
};
