import styles from '../../../src/output.css' with { type: 'css' };


export class JornadaCategory extends HTMLElement {

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
            
            ::slotted(span){
                font-size : 80px !important;
                color : #8C8C8C !important;
            }

            article{
              max-width : 100%; 
            
            }

        </style>

        <article class='rounded-lg bg-category h-[var(--height-category)]
        w-[var(--lg-width-category)] xl:w-[var(--md-width-category)]  grid place-content-center mx-auto mb-6'>
            <div class='border-0 border-red-500 w-[90%] mx-auto'>
                <slot name='img' class=' size-[80px]  border-0 border-green-400 mx-auto mb-6'></slot>
                <slot name='text' class='font-montserrat700 text-center border-0 border-amber-600 text-[28px]'></slot> 
            </div>
        </article>
    
    `

  }


}

customElements.define('jornada-category', JornadaCategory);