import styles from '../../../src/output.css' with { type: 'css' };

export class JornadaFooter extends HTMLElement {

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadowRoot.adoptedStyleSheets = [styles];
  }

  connectedCallback() {

    this.shadow.innerHTML = `

        <style>

                a{
                        text-decoration : underline wavy  #bada55 !important ;
                }

        </style>
        <section class='bg-black w-screen  lg:h-[232px] flex'>
            <div class='maxWidth lg:flex lg:justify-between lg:items-center text-white border-0 border-red-600 '>
                <img src='./public/images/logoFooter.png' class='w-[160px] h-[40px] block mx-auto lg:hidden mt-[32px] mb-4' />
                <article  class='text-center text-[20px] lg:text-left basis-[60%]'>
                    <p class='font-montserrat400 mb-2'>Horario de atención: 08h - 20h (Lunes a Sábado) </p>
                    <p class='font-montserrat400'>Desarrollado por Alura Latam, maquetado por <a href='https://www.linkedin.com/in/jorge-echeverri-dev/ class='underline decoration-wavy  decoration-slate-50'> bishopolo.</a> Proyecto fictício sin fines comerciales.. </p>
                </article>
                <article class='mt-[32px] border-0 border-orange-500 lg:mt-0 mb-[32px] lg:mb-0 flex-0'>
                    <p class='font-montserrat400 text-center border-0 border-purple-500 mx-auto'>Accede a nuestras redes sociales:</p>
                    <div class='border-0 border-purple-900 flex justify-center gap-2 mt-4'>
                        <img src='./public/images/iconWhatsapp.png' alt='icon whatsapp' />
                        <img src='./public/images/iconInstagram.png' alt='icon instragram' />
                        <img src='./public/images/iconTwitter.png' alt='icon twitter' />
                    </div>
                </article>
            </div> 

        </section>
    
    `

  }


}

customElements.define('jornada-footer', JornadaFooter);