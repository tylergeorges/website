import { cn } from '@/lib/utils';

export const CenteredAsterisk = ({
  children,
  className
}: React.PropsWithChildren<{ className?: string }>) => (
  <span className={cn('align-sub', className)}>{children}</span>
);
