import { create } from 'zustand';

interface EditorState {
  currentLine: number;
  setCurrentLine: (line: number) => void;
}

export const useEditor = create<EditorState>(set => ({
  currentLine: 0,
  setCurrentLine: line => set(() => ({ currentLine: line }))
}));
