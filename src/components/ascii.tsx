import { asciiArt, AsciiArt } from '@/lib/ascii-art';
import { asciiToArray } from '@/lib/ascii-to-array';
import { cn } from '@/lib/utils';

interface AsciiProps {
  ascii: AsciiArt;
  className?: string;
}

export const Ascii = ({ ascii, className }: AsciiProps) => {
  const lines = asciiToArray(asciiArt[ascii]);

  return (
    <code className={cn('text-center center vertical', className)}>
      {lines.map((piece, idx) => (
        <pre className="text-center" key={idx}>
          {piece}
        </pre>
      ))}
    </code>
  );
};
