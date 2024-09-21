import styles from '../../../src/output.css' with { type: 'css' };


export class JornadaArticle extends HTMLElement {

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadowRoot.adoptedStyleSheets = [styles];
  }

  connectedCallback() {

    const hasImage = this.getAttribute('image') ? '' : 'hidden'

    console.log(hasImage)



    this.shadow.innerHTML = `
            <style>
                slot{
                    display : block; 
                }
            </style>

            <article class='text-left md:flex border-0 border-blue-700 md:gap-6 mb-8 lg:mb-12'>
                <div class='md:flex-1'>
                    <slot name='title' class='font-montserrat700 text-[28px]'> </slot>
                    <slot name='subTitle' class='font-montserrat400 text-[20px] my-6'> </slot>
                </div>
                <slot name='img' class='h-[360px] max-w-[588px] md:flex-1' ${hasImage}> </slot>
            </article>
    
    
    
    `

  }


}

customElements.define('jornada-article', JornadaArticle);