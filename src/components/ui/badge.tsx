import { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '@/lib/utils';

const badgeVariants = tv({
  base: cn('inline-flex w-fit items-center justify-center rounded-xl px-2.5 py-1 text-sm'),

  variants: {
    variant: {
      default: 'bg-foreground text-background',
      secondary: 'bg-foreground/10 text-foreground',
      white: 'bg-white text-black',
      destructive: 'text-destructive-foreground bg-destructive',
      outline: 'border border-foreground/20 bg-transparent text-foreground/50',
      ghost: 'bg-transparent text-primary',
      transparent: 'text-muted-foreground bg-transparent'
    },

    position: {
      'top-right': 'absolute end-0 top-0 -me-2 -mt-1 flex size-3 p-0'
    }
  },

  defaultVariants: {
    variant: 'default'
  }
});

type BadgeVariants = VariantProps<typeof badgeVariants>;

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, BadgeVariants {}

export const Badge = forwardRef<HTMLDivElement, React.PropsWithChildren<BadgeProps>>(
  ({ className, children, variant, position, ...props }, ref) => (
    <div {...props} className={badgeVariants({ variant, position, className })} ref={ref}>
      {children || <span className="relative h-full animate-ping rounded-full bg-inherit" />}
    </div>
  )
);

Badge.displayName = 'Badge';
