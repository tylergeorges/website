/* eslint-disable no-plusplus */
import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const IS_SERVER = typeof window === 'undefined';

export const keys = <Obj extends Record<any, any>>(o: Obj): Array<keyof Obj> =>
  Object.keys(o) as unknown as Array<keyof Obj>;

export const isSpace = (key: string) => key === ' ';

// eslint-disable-next-line no-promise-executor-return
export const sleep = async (ms: number) => new Promise(res => setTimeout(res, ms));

export const arr = (len: number) => {
  const x: number[] = [];

  for (let i = 0; i < len; i++) {
    x[i] = i;
  }

  return x;
};
