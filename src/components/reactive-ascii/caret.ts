export class Caret {
  smooth: boolean;

  pos = 0;

  text: string;

  whitespace: string = '&nbsp;';

  textPlaceholder: string = '';

  trimmedContent: string = '';

  width: number;

  caret: HTMLElement;

  parent: HTMLElement;

  chars: string[] = [];

  constructor(parent: HTMLElement, caret: HTMLElement, text: string, smooth: boolean = true) {
    if (!smooth) {
      this.textPlaceholder = this.whitespace.repeat(text.length);

      if (parent.children.length < 1) {
        parent.innerHTML += this.textPlaceholder;
      }
    }

    this.smooth = smooth;
    this.text = text;
    this.parent = parent;
    this.caret = caret;

    const { width } = caret.getBoundingClientRect();
    this.width = width;

    if (smooth) {
      caret.style.position = `absolute`;

      // this.parent.innerHTML = '';

      this.chars = text.split('');
      this.parent.style.display = 'inline';
      this.parent.innerHTML = this.chars
        .map(c => `<span style="opacity: '0'; display:inline-block;">${c}</span>`)
        .join('');
      this.parent.append(caret);

      this.caret.style.transform = `translateX(0)`;
      this.caret.style.transition = 'ease transform 300ms';
    }
  }

  computedStyles = () => window.getComputedStyle(this.caret);

  collapse = () => {
    if (this.pos === this.text.length) return;

    const scaleAmt = this.pos * this.width;

    this.caret.style.transform = `scaleX(${scaleAmt})`;

    this.pos += 1;
  };

  expand = () => {
    if (this.pos === this.text.length) return;

    const startTranslate = this.caret.getBoundingClientRect().x - this.text.length * this.width;

    if (this.pos === 0) {
      this.hide();

      this.caret.style.left = `0px`;
      this.caret.style.zIndex = '-1';
      // this.caret.parentElement.style.color = 'black';
      // this.caret.style.left = `${this.width}px`;
      // this.caret.style.left = `${startTranslate}px`;
      //   this.caret.style.transform = `translateX(-${startTranslate}px)`; //   this.caret.style.transition = 'ease transform 300ms';
      this.show();
    }

    const fullWidth = this.text.length * this.width;
    // const fullWidth = this.text.length;

    const scaleAmt = fullWidth / (this.pos + 1);
    // const scaleAmt =
    //   this.pos > this.text.length
    //     ? this.pos / this.text.length
    //     : this.text.length / Math.max(this.pos, 1);

    console.log(scaleAmt);

    const translate = this.pos / 2;

    // this.caret.style.transform = `translateX(-${startTranslate}px)`;
    this.caret.style.transform = `scaleX(${this.pos + 4}) translateX(${this.pos - this.width}px)`;
    // this.caret.style.transform = `scaleX(${scaleAmt}) translateX(-${startTranslate}px)`;

    this.pos += 1;
  };

  hide = () => {
    this.caret.style.opacity = '0';
  };

  show = () => {
    this.caret.style.opacity = '1';
  };

  restart = () => {
    this.pos = 0;
    this.show();
  };

  forward = () => {
    const { parent } = this;

    if (this.smooth) {
      this.caret.style.transform = `translateX(${this.pos}ch)`;

      const currentChar = parent.children.item(this.pos);

      currentChar?.setAttribute('style', `style="opacity: '1'; display:inline-block;"`);
    } else {
      const endIdx = this.whitespace.length * this.pos;

      const rightWhitespace = this.textPlaceholder.substring(endIdx);

      if (this.pos >= 0) {
        this.trimmedContent = this.text.substring(0, this.pos);
      }

      parent.innerHTML = `${this.trimmedContent}&nbsp;`;
      parent.append(this.caret);

      parent.innerHTML += rightWhitespace;
    }

    this.pos += 1;
  };
}

export const createReactiveCaret = (parent: HTMLElement, text: string, smooth = false) => {
  const caretIdx = parent.children.length > 1 ? 1 : 0;

  let caret = parent.children.item(caretIdx) as HTMLElement | null;

  if (!caret) {
    const caretEl = document.createElement('span');
    caretEl.className = 'absolute -ml-[1ch] h-[19.056338028169012px] w-[1ch] bg-foreground';
    caret = caretEl;
  }

  return new Caret(parent, caret, text, smooth);
};
