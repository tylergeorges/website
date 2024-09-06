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
    const blinkFrames = Math.floor(reactiveAsciiStateRef.current.fps / asciiText.length);
    let elapsedBlinkFrame = blinkFrames;
    // let elapsedBlinkFrame = blinkFrames;
    let blink = false;

    const whitespace = '&nbsp;';

    const textPlaceholder = whitespace.repeat(asciiText.length);

    if (!showElement && asciiAnimations) {
      // asciiAnimations.pop();
      if (caret) {
        // asciiAnimations.push(caret);
        // asciiAnimations.push(textPlaceholder);
      }
    }

    const animate = (timestamp: number) => {
      if (!asciiAnimations || !reactiveAscii) return;

      if (start === undefined) {
        start = timestamp;

        if (caret) {
          asciiAnimations.push(textPlaceholder);
        }
      }

      const elapsed = timestamp - start;
      const seg = Math.floor(elapsed / delay);

      if (seg > frame) {
        frame = seg;

        if (done) cancelAnimationFrame(rafRef.current);

        const state = reactiveAsciiStateRef.current;

        if (frame > blinkFrames) {
          if (!typing) {
            typing = true;
          }
          asciiAnimations.show();

          if (!showElement) {
            showElement = true;
          }

          let trimmedContent = '';

          if (reactiveAsciiStateRef.current.pos >= 0) {
            trimmedContent = state.asciiText.substring(0, reactiveAsciiStateRef.current.pos);
          }

          if (caret) {
            reactiveAscii.innerHTML = `${trimmedContent}&nbsp;`;
            asciiAnimations.push(caret);
          }

          reactiveAsciiStateRef.current.pos++;
        }

        if (caretAnimations && !typing) {
          if (!blink) {
            // asciiAnimations.show();
            caretAnimations.show();
            // blink = false;
            // asciiAnimations.hide();
          } else if (blink) {
            // elapsedBlinkFrame = 0;
            // asciiAnimations.show();

            // asciiAnimations.hide();
            caretAnimations.hide();
          }

          if (elapsedBlinkFrame === blinkFrames) {
            elapsedBlinkFrame = 0;
            reactiveAsciiStateRef.current.pos++;
            blink = false;
          } else if (elapsedBlinkFrame < blinkFrames) {
            elapsedBlinkFrame += 1;

            blink = true;
          }
        }

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
  }, []);

  return [reactiveAsciiRef, caretRef] as const;
};
