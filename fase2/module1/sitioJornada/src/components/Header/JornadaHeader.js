import styles from '../../../src/output.css' with { type: 'css' };

export class JornadaHeader extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [styles];
  }

  listItems(){

    const dataRoutes = [{
        href : './blog.html',
        text : 'Blog'
    }, {
       href : './destination.html',
        text : 'Paquetes de viaje' 
    }, {
        href : './contact.html',
        text : 'contacto'
    }]
    const routes = window.location.href.split('/')
    const currentRoute = routes[routes.length - 1].split('.')[0]
    let liRoutes = []
    for (let route of dataRoutes){
        let className = route.href.includes(currentRoute) ? (currentRoute.length > 0) 
        ? 'text-activeRoute' : '' : ''
        // console.log(className, currentRoute)
        liRoutes.push(`<li><a href=${route.href} class='${className} transition-[border] border-b-2 border-b-transparent hover:border-white '>${route.text}</a></li>`)

    }
    return liRoutes.join('')
  }

  connectedCallback() {
    this.shadow.innerHTML = `
    <header class='h-[var(--height-header)]  bg-black text-white flex items-center w-screen'>
        <div class=' border-0 border-red-300 max-w-1200 mx-auto w-[90%] flex justify-between items-center'>
            <figure>
                <a href='./'>
                <img src='./public/images/logoJornada.png' alt='logo jornada' class='w-[260px] h-[64px] hidden lg:block ' />
                <img 
                    src='./public/images/simboloLogoJornada.png' 
                    alt='logo jornada' 
                    class='size-[64px] lg:hidden' 
                    srcset='
                        ./public/images/simboloLogoJornada.png 1x, 
                        ./public/images/simboloLogoJornada128x128.png 2x'/>
                </a>
            </figure>
            <nav class='hidden lg:block'>
                <ul class='flex text-[26px] gap-[40px] font-montserrat500'>
                    ${this.listItems(false)}
                </ul>
            </nav> 
            <button class='lg:hidden size-[32px] buttonMenuIcon menuIcon' aria-label='desplegar menú'>
            </button>

            <div class='fixed border-0 border-red-500 top-0 right-0 h-full w-3/6  bg-[#222222] px-3 navbarMenu hide z-50'>
                <nav class='mt-10'>
                    <ul class='flex flex-col text-[26px] gap-[40px] font-montserrat500 '>
                        ${this.listItems(true)}
                    </ul>
                </nav> 
                <figure class=''>
                    <label class='absolute top-3 right-3 border-2 border-activeRoute p-1 rounded-lg cursor-pointer'>X
                         <input type='checkbox' class='hidden inputCloseIcon'/>
                     </label/
                </figure>
            </div>
        </div>
    </header> 
    `;

    const navbarMenu = this.shadow.querySelector('.navbarMenu')
    const $inputMenuIcon = this.shadow.querySelector('.buttonMenuIcon')
    $inputMenuIcon.addEventListener("click", e =>{
        navbarMenu.classList.toggle('hide')
    })

    const $inputCloseIcon = this.shadow.querySelector('.inputCloseIcon')
    $inputCloseIcon.addEventListener('click', (e) =>{
        navbarMenu.classList.toggle('hide')
    })


  }


}

customElements.define("jornada-header", JornadaHeader);
