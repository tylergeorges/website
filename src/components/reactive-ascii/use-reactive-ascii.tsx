/* eslint-disable no-plusplus */

'use client';

import { Caret } from '@/components/caret';
import { useAsciiAnimations } from '@/components/reactive-ascii/use-ascii-animations';
import { useEffect, useRef } from 'react';

interface UseReactiveAsciiArgs {
  asciiText: string;
  fps: number;
}

interface ReactiveAsciiState {
  asciiText: string;
  pos: number;
  fps: number;
}

export const useReactiveAscii = ({ asciiText, fps }: UseReactiveAsciiArgs) => {
  // const reactiveAsciiRef = useRef<HTMLPreElement>(null);
  // const caretRef = useRef<HTMLSpanElement>(null);
  const reactiveAsciiStateRef = useRef<ReactiveAsciiState>({ asciiText, fps, pos: -1 });
  const rafRef = useRef<number>(0);

  const [reactiveAsciiRef, asciiAnimationsRef] = useAsciiAnimations();
  const [caretRef, caretAnimationsRef] = useAsciiAnimations();

  useEffect(() => {
    let done = false;

    let start: number;

    let frame = -1;

    let showElement = false;

    const asciiAnimations = asciiAnimationsRef.current;
    const reactiveAscii = reactiveAsciiRef.current;

    const caretAnimations = caretAnimationsRef.current;
    const caret = caretRef.current;

    const delay = 1000 / reactiveAsciiStateRef.current.fps;
    // const frameDelay = 6;

    let typing = false;
    // const blinkFrames = 1;
    // const blinkFrames = 1
    const blinkFrames = 6;
    // const blinkFrames = Math.floor(reactiveAsciiStateRef.current.fps / asciiText.length);
    const elapsedBlinkFrame = 0;
    // let elapsedBlinkFrame = blinkFrames;
    const blink = false;

    const hideCaretFrame = Math.floor(blinkFrames / 3);

    console.log(blinkFrames);

    const whitespace = '&nbsp;';

    const textPlaceholder = whitespace.repeat(asciiText.length);

    const placeHolderLength = Math.floor(textPlaceholder.length / whitespace.length);

    console.log('placeHolderLength', placeHolderLength);
    if (!showElement && reactiveAscii && asciiAnimations) {
      // asciiAnimations.hide();
      if (caret && reactiveAscii.children.length === 1) {
        reactiveAscii.innerHTML = '';
        // asciiAnimations.push(caret);
        // asciiAnimations.push(textPlaceholder);
        asciiAnimations.push(caret);
        caretAnimations.show();

        reactiveAscii.innerHTML += textPlaceholder;
      }
    }

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

        const state = reactiveAsciiStateRef.current;
        if (frame > blinkFrames) {
          reactiveAsciiStateRef.current.pos++;

          if (caretAnimations) {
            // caretAnimations.show();
          }

          if (!showElement) {
            showElement = true;
          }

          let trimmedContent = '';

          const endIdx = whitespace.length * state.pos;

          const rightWhitespace = textPlaceholder.substring(endIdx);

          if (reactiveAsciiStateRef.current.pos >= 0) {
            trimmedContent = state.asciiText.substring(0, reactiveAsciiStateRef.current.pos);
          }

          if (caret && caretAnimations) {
            reactiveAscii.innerHTML = `${trimmedContent}&nbsp;`;
            asciiAnimations.push(caret);
            reactiveAscii.innerHTML += rightWhitespace;
          }

        }

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

        if (reactiveAsciiStateRef.current.pos === state.asciiText.length) {
          typing = false;
          done = true;
        }
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
