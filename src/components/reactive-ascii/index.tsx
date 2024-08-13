'use client';

import { useReactiveAscii } from '@/components/reactive-ascii/use-reactive-ascii';
import React from 'react';

interface ReactiveAsciiProps {
  children: string;
  fps?: number;
}

export const ReactiveAscii = ({ children: asciiText, fps = 12 }: ReactiveAsciiProps) => {
  const reactiveAsciiRef = useReactiveAscii({ asciiText, fps });

  return <pre ref={reactiveAsciiRef}>&nbsp;</pre>;
};
