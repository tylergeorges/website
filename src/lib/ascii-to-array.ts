export const asciiToArray = (ascii: string | string[]): string[] =>
  Array.isArray(ascii) ? ascii : ascii.split('\n');
