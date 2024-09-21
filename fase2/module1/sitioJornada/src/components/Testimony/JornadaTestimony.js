import styles from '../../../src/output.css' with { type: 'css' };


export class JornadaTestimony extends HTMLElement {

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



        <section class='border-0 border-green-600 mb-8 shadow-md rounded-lg p-2'>
            <slot name='text' class='font-montserrat400  mb-2'></slot> 
            <footer class='border-0 border-red-700 flex'>
                <slot name='img' class='rounded-full size-[88px]  '></slot> 
                <div class='border-0 border-pink-600 w-[176px] flex flex-col justify-center gap-1 ml-6'>
                    <slot name='name' class='font-montserrat700  pl-1'></slot> 
                    <img src='./public/images/star.webp' alt='calification 5 stars' class='h-[32px]'>
                </div>
            </footer>
        

        </section>
    
    `

  }

}

customElements.define('jornada-testimony', JornadaTestimony);