'use client';

import { Fragment, useMemo } from 'react';

import { cn } from '@/lib/utils';
import { useReactiveAscii } from '@/components/reactive-ascii/use-reactive-ascii';

import { Caret } from '@/components/caret';
import {
  randomSymbolsAnmiation,
  ReactiveAnimation,
  reactiveTypewriterAnimation
} from '@/components/reactive-ascii/reactive-animation';

interface ReactiveAsciiProps {
  children: string;
  fps?: number;
  className?: string;
  animations: ReactiveAnimation[];
}

export const ReactiveAscii = ({
  children: asciiText,
  className,
  fps = 60,
  animations = []
}: ReactiveAsciiProps) => {
  const cachedAnimations = useMemo<ReactiveAnimation[]>(
    () => (animations.length ? animations : [reactiveTypewriterAnimation, randomSymbolsAnmiation]),
    [animations]
  );

  const [reactiveAsciiRef, asciiController] = useReactiveAscii({
    asciiText,
    fps,
    animations: cachedAnimations
  });

  return (
    <>
      <div className="absolute top-0 gap-4 horizontal">
        <button
          onClick={asciiController.current.restart}
          type="button"
          className="top-0 mt-7 bg-foreground px-2 text-base text-background"
        >
          Restart
        </button>

        <button
          onClick={asciiController.current.togglePlayingState}
          type="button"
          className="top-0 mt-7 bg-foreground px-2 text-base text-background"
        >
          Pause
        </button>
      </div>

      <span
        ref={reactiveAsciiRef}
        className={cn(
          'relative h-[19.056338028169012px] w-full whitespace-pre bg-transparent text-center text-[13.968173258003766px] font-medium leading-[19.056338028169012px] tracking-[0.5400000000000001px]',
          className
        )}
      >
        <Caret />

        {asciiText.split('').map((char, idx) => (
          <Fragment key={`${char}_${idx}`}>&nbsp;</Fragment>
        ))}
      </span>
    </>
  );
};
