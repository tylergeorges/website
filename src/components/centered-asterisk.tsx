import { cn } from '@/lib/utils';

export const CenteredAsterisk = ({
  children,
  className
}: React.PropsWithChildren<{ className?: string }>) => (
  <span className={cn('before:relative before:bottom-[-0.25em]', className)}>{children}</span>
);
