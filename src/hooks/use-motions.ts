'use client';

import { useRef, useState } from 'react';
import { useKeyDown } from '@/hooks/use-key-down';

type Motion = Record<string, () => void>;

const keys = <Obj extends Record<any, any>>(o: Obj): Array<keyof Obj> =>
  Object.keys(o) as unknown as Array<keyof Obj>;

export const useMotions = <Motions extends Motion>(motionCallbacks: Motions) => {
  const lastKeyRef = useRef('');

  const [motionKeys] = useState<string[]>(() => {
    const callbackKeys = keys(motionCallbacks);

    const allKeys: string[] = [];

    while (callbackKeys.length) {
      let key = callbackKeys.pop();

      if (typeof key !== 'string') break;

      const keyArr = key.split('+');

      key = keyArr[keyArr.length - 1];

      allKeys.push(key);
    }

    return allKeys;
  });

  useKeyDown(e => {
    const { key } = e;

    if (!motionKeys.includes(key)) {
      lastKeyRef.current = key;

      return;
    }

    if (lastKeyRef.current !== ' ') return;

    const motionCallbackKey = `space+${key}` as keyof typeof motionCallbacks;

    motionCallbacks[motionCallbackKey]();

    lastKeyRef.current = key;
  });
};
