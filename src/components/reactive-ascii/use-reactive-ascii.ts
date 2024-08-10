/* eslint-disable no-plusplus */

'use client';

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
  const reactiveAsciiRef = useRef<HTMLPreElement>(null);
  const reactiveAsciiStateRef = useRef<ReactiveAsciiState>({ asciiText, fps, pos: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    let done = false;

    let start: number;

    let frame = -1;

    const asciiElement = reactiveAsciiRef.current;

    const delay = 1000 / reactiveAsciiStateRef.current.fps;

    const animate = (timestamp: number) => {
      if (!asciiElement) return;

      if (start === undefined) start = timestamp;

      const elapsed = timestamp - start;
      const seg = Math.floor(elapsed / delay);

      if (seg > frame) {
        frame = seg;

        if (done) cancelAnimationFrame(rafRef.current);

        const state = reactiveAsciiStateRef.current;

        asciiElement.innerText = `${asciiElement?.innerText}${state.asciiText[state.pos]}`;

        reactiveAsciiStateRef.current.pos++;

        if (reactiveAsciiStateRef.current.pos === state.asciiText.length) done = true;
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

  return reactiveAsciiRef;
};
