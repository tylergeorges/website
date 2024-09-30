import { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '@/lib/utils';

const badgeVariants = tv({
  base: 'font-bp inline-flex w-fit items-center justify-center px-1 py-0.5  font-mono text-xs -tracking-[0.03em]',

  variants: {
    variant: {
      none: 'r',
      outline: 'text-currentColor bg-transparent ring-1 ring-current',
      // outline: 'border border-foreground/20 bg-transparent text-foreground/50',
      ghost: 'bg-transparent',
      fill: 'font-medium'
    },

    color: {
      default: 'bg-primary text-primary',
      secondary: 'text-secondary',
      white: 'text-white',
      orange: 'bg-orange-500 text-orange-500',
      red: 'text-red-500'
    },

    position: {
      'top-right': 'absolute end-0 top-0 -me-2 -mt-1 flex size-3 p-0'
    }
  },

  compoundVariants: [
    {
      variant: 'fill',
      color: 'default',
      className: 'bg-primary text-primary-foreground'
    },
    {
      variant: 'fill',
      color: 'orange',
      className: 'bg-orange-500 text-black'
    },
    {
      variant: 'fill',
      color: 'red',
      className: 'bg-red-500 text-black'
    },
    {
      variant: 'fill',
      color: 'secondary',
      className: 'bg-secondary text-secondary-foreground'
    },
    {
      variant: 'fill',
      color: 'white',
      className: 'bg-white text-black'
    },

    {
      variant: 'outline',
      color: 'default',
      className: 'bg-transparent'
    },
    {
      variant: 'outline',
      color: 'orange',
      className: 'bg-transparent'
    },
    {
      variant: 'outline',
      color: 'red',
      className: 'bg-transparent'
    },
    {
      variant: 'outline',
      color: 'secondary',
      className: 'bg-transparent'
    },
    {
      variant: 'outline',
      color: 'white',
      className: 'bg-transparent'
    }
  ],

  defaultVariants: {
    color: 'default',
    variant: 'outline'
  }
});

type BadgeVariants = VariantProps<typeof badgeVariants>;

interface BadgeProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>, BadgeVariants {}

export const Badge = forwardRef<HTMLDivElement, React.PropsWithChildren<BadgeProps>>(
  ({ className, children, variant, position, color, ...props }, ref) => (
    <div
      {...props}
      className={badgeVariants({
        variant,
        color,
        position,
        className
      })}
      ref={ref}
    >
      {children || (
        <span className="relative h-full animate-ping rounded-full bg-inherit tracking-tighter" />
      )}
    </div>
  )
);

Badge.displayName = 'Badge';
