import { cn } from '@/lib/utils';

export const Container = ({
  children,
  className
}: React.PropsWithChildren<{ className?: string }>) => (
  <div className={cn('max-w-fit flex-1 overflow-x-hidden vertical md:px-4 md:py-8', className)}>
    {children}
  </div>
);
