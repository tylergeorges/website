'use client';

import { Fragment, useMemo } from 'react';

import { cn } from '@/lib/utils';
import { useReactiveAscii } from '@/components/reactive-ascii/use-reactive-ascii';

import { Caret } from '@/components/caret';
import { ReactiveAnimation } from '@/components/reactive-ascii/reactive-animation';

interface ReactiveAsciiProps {
  children: string;
  // fps?: number;
  className?: string;
  animations: ReactiveAnimation[];
  duration: number;
}

export const ReactiveAscii = ({
  children: asciiText,
  className,
  duration = 1000,
  // fps = 60,
  animations = []
}: ReactiveAsciiProps) => {
  const cachedAnimations = useMemo<ReactiveAnimation[]>(
    () => animations,
    // : [reactiveTypewriterAnimation, reactiveBackgroundAnimation, ],
    [animations]
  );

  const [reactiveAsciiRef, asciiController] = useReactiveAscii({
    asciiText,
    // fps,
    duration,
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
          onClick={e => {
            e.preventDefault();
            asciiController.current.togglePlayingState();
          }}
          type="button"
          className="top-0 mt-7 bg-foreground px-2 text-base text-background"
        >
          Pause
        </button>
      </div>

      <span ref={reactiveAsciiRef} className={cn('relative font-medium uppercase', className)}>
        <Caret />
        {asciiText
          .split('')
          .map((char, idx) =>
            char === ' ' ? (
              <Fragment key={`${char}-${idx}`}>{'\xA0\xA0'}</Fragment>
            ) : (
              <Fragment key={`${char}-${idx}`}>{'\xA0'}</Fragment>
            )
          )}
      </span>
    </>
  );
};
