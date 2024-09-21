import styles from '../../../src/output.css' with { type: 'css' };

export class JornadaBlog extends HTMLElement {

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadowRoot.adoptedStyleSheets = [styles];
  }

  connectedCallback() {
    this.shadow.innerHTML = `

        <style>

            slot{
                display :block; 
            }



        </style>

        <article class='min-h-[var(--height-blog)] w-[--sm-width-blog] md:w-[var(--md-width-blog)] xl:w-[var(--lg-width-blog)] border-0 border-pink-600 mx-auto mb-10  shadow-lg rounded-md overflow-x-hidden max-w-full min-[1300px]:mb-0'>
            <slot name='img' class='block w-full h-[var(--sm-height-img-blog)] md:h-[var(--lg-height-img-blog)] max-w-full '> </slot>
            <slot name='title' class='font-montserrat700 my-6 text-[28px] pl-4'> </slot>
            <slot name='text' class='font-montserrat400 mb-4 text-[20px] px-4'> </slot>
            <slot name='button' class='mb-5'> </slot>
        </article>
    
    
    `

  }


}

customElements.define('jornada-blog', JornadaBlog);