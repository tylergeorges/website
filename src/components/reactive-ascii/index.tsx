'use client';

import { useReactiveAscii } from '@/components/reactive-ascii/use-reactive-ascii';
import { cn } from '@/lib/utils';
import React from 'react';

interface ReactiveAsciiProps {
  children: string;
  fps?: number;
  className?: string;
}

export const ReactiveAscii = ({ children: asciiText, className, fps = 12 }: ReactiveAsciiProps) => {
  const reactiveAsciiRef = useReactiveAscii({ asciiText, fps });

  return (
    <pre ref={reactiveAsciiRef} className={cn('bg-transparent font-pixels', className)}>
      {asciiText}
    </pre>
  );
};
