import { cn } from '@/lib/utils';

export const Container = ({
  children,
  className
}: React.PropsWithChildren<{ className?: string }>) => (
  <div className={cn('w-full max-w-fit py-8 vertical md:px-4', className)}>{children}</div>
);
