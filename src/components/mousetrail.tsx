/* eslint-disable no-plusplus */

'use client';

import { useAnimationFrame } from '@/hooks/use-animation-frame';
import { useEventListener } from '@/hooks/use-event-listener';
import React, { useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  char: string;
}

const symbols =
  'MNBWQR8gGD6SHO9EKUA50qdPbXp24C3ZmIVFhkwae1jloiYTfunyJtsL7xczv+=r!/;"*_~:,-\'\xB7\xA0'.slice(10);

const getSymbol = () => symbols[Math.floor(Math.random() * symbols.length)];

const baseSize = 16;

export const MouseTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null!);
  const particlesRef = useRef<Particle[]>([]);

  const createParticle = (x: number, y: number): Particle => {
    const size = Math.random() * baseSize + 1;
    const speedX = ((Math.random() - 0.5) * baseSize) / 2;
    const speedY = ((Math.random() - 0.5) * baseSize) / 2;

    const lightness = Math.floor(Math.random() * 101); // Random lightness between 0 and 100
    const color = `hsl(0, 0%, ${lightness}%)`;

    // const color = `hsl(${Math.random() * 360}, 100%, 50%)`;

    return { x, y, size, speedX, speedY, color, char: getSymbol() };
  };

  const updateParticles = () => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    // ctx.font = "16px monospace"

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particlesRef.current.length; i++) {
      const p = particlesRef.current[i];

      p.x += p.speedX;
      p.y += p.speedY;

      p.size *= 0.97;
      // p.size *= 0.97;

      ctx.fillStyle = p.color;

      // ctx.beginPath();
      // ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

      ctx.font = `${p.size}px monospace`;

      ctx.fillText(p.char, p.x, p.y);
      // ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      // ctx.fill();

      //   remove small particles

      if (p.size < 8) {
        particlesRef.current.splice(i, 1);
        i--;
      }
    }
  };

  useEventListener('mousemove', e => {
    for (let i = 0; i < 5; i++) {
      particlesRef.current.push(createParticle(e.clientX, e.clientY));
    }
  });

  useAnimationFrame(updateParticles, 60);

  return (
    <canvas
      ref={el => {
        if (el) {
          el.width = window.innerWidth;
          el.height = window.innerHeight;

          canvasRef.current = el;
        }
      }}
      className="absolute left-0 top-0 size-full overflow-hidden"
    />
  );
};
