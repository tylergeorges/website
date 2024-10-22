'use client';

import { useCallback, useEffect, useRef } from 'react';

import { useIsomorphicLayoutEffect } from '@/hooks/use-isomorphic-layout-effect';

export const useAnimationFrame = (callback: (deltaTime: number) => void, fps: number = 60) => {
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);
  const fpsIntervalRef = useRef<number>(1000 / fps); // ms per frame

  const cachedCallbackRef = useRef(callback);

  useIsomorphicLayoutEffect(() => {
    cachedCallbackRef.current = callback;
  });

  const animate = useCallback((time: number) => {
    if (previousTimeRef.current === null) {
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
      return;
    }

    const deltaTime = time - previousTimeRef.current;

    if (deltaTime >= fpsIntervalRef.current) {
      cachedCallbackRef.current(deltaTime);
      previousTimeRef.current = time - (deltaTime % fpsIntervalRef.current);
    }

    requestRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [animate]); // Add fps to dependency array to respond to fps changes

  return requestRef;
};
