'use client';

import { cn } from '@/lib/utils';
import { useReactiveAscii } from '@/components/reactive-ascii/use-reactive-ascii';

import { Caret } from '@/components/caret';
import {
  ReactiveAnimation,
  ReactiveAnimationConfig,
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
  fps = 24,
  animations = [reactiveTypewriterAnimation]
}: ReactiveAsciiProps) => {
  const [reactiveAsciiRef, caretRef] = useReactiveAscii({ asciiText, fps,animations });

  return (
    <>
      <button
        type="button"
        className="absolute top-0 mt-7 bg-foreground px-2 text-base text-background"
      >
        Restart
      </button>

      <span
        ref={reactiveAsciiRef}
        className={cn(
          'relative h-[19.056338028169012px] w-full bg-transparent text-center text-[13.968173258003766px] font-medium leading-[19.056338028169012px] tracking-[0.5400000000000001px]',
          className
        )}
      >
        <Caret ref={caretRef} />
        {/* {asciiText} */}
      </span>
    </>
  );
};
