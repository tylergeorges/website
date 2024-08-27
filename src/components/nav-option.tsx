import { NewLine } from '@/components/new-line';
import { useMotion } from '@/hooks/use-motion';
import { cn } from '@/lib/utils';

const formatMotion = (motion: string) => {
  const keys = motion.split('+');

  return `SPC ${keys[1]}`;
};

interface NavOptionProps {
  onClick: () => void;
  motion: string;
}

export const NavOption = ({
  children,
  onClick,
  motion
}: WithNonNullableChildren<NavOptionProps>) => {
  useMotion(motion, onClick);

  const motionLabel=formatMotion(motion)
  return (
    <>
      <li className="inline-flex h-[19px] items-center justify-between gap-5">
        <button
          type="button"
          onClick={onClick}
          className={cn(
            'inline-flex h-[19px] w-full items-center justify-between gap-5 p-6',
            'hover:bg-foreground-very-subtle'
            // 'hover:bg-primary hover:text-primary-foreground'
          )}
        >
          {children}
          
          {motionLabel}
        </button>
      </li>
      <NewLine />
      <NewLine />
      <NewLine />
      <NewLine />
    </>
  );
};

export const NavOptionLabel = ({ children }: React.PropsWithChildren) => (
  <span className="inline-flex h-[19px] items-center gap-5">{children}</span>
);
