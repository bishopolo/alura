import styles from '../../../src/output.css' with { type: 'css' };


export class JornadaTitle extends HTMLElement {

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadowRoot.adoptedStyleSheets = [styles];
  }

  connectedCallback() {
    let positionText = this.getAttribute('position') ?? 'center'
    positionText = positionText === 'center' ? 'text-center' : 'text-left'
    // console.log(positionText)
    this.shadow.innerHTML = `

      <style>

        slot{
          display : block; 
        }

      </style>
        <article class='maxWidth mb-[32px] ${positionText}  border-0 border-red-500 ' >
            <slot name='title' class='font-montserrat700 text-[28px] md:text-[32px] '> </slot>
            <slot name='line'  class="w-[var(--width-title-line)] h-[var(--height-title-line)] bg-activeRoute inline-block mt-[20px] " ></slot>

        </article>
    
    `;

  }


}

customElements.define('jornada-title', JornadaTitle);