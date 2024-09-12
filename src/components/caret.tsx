'use client';

import { cn } from '@/lib/utils';
import React, { forwardRef } from 'react';

interface CaretProps {
  className?: string;
}

export const Caret = forwardRef<HTMLSpanElement, CaretProps>(({ className }, ref) => (
  <span
    ref={ref}
    // style={{opacity:0}}
    className={cn(
      'absolute -ml-[1ch] h-[var(--line)] w-[1ch] bg-foreground text-transparent',
      className
    )}
  />
));

Caret.displayName = 'Caret';
