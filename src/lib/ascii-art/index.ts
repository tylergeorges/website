import { dragon } from '@/lib/ascii-art/dragon';
import { circles } from '@/lib/ascii-art/circles';

export const asciiArt = {
  dragon,
  circles
};

export type AsciiArt = keyof typeof asciiArt;
