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

type ReactiveAnimationHandler = () => void;

export const createReactiveAnimation = (handler: ReactiveAnimationHandler) => ({
  handler
});

export type ReactiveAnimation = (
  config: ReactiveAnimationConfig
) => ReturnType<typeof createReactiveAnimation>;

// eslint-disable-next-line arrow-body-style
export const reactiveTypewriterAnimation: ReactiveAnimation = ({
  finish,
  text,
  fps,
  canvas
  //   caretRef
}) => {
  let animationPos = 0;

  const whitespace = '&nbsp;';

  const textPlaceholder = whitespace.repeat(text.length);

  let caret: HTMLSpanElement;

  if (canvas && canvas.children[0] instanceof HTMLElement) {
    caret = canvas.children[0];
  } else {
    caret = document.createElement('span');
    caret.innerText = 'W';
    caret.className = 'absolute -ml-[1ch] h-[19.056338028169012px] bg-foreground';
  }

  //   canvas.append(caret)

  return createReactiveAnimation(() => {
    // const state = reactiveAsciiStateRef.current;
    animationPos += 1;

    let trimmedContent = '';

    const endIdx = whitespace.length * animationPos;

    const rightWhitespace = textPlaceholder.substring(endIdx);

    if (animationPos >= 0) {
      trimmedContent = text.substring(0, animationPos);
    }

    if (caret) {
      canvas.innerHTML = `${trimmedContent}&nbsp;`;

      canvas.append(caret);
      //   asciiAnimations.push(caret);
      canvas.innerHTML += rightWhitespace;
      //   reactiveAscii.innerHTML += rightWhitespace;
    }

    // if (caretAnimations && !typing) {
    //   // console.log(elapsedBlinkFrame,blinkFrames,frame)
    //   // console.log(blinkFrames/2,elapsedBlinkFrame)

    //   if (elapsedBlinkFrame === hideCaretFrame && !blink) {
    //     caretAnimations.hide();
    //     elapsedBlinkFrame = 0;
    //     // elapsedBlinkFrame -= 0.5;
    //     blink = true;
    //   } else if (elapsedBlinkFrame < blinkFrames ) {
    //     caretAnimations.show();
    //     elapsedBlinkFrame += 0.5;
    //     blink = false;
    //   }

    //   if (!blink) {
    //     // asciiAnimations.show();
    //     // blink = false;
    //     // asciiAnimations.hide();
    //   } else if (blink) {
    //     // elapsedBlinkFrame = 0;
    //     // asciiAnimations.show();
    //     // asciiAnimations.hide();
    //   }
    // }

    if (animationPos === text.length) {
      finish();
    }
  });
};
