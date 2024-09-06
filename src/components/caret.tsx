'use client';

import { cn } from '@/lib/utils';
import React, { forwardRef } from 'react';

interface CaretProps {
  className?: string;
}

export const Caret = forwardRef<HTMLSpanElement, CaretProps>(({ className }, ref) => (
  <span
    ref={ref}
    className={cn('absolute -ml-[1ch] h-[19.056338028169012px] bg-foreground', className)}
  >
    W
    </span>
));

Caret.displayName = 'Caret';
