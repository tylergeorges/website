import Link from 'next/link';
import { forwardRef } from 'react';
import { type VariantProps, tv } from 'tailwind-variants';

import { cn } from '@/lib/utils';

const buttonVariants = tv({
  base: 'mx-1 box-border p-[1ch] py-2.5 text-[22px] text-foreground',
  variants: {
    color: {
      default: 'select bg-transparent',
      white: 'bg-white text-black',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      destructive: 'bg-destructive hover:bg-destructive/60 active:bg-destructive/40 text-white',
      success: 'bg-success hover:bg-success/90 text-white'
    },

    variant: {
      default: '',
      link: 'bg-transparent hover:bg-transparent hover:underline',
      outline:
        'border border-secondary bg-transparent hover:bg-secondary hover:text-secondary-foreground',
      ghost: 'border-none bg-transparent hover:bg-secondary',
      transparent: 'bg-transparent hover:bg-transparent'
    },

    selected: {
      true: 'select text-primary-foreground'
    },

    fill: {
      true: 'w-full'
    }
  },

  defaultVariants: {
    color: 'default',
    size: 'md'
  }
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    ButtonVariants {
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, React.PropsWithChildren<ButtonProps>>(
  (
    {
      className,
      type = 'button',
      selected,
      disabled,
      children,
      variant,
      color,
      loading,
      fill,
      ...props
    },
    ref
  ) => (
    <button
      {...props}
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={buttonVariants({
        variant,
        color,
        fill,
        className
      })}
      disabled={loading || disabled}
      ref={ref}
    >
      <span className={cn('p-1.5', selected && 'bg-primary text-primary-foreground')}>
        &nbsp;{children}&nbsp;
      </span>
    </button>
  )
);

Button.displayName = 'Button';

type ButtonLinkProps = Omit<React.ComponentProps<typeof Link>, 'color'> &
  ButtonVariants & {
    active?: boolean;
    className?: string;
  };

export const ButtonLink = forwardRef<HTMLAnchorElement, React.PropsWithChildren<ButtonLinkProps>>(
  ({ className, children, color, active, variant, fill, ...props }, ref) => (
    <Link
      {...props}
      className={buttonVariants({
        fill,
        className: ` ${className}`
      })}
      ref={ref}
    >
      {children}
    </Link>
  )
);

ButtonLink.displayName = 'ButtonLink';
