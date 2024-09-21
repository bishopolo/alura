import styles from '../../../src/output.css' with { type: 'css' };

export class JornadaCard extends HTMLElement {

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadowRoot.adoptedStyleSheets = [styles];
  }

  connectedCallback() {


    const url = this.getAttribute('bg')

    this.shadow.innerHTML = `
      <style>

      section{
        background : linear-gradient(45deg, #00000050, #00000050), url('${url}');
        background-size : cover;
        background-position : center;
        max-width: clamp(var(--md-width-card), 100%, var(--lg-width-card));
        height : var(--md-height-card);
      }

        slot{
          display : block;
        }

        @media (width >=1400px){
          section{
            height: var(--lg-height-card) 

          } 
        
        }

      </style>
      <section class=' rounded-2xl text-white mx-auto py-1 my-6 min-[1400px]:h-[var(--lg-height-card)] border-0 border-blue-500 '> 
        <div class='border-0 border-red-500 w-[94%] mx-auto'>
          <h2 class='font-montserrat400 mt-[18px] mb-2 text-center border-0 border-blue-400 text-[20px]'>HOTEL+AÉREO</h2>
          <slot name='country' class='text-[40px] font-montserrat700 mb-[22px] text-center border-0 border-green-400'></slot>
          <slot name='price' class='text-[32px] font-montserrat700 mb-[20px] text-center '></slot>
          <slot name='button'></slot>
        </div>
      </section>
    `
    console.log(url)
  }


}

customElements.define('jornada-card', JornadaCard);