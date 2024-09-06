class AnimatedAscii {
    el:HTMLElement
    text:string

    constructor(el:HTMLElement,text:string){
        this.el = el 
        this.text=text
    }



}

export const createReactiveAscii = (tag: keyof JSX.IntrinsicElements = 'span') => {
  const Component = tag;

};
