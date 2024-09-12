import { Caret, createReactiveCaret } from '@/components/reactive-ascii/caret';
import { ASCII_SYMBOLS, updateChild } from '@/components/reactive-ascii/utils';
import { sleep } from '@/lib/utils';

/* eslint-disable no-plusplus */
export interface ReactiveAnimationConfig {
  /**
   * The text to be animated.
   */
  text: string;
  /**
   * The fps of the animation. Default is 60.
   */
  duration?: number;
  // /**
  //  * The fps of the animation. Default is 60.
  //  */
  // fps?: number;
  /**
   * Callback to finish animation.
   */
  finish: () => void;
  /**
   * Element where text gets rendered.
   */
  canvas: HTMLElement;
}

type CreateReactiveAnimation = (config: { run: () => Promise<void>; restart: () => void }) => {
  run: (timestamp: number, paused: boolean) => Promise<void>;
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

  const caret = createReactiveCaret(canvas, text, false);

  caret.show();

  canvas.style.opacity = '1';

  const run = async (timestamp: number, paused: boolean) => {
    if (paused) return;

    if (animationPos === 0) {
      // caret.show();
      await sleep(400);
      await caret.blink(400);
      await sleep(400);
    }

    if (animationPos - 1 === text.length) {
      caret.show();

      updateChild(canvas, caret.caret);
      await sleep(400);
      await caret.blink(400);
      await sleep(400);
      await caret.blink(400);

      finish();
    }

    // caret.hide()
    await sleep(1000 / (60 + text.length));
    caret.forward();
    animationPos += 1;
    // caret.show();
  };

  const restart = () => {
    animationPos = 0;
    caret.restart();

    return run;
  };

  return {
    run,
    restart
  };
};

// eslint-disable-next-line arrow-body-style
export const reactiveBackgroundAnimation: ReactiveAnimation = config => {
  const { text, canvas, finish } = config;

  let animationPos = 0;

  const caret = createReactiveCaret(canvas, text, false);

  const run = () => {
    caret.expand();

    const isDone = animationPos === text.length;

    if (isDone) {
      // caret.collapse();

      updateChild(canvas, caret.caret);

      finish();
    }

    animationPos += 1;
  };

  const restart = () => {
    animationPos = 0;
    caret.restart();

    return run;
  };

  return {
    run,
    restart
  };
};
