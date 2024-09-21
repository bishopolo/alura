import styles from '../../../src/output.css' with { type: 'css' };

export class JornadaHero extends HTMLElement {

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadowRoot.adoptedStyleSheets = [styles];
  }

  connectedCallback() {

    this.shadow.innerHTML = `
        <style>
        slot{
          display : block; 
        
        }

        </style>
        <section class=' h-[var(--height-hero)] w-screen  sectionHero relative flex flex-col justify-center'>
            <slot name='img'  ></slot>
            <article class=' maxWidth  z-10 text-white'>
                <slot name='titleHero' class=''></slot>
                <slot name='subTitle' class='font-montserrat400 text-[20px] lg:text-[32px] border-0 border-purple-800 w-[90%] mx-auto'></slot>
            </article>
        </section>
    `

    // console.log(this.getAttributeNames())
  }

  static observedAttributes = []

  attributeChangedCallback(name, oldValue, newValue) {

  }

}

customElements.define('jornada-hero', JornadaHero);