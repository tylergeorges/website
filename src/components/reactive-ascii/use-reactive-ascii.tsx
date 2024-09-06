/* eslint-disable no-plusplus */

'use client';

import { useEffect, useRef } from 'react';

import { useAsciiAnimations } from '@/components/reactive-ascii/use-ascii-animations';
import { useIsomorphicLayoutEffect } from '@/hooks/use-isomorphic-layout-effect';
import { ReactiveAnimation } from '@/components/reactive-ascii/reactive-animation';

interface UseReactiveAsciiArgs {
  asciiText: string;
  animations: ReactiveAnimation[];
  fps: number;
}

interface ReactiveAsciiState {
  asciiText: string;
  pos: number;
  fps: number;
  animations: ReturnType<ReactiveAnimation>['handler'][];
}

export const useReactiveAscii = ({ asciiText, fps, animations }: UseReactiveAsciiArgs) => {
  const reactiveAsciiStateRef = useRef<ReactiveAsciiState>({
    asciiText,
    animations: [],
    fps,
    pos: -1
  });
  const rafRef = useRef<number>(0);

  const [reactiveAsciiRef, asciiAnimationsRef] = useAsciiAnimations();
  const [caretRef, caretAnimationsRef] = useAsciiAnimations();

  useIsomorphicLayoutEffect(() => {
    let done = false;

    let start: number;

    let frame = -1;

    const asciiAnimations = asciiAnimationsRef.current;
    const reactiveAscii = reactiveAsciiRef.current;

    const caretAnimations = caretAnimationsRef.current;
    const caret = caretRef.current;

    const delay = 1000 / reactiveAsciiStateRef.current.fps;

    const whitespace = '&nbsp;';

    const textPlaceholder = whitespace.repeat(asciiText.length);

    if (reactiveAscii && asciiAnimations && caretAnimations) {
      reactiveAscii.innerHTML = '';
      if (caret) {
        caretAnimations.show();
        reactiveAscii.append(caret);

        reactiveAscii.innerHTML += textPlaceholder;
      }
    }

    const finish = () => {
      done = true;
    };

    if (reactiveAscii) {
      for (const animation of animations) {
        reactiveAsciiStateRef.current.animations.push(
          animation({ finish, canvas: reactiveAscii, text: asciiText, fps }).handler
        );
      }
    }
    const reactiveAnimations = reactiveAsciiStateRef.current.animations;

    const animate = (timestamp: number) => {
      if (!asciiAnimations || !reactiveAscii) return;

      if (start === undefined) {
        start = timestamp;
      }

      const elapsed = timestamp - start;
      const seg = Math.floor(elapsed / delay);

      if (seg > frame) {
        frame = seg;

        if (done) cancelAnimationFrame(rafRef.current);

        console.log(done);

        // const state = reactiveAsciiStateRef.current;
        // reactiveAsciiStateRef.current.pos++;

        // let trimmedContent = '';

        // const endIdx = whitespace.length * state.pos;

        // const rightWhitespace = textPlaceholder.substring(endIdx);

        for (const animation of reactiveAnimations) {
          animation();
        }

        // if (reactiveAsciiStateRef.current.pos >= 0) {
        //   trimmedContent = state.asciiText.substring(0, reactiveAsciiStateRef.current.pos);
        // }

        // if (caret && caretAnimations) {
        //   reactiveAscii.innerHTML = `${trimmedContent}&nbsp;`;
        //   asciiAnimations.push(caret);
        //   reactiveAscii.innerHTML += rightWhitespace;
        // }

        // if (caretAnimations && !typing) {
        //   // console.log(elapsedBlinkFrame,blinkFrames,frame)
        //   // console.log(blinkFrames/2,elapsedBlinkFrame)

        //   if (elapsedBlinkFrame === hideCaretFrame && !blink) {
        //     caretAnimations.hide();
        //     elapsedBlinkFrame = 0;
        //     // elapsedBlinkFrame -= 0.5;
        //     blink = true;
        //   } else if (elapsedBlinkFrame < blinkFrames ) {
        //     caretAnimations.show();
        //     elapsedBlinkFrame += 0.5;
        //     blink = false;
        //   }

        //   if (!blink) {
        //     // asciiAnimations.show();
        //     // blink = false;
        //     // asciiAnimations.hide();
        //   } else if (blink) {
        //     // elapsedBlinkFrame = 0;
        //     // asciiAnimations.show();
        //     // asciiAnimations.hide();
        //   }
        // }

        // if (reactiveAsciiStateRef.current.pos === state.asciiText.length) {
        //   done = true;
        // }
      }

      if (!done) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(rafRef.current);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== undefined) cancelAnimationFrame(rafRef.current);
    };
  }, [caretAnimationsRef, asciiAnimationsRef, asciiText.length, caretRef, reactiveAsciiRef]);

  return [reactiveAsciiRef, caretRef] as const;
};
