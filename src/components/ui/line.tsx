'use client';

import { cn } from '@/lib/utils';
import { useEditor } from '@/stores/editor-store';

interface LineProps extends React.HTMLAttributes<HTMLDivElement> {
  number: number;
}

export const Line = ({ children, className, number, ...props }: LineProps) => {
  const currentLine = useEditor(state => state.currentLine);
  const setCurrentLine = useEditor(state => state.setCurrentLine);

  const isActive = currentLine === number;

  const handleLineClick = () => {
    if (isActive) return;

    setCurrentLine(number);
  };

  return (
    <div
      onClick={handleLineClick}
      className={cn('relative inline-flex h-10 w-full items-start gap-10 leading-10', className)}
      {...props}
    >
      <div className={cn('', isActive ? 'text-secondary' : 'text-foreground-subtle')}>{number}</div>
      <div
        className={cn(
          'h-10 w-full leading-10 text-foreground horizontal',
          isActive && 'bg-secondary/10'
        )}
      >
        {children}
      </div>
    </div>
  );
};
