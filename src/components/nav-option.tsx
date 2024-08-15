import { NewLine } from '@/components/new-line';
import { cn } from '@/lib/utils';

export const NavOption = ({
  children,
  onClick
}: React.PropsWithChildren<{ onClick?: (e: React.SyntheticEvent) => void }>) => (
  <>
    <li className="inline-flex h-[19px] items-center justify-between gap-5">
      <button
        type="button"
        onClick={onClick}
        className={cn(
          'inline-flex h-[19px] w-full items-center justify-between gap-5 p-6',
          'hover:bg-foreground-very-subtle',
          // 'hover:bg-primary hover:text-primary-foreground'
        )}
      >
        {children}
      </button>
    </li>
    <NewLine />
    <NewLine />
    <NewLine />
    <NewLine />
  </>
);

export const NavOptionLabel = ({ children }: React.PropsWithChildren) => (
  <span className="inline-flex h-[19px] items-center gap-5">{children}</span>
);
