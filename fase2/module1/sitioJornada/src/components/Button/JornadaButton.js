import styles from '../../../src/output.css' with { type: 'css' };


export class JornadaButton extends HTMLElement {

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadowRoot.adoptedStyleSheets = [styles];
  }

  connectedCallback() {


    this.shadow.innerHTML = `
    <style>

        button{
          width : var(--md-width-button);
          max-width : 100%; 
        } 
    </style>

        <button class='bg-button hover:bg-hoverButton transition-colors h-[var(--height-button)] xl:w-[var(--lg-width-button)]  text-white rounded-lg font-montserrat700 text-[20px] p-4  block mx-auto '>
            Ver detalles 
        </button> 
    
    `

    // console.log(className)
  }

  static observedAttributes = []

  attributeChangedCallback(name, oldValue, newValue) {

  }

}

customElements.define('jornada-button', JornadaButton);