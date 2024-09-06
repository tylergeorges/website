'use client';

import { useImperativeHandle, useRef } from 'react';

interface AsciiAnimations {
  show: () => void;
  hide: () => void;
  push: (content: string | HTMLElement) => void;
  pop: () => void;
}

export const useAsciiAnimations = <T extends HTMLElement>() => {
  const animationRef = useRef<AsciiAnimations>();
  const elementRef = useRef<T>(null);

  useImperativeHandle(animationRef, () => {
    const element = elementRef.current;

    if (!element) throw new Error('Ascii element ref not set.');

    const getComputedStyles = () => window.getComputedStyle(element);

    let textColor = '';

    if (!textColor) {
      textColor = getComputedStyles().color;
    }

    return {
      hide() {
        // if (element.style.opacity === '0') return;
        // if (element.style.opacity === '0') return;
        element.style.opacity ='0'
        // element.style.color = 'transparent';
      },

      show() {
        // if (element.style.opacity === '1') return;

        
        element.style.opacity = '1';
        // element.style.color = textColor;
      },

      pop() {
        if (!element.children.length) return;

        element.removeChild(element.children[element.children.length - 1]);
      },

      push(content) {
        element.append(content);
      }
    };
  });

  return [elementRef, animationRef] as const;
};
