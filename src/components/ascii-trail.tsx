'use client';

import { useEventListener } from '@/hooks/use-event-listener';
import React, { useRef } from 'react';

interface AsciiTrailProps {}

export const AsciiTrail = ({}: AsciiTrailProps) => {
  const canvasRef = useRef<HTMLPreElement>(null);

  useEventListener('click', e => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const size = 6;

    const radii = Math.PI * size;


    let circ = ''


  });

  return <pre className="absolute size-full" ref={canvasRef} />;
};
