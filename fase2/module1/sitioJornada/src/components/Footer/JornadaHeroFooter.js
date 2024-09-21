import styles from '../../../src/output.css' with { type: 'css' };

export class JornadaHeroFooter extends HTMLElement {

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
       <section class='h-[var(--sm-height-hero)] lg:h-[var(--md-height-hero)] w-screen'>
            <slot name='img' '> </slot>
       </section>
    
    `

  }


}

customElements.define('jornada-hero-footer', JornadaHeroFooter);