/* eslint-disable no-nested-ternary */

'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

interface HyperTextProps {
  children: string;
  duration?: number;
  className?: string;
}

const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

export const HyperText = ({ children: text, duration = 800, className }: HyperTextProps) => {
  const [displayText, setDisplayText] = useState(() => text.split(''));

  const interations = useRef(0);
  const rafRef = useRef(0);
  const startRef = useRef<number | null>(null);
  const lastFrameRef = useRef<number | null>(null);
  const lastIntervalRef = useRef<number | null>(null);
  const frameInterval = 1000 / 60;

  useEffect(() => {
    // const interval =  1000
    const interval = duration / (text.length * 10);

    const animate = (timestamp: number) => {
      if (!startRef.current) {
        startRef.current = timestamp;
      }

      const elapsed = timestamp - startRef.current;
      const newProgress = Math.min(elapsed / duration, 1);

      if (
        (!lastFrameRef.current || timestamp - lastFrameRef.current >= frameInterval) &&
        (!lastIntervalRef.current || timestamp - lastIntervalRef.current >= interval)
      ) {
        // setProgress(newProgress);

        if (interations.current < text.length) {
          setDisplayText(t =>
            t.map((l, i) =>
              l === ' ' ? l : i <= interations.current ? text[i] : alphabets[getRandomInt(26)]
            )
          );
          interations.current += 0.1;
          rafRef.current = requestAnimationFrame(animate);
          lastFrameRef.current = timestamp;
          lastIntervalRef.current = timestamp;
        } else {
          cancelAnimationFrame(rafRef.current);
        }

        lastFrameRef.current = timestamp;
        lastIntervalRef.current = timestamp;
      }

      if (newProgress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(rafRef.current);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    // Clean up interval on unmount
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div className="">
      <AnimatePresence mode="wait">
        {displayText.map((letter, i) => (
          <motion.p
            key={i}
            className={cn(
              'inline-block whitespace-pre',
              letter === ' ' ? 'w-[1ch]' : '',
              className
            )}
            // {...framerProps}
          >
            {letter}
          </motion.p>
        ))}
      </AnimatePresence>
    </div>
  );
};
