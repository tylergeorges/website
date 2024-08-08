'use client';

import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export const CurrentPath = ({ className }: { className?: string }) => {
  const pathname = usePathname();

  const paths = pathname.split('/');

  const path = paths[1] === '' ? 'index' : paths[1];

  return <span className={cn('', className)}>{path}.ts</span>;
};
