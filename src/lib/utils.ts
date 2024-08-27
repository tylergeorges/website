import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const IS_SERVER = typeof window === 'undefined';

export const keys = <Obj extends Record<any, any>>(o: Obj): Array<keyof Obj> =>
  Object.keys(o) as unknown as Array<keyof Obj>;

export const isSpace = (key: string) => key === ' ';
