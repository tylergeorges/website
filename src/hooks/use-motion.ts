'use client';

import { useRef } from 'react';

import { useKeyDown } from '@/hooks/use-key-down';

export const useMotion = (motion: string, fn: () => void) => {
  const keysPressedStack = useRef('');

  const clearKeyStack = () => {
    keysPressedStack.current = '';
  };

  useKeyDown(e => {
    let { key } = e;

    if (key === ' ') {
      clearKeyStack();
      key = 'space+';
    }

    keysPressedStack.current += key;

    // if string we're building doesn't match motion
    if (!motion.startsWith(keysPressedStack.current)) {
      clearKeyStack();
      return;
    }

    if (keysPressedStack.current === motion) {
      clearKeyStack();
      fn();
    }
  });
};
