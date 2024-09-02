import { cn } from '@/lib/utils';
import React from 'react';

interface MarkProps {
  className?: string;
}

export const Mark = ({ children, className }: React.PropsWithChildren<MarkProps>) => (
  <mark className={cn('bg-primary p-[5px] text-primary-foreground', className)}>{children}</mark>
);
