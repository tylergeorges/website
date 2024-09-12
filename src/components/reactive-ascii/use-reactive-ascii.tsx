/* eslint-disable no-plusplus */

'use client';

import { useRef, useState } from 'react';

import { useIsomorphicLayoutEffect } from '@/hooks/use-isomorphic-layout-effect';
import { ReactiveAnimation } from '@/components/reactive-ascii/reactive-animation';

interface UseReactiveAsciiArgs {
  asciiText: string;
  animations: ReactiveAnimation[];
  duration: number;
  // fps: number;
}

interface UseReactiveAsciiController {
  restart: () => void;
  togglePlayingState: () => void;
}

type AnimationHandler = ReturnType<ReactiveAnimation>;
interface ReactiveAsciiState {
  asciiText: string;
  pos: number;
  duration: number;
  // fps: number;
  animations: AnimationHandler[];
  animationIdx: number;
  playing: boolean;
}

const linear = (ms: number) => ms;

export const useReactiveAscii = ({ asciiText, duration, animations }: UseReactiveAsciiArgs) => {
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
    duration,
    pos: -1,
    playing: true,
    animationIdx: 0
  });

  const reactiveAsciiController = useRef<UseReactiveAsciiController>({
    togglePlayingState: () => {
      // setPlaying(prev => !prev);

      const isDoneAnimating =
        reactiveAsciiStateRef.current.animationIdx === animations.length - 1 &&
        !reactiveAsciiStateRef.current.playing;

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

    const reactiveAscii = reactiveAsciiRef.current;

    // const delay = 1000 / duration;
    // let delay = duration;
    // let delay = 1000 / reactiveAsciiStateRef.current.fps;

    // delay += asciiText.length;

    let done = false;

    const finish = (idx: number) => {
      if (idx === animations.length - 1) {
        done = true;

        console.log(idx);

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
            // fps
            duration
          })
        );
      }
    }

    const reactiveAnimations = reactiveAsciiStateRef.current.animations;

    // const totalDuration = 1000 / 60;

    let prevTimestamp = 0;
    let start: number;

    const textLen = asciiText.length;

    // const animationSpeed = 200;
    const animationSpeed = 1000 / 60 + textLen;

    const animate = async (timestamp: number) => {
      const now = timestamp;

      if (start === undefined) {
        start = now;
      }

      const elapsed = now - start;

      const elapsedTimeSinceLastRender = timestamp - prevTimestamp;

      if (elapsedTimeSinceLastRender > animationSpeed) {
        if (reactiveAsciiStateRef.current.playing) {
          const currentAnimation = reactiveAnimations[reactiveAsciiStateRef.current.animationIdx];

          await currentAnimation.run(
            linear(now / duration),
            !reactiveAsciiStateRef.current.playing
          );

          prevTimestamp = timestamp;
        } else {
          cancelAnimationFrame(rafRef.current);
          start = undefined;
        }
      }

      if (done || (elapsed >= duration && !reactiveAsciiStateRef.current.playing)) {
        cancelAnimationFrame(rafRef.current);

        return;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    animate(performance.now());

    // rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current !== undefined) cancelAnimationFrame(rafRef.current);
    };
  }, [playing]);

  return [reactiveAsciiRef, reactiveAsciiController] as const;
};
