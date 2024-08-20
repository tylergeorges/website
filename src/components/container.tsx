import { cn } from '@/lib/utils';

export const Container = ({
  children,
  className
}: React.PropsWithChildren<{ className?: string }>) => (
  <div className={cn('max-w-fit flex-1 overflow-x-hidden vertical', className)}>{children}</div>
);
