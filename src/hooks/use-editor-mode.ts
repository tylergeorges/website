'use client';

import { useState } from 'react';

import { EditorMode } from '@/types';
import { useKeyDown } from '@/hooks/use-key-down';

export const useEditorMode = () => {
  const [mode, setMode] = useState<EditorMode>(EditorMode.Normal);

  useKeyDown(e => {
    const key = e.key as EditorMode;

    if (
      ![EditorMode.Command, EditorMode.Normal, EditorMode.Visual, EditorMode.Insert].includes(
        key as EditorMode
      ) ||
      mode === key
    )
      return;

    setMode(key);
  });

  return mode;
};
