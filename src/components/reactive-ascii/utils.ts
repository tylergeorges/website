/* eslint-disable no-plusplus */
/* eslint-disable no-continue */

const symbols =
  'MNBWQR8gGD6SHO9EKUA50qdPbXp24C3ZmIVFhkwae1jloiYTfunyJtsL7xczv+=r!/;"*_~:,-\'\xB7\xA0'.slice(10);

export const getRandIdx = (input: string | any[]) => Math.floor(Math.random() * input.length);

export const getRandomSymbol = () => symbols[Math.floor(Math.random() * symbols.length)];

export const getRepeatedSymbolFrames = () =>
  symbols
    .split('')
    .map(char => `${char}${char}`)
    .join('');

export const ASCII_SYMBOLS = getRepeatedSymbolFrames();

export const replaceText = (text: string, index: number, char: string) =>
  text.substring(0, index) + char + text.substring(index + char.length);

export const updateChild = (parent: HTMLElement, el: HTMLElement | string) => {
  let idx = 0;

  let parentChildren: NodeListOf<ChildNode> | HTMLCollection;

  if (typeof el === 'string') {
    parentChildren = parent.childNodes;

    for (let i = 0; i < parentChildren.length; i++) {
      const textNode = parentChildren.item(i).nodeValue;

      if (!textNode) continue;

      if (textNode.trim().toLowerCase() === el.trim().toLowerCase()) {
        idx = i;

        break;
      }
    }

    const baseNode = parentChildren.item(idx);
    const foundNode = parentChildren.item(idx).cloneNode();

    foundNode.nodeValue = el;
    foundNode.nodeValue = el;

    parent.replaceChild(foundNode, baseNode);

    return;
  }

  parentChildren = parent.children;

  const elStyles = el.getAttribute('style');

  el.setAttribute('style', '');

  for (let i = 0; i < parentChildren.length; i++) {
    const child = parentChildren.item(i);

    if (!child) continue;

    child.setAttribute('style', '');

    if (child.isEqualNode(el)) {
      idx = i;

      break;
    }
  }
  if (elStyles) {
    el.setAttribute('style', elStyles);
  }

  const child = parent.children.item(idx);

  if (child) {
    parent.replaceChild(el, child);
  }
};
