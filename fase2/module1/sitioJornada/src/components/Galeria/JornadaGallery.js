import styles from '../../../src/output.css' with { type: 'css' };

export class JornadaGallery extends HTMLElement {

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


            ::slotted(img){
              

              min-width : min(100%, var(150px));
            
            }


            </style>

            <section class='border-0 border-blue-500 w-auto mx-auto  grid grid-cols-[repeat(2,minmax(140px,385px))] grid-rows-[254px,182px] gap-5'>
                <slot name='img1' class=min-'w-[var(--sm-width-img-gallery)] lg:w-[var(--lg-width--img-gallery)] h-[var(--height-img-gallery)] max-w-full'> </slot>
                <slot name='img2' class='min-w-[var(--sm-width-img-gallery)]  lg:w-[var(--lg-width--img-gallery)] h-[var(--height-img-gallery)] max-w-full'> </slot><slot name='img3' class='h-[var(--height-img2-gallery)] min-w-[var(--sm-width-img2-gallery)]  max-w-[var(--lg-width-img2-gallery)] col-span-2'> </slot>

            </section>
        `
  }

}

customElements.define('jornada-gallery', JornadaGallery);



/* 
    <article class='flex gap-6 mb-5'>
                <slot name='img1' class=min-'w-[var(--sm-width-img-gallery)] lg:w-[var(--lg-width--img-gallery)] h-[var(--height-img-gallery)] max-w-full'> </slot>
                <slot name='img2' class='min-w-[var(--sm-width-img-gallery)]  lg:w-[var(--lg-width--img-gallery)] h-[var(--height-img-gallery)] max-w-full'> </slot>
              </article>

              <article>
                <slot name='img3' class='h-[var(--height-img2-gallery)] min-w-[var(--sm-width-img2-gallery)]  max-w-[var(--lg-width-img2-gallery)]'> </slot>
              </article>


*/