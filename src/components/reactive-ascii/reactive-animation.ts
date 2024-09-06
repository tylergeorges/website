import { ASCII_SYMBOLS, updateChild } from '@/components/reactive-ascii/utils';

/* eslint-disable no-plusplus */
export interface ReactiveAnimationConfig {
  /**
   * The text to be animated.
   */
  text: string;
  /**
   * The fps of the animation. Default is 60.
   */
  fps?: number;
  /**
   * Callback to finish animation.
   */
  finish: () => void;
  /**
   * Element where text gets rendered.
   */
  canvas: HTMLElement;
}

type CreateReactiveAnimation = (config: { run: () => void; restart: () => void }) => {
  run: () => void;
  restart: () => void;
};

export const createReactiveAnimation: CreateReactiveAnimation = ({ run, restart }) => ({
  run,
  restart
});

export type ReactiveAnimation = (
  config: ReactiveAnimationConfig
) => ReturnType<typeof createReactiveAnimation>;

export const randomSymbolsAnmiation: ReactiveAnimation = ({ canvas, finish, text }) => {
  let currentIteration = 0;

  const run = () => {
    const currentSymbol = ASCII_SYMBOLS[currentIteration];

    const randomizedText = text
      .split('')
      .map(char => {
        if (char === ' ' || char === '\xA0' || char === '&nbsp;') {
          return char;
        }

        return currentSymbol;
      })
      .join('');

    const cursor = canvas.lastElementChild;

    canvas.innerHTML = randomizedText;

    if (cursor) {
      canvas.innerHTML += '&nbsp;';

      canvas.append(cursor);
    }

    if (currentIteration === ASCII_SYMBOLS.length) {
      finish();
    }

    currentIteration += 1;
  };

  const restart = () => {
    currentIteration = 0;

    return run;
  };

  return { run, restart };
};

// eslint-disable-next-line arrow-body-style
export const reactiveTypewriterAnimation: ReactiveAnimation = config => {
  const { text, canvas, finish } = config;

  let animationPos = 0;

  const whitespace = '&nbsp;';
  const textPlaceholder = whitespace.repeat(text.length);

  let caret = canvas.children.item(0) as HTMLElement | null;

  if (!caret) {
    const caretEl = document.createElement('span');
    caretEl.className = 'absolute -ml-[1ch] h-[19.056338028169012px] w-[1ch] bg-foreground';
    caret = caretEl;
  }

  if (canvas.children.length < 1) {
    canvas.innerHTML += textPlaceholder;
  }

  canvas.style.opacity = '1';

  let trimmedContent = '';

  const run = () => {
    const endIdx = whitespace.length * animationPos;

    const rightWhitespace = textPlaceholder.substring(endIdx);

    if (animationPos >= 0) {
      trimmedContent = text.substring(0, animationPos);
    }

    canvas.innerHTML = `${trimmedContent}&nbsp;`;
    canvas.append(caret);

    canvas.innerHTML += rightWhitespace;

    if (animationPos === text.length) {
      caret.style.opacity = '0';

      updateChild(canvas, caret);

      finish();
    }

    animationPos += 1;
  };

  const restart = () => {
    caret.style.opacity = '1';
    animationPos = 0;

    return run;
  };

  return {
    run,
    restart
  };
};
