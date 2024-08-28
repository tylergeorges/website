'use client';

import { cn } from '@/lib/utils';
import { EditorMode } from '@/types';
import { useEditorMode } from '@/hooks/use-editor-mode';
import { CenteredAsterisk } from '@/components/centered-asterisk';

interface StatusIndicatorProps {
  className?: string;
}

export const StatusIndicator = ({ className }: StatusIndicatorProps) => {
  const mode = useEditorMode();

  let modeLabel: React.ReactNode = '';

  switch (mode) {
    case EditorMode.Normal:
      modeLabel = <CenteredAsterisk className="text-xl font-black before:content-['**']" />;
      break;
    case EditorMode.Command:
      modeLabel = 'command';
      break;
    case EditorMode.Visual:
      modeLabel = 'visual';
      break;
    case EditorMode.Insert:
      modeLabel = 'insert';
      break;
    default:
      break;
  }

  return (
    <div
      className={cn(
        'h-7 select-none overflow-hidden text-lg font-bold uppercase text-primary-foreground',
        mode === EditorMode.Normal && 'bg-normal-mode',
        mode === EditorMode.Command && 'bg-command-mode',
        mode === EditorMode.Visual && 'bg-visual-mode',
        mode === EditorMode.Insert && 'bg-insert-mode',
        className
      )}
    >
      &nbsp;{modeLabel}&nbsp;
    </div>
  );
};
