import { asciiArt, AsciiArt } from '@/lib/ascii-art';
import { asciiToArray } from '@/lib/ascii-to-array';

interface AsciiProps {
  ascii: AsciiArt;
}

export const Ascii = ({ ascii }: AsciiProps) => {
  const lines = asciiToArray(asciiArt[ascii]);

  return (
    <code className="text-center center vertical">
      {lines.map((piece, idx) => (
        <pre className="text-center" key={idx}>
          {piece}
        </pre>
      ))}
    </code>
  );
};
