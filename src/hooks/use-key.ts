'use client';

import { useEventListener } from '@/hooks/use-event-listener';

export const useKey = (handler: (e: KeyboardEvent) => void) => {
  useEventListener('keypress', handler);
};
