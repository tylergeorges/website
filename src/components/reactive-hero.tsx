'use client';

import { ReactiveAscii } from '@/components/reactive-ascii';
import {
  reactiveTypewriterAnimation,
  reactiveBackgroundAnimation,
  randomSymbolsAnmiation
} from '@/components/reactive-ascii/reactive-animation';

interface ReactiveHeroProps {
  children: string;
}

export const ReactiveHero = ({ children }: ReactiveHeroProps) => (
  <ReactiveAscii
    animations={[reactiveTypewriterAnimation, reactiveBackgroundAnimation]}
    // animations={[reactiveTypewriterAnimation, randomSymbolsAnmiation]}
  >
    {children}
  </ReactiveAscii>
);
