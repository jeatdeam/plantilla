import {array_products} from "./lista_productos.js";
import {$header_template,$footer_template} from "./templateHeaderFooter.js"


export class Catalogo{
    constructor(marca_product){
    this.marca_product = marca_product;


    this.body=document.querySelector('body');
    }
    crearCatalogo(){
        this.deleteHeaderMainFooter();


        this.insertHeader();
        this.addEvents();
        this.eventos_menuDesplegable();
        this.insertMain();
        this.insertFooter();
        this.responsive_menu();
    }
    insertHeader(){
        const header_clone=$header_template.content.cloneNode(true);
        this.body.prepend(header_clone);

        const marcas=["TOCOBO","COSRX","NUMBUZ:N","HARUHARU","BEAUTY OF JOSEON",
            "SKIN1004","NACIFIC","EUCERIN","AVENE","LA ROCHE-POSAY"];

        const li_category=document.querySelectorAll('.lista_two>li');

        li_category.forEach((li,index) => {

            li.textContent=`${marcas[index]}`;
        })

        const $category_all=document.querySelectorAll('.lista');


        $category_all.forEach(element=> {


            element.addEventListener('click', (event) => {
                // event.stopPropagation();
                if (event.target.dataset) {
                    const element_clicked = event.target.getAttribute('data-category');
                    sessionStorage.setItem('category-marca', JSON.stringify(element_clicked));
                    window.location = "main.html";
                }

            })
        })

        const icon_house=document.querySelector('#lista_1>li:nth-of-type(1)');

        icon_house.addEventListener('click',(event)=>{

            window.location="index.html";


        })
    }
    insertFooter(){
        const footer_clone=$footer_template.content.cloneNode(true);
        this.body.appendChild(footer_clone);
    }
    insertMain(){
        const main_productos=document.createElement("main");
        const div_productos=document.createElement("div");
        const h1_products_tittle=document.createElement('h1');
        h1_products_tittle.classList.add('tittle_products_catalog')
        h1_products_tittle.innerHTML=`
        <h1>${this.marca_product}</h1>
        `
        const h1_products_tittle_style=document.createElement('style');
        h1_products_tittle_style.innerHTML=`
            .tittle_products_catalog{
            text-align: center;
            width: 100%;
            margin-top: 75px;
            }
        `
        document.head.appendChild(h1_products_tittle_style);
        main_productos.appendChild(h1_products_tittle);


        main_productos.appendChild(div_productos);
        div_productos.classList.add('cuadrados');
        for(let i=0;i<array_products.length;i++){
            const $element=document.createElement('div');
            $element.classList.add('element_cuadrado',`elemenet_cuadrado_${i+1}`);
            $element.setAttribute('data-id',`${i+1}`);
            $element.textContent=`${i+1}`;
            div_productos.appendChild($element);
        }

        this.body.appendChild(main_productos);
    }
    removeHeader(){
        const header_delete=document.querySelector('header');
        if(header_delete) header_delete.remove();
    }
    removeFooter(){
        const footer_delete=document.querySelector('footer');
        if(footer_delete)footer_delete.remove();
    }
    removeMain(){
        const main_delete=document.querySelector('main');
        if(main_delete) main_delete.remove();
    }
    deleteHeaderMainFooter(){

        this.removeHeader();
        this.removeMain();
        this.removeFooter();

    }
    responsive_menu(){
        const array_menu=[
            {dataIconMenu: '1',texto1:"hola",texto2:"hola2",texto3:"hola3",texto4:"hola4",texto5:"hola5",texto6:"hola6"},
            {dataIconMenu: '2',texto1:"hola",texto2:"hola2",texto3:"hola3",texto4:"hola4",texto5:"hola5",texto6:"hola6"},
            {dataIconMenu: '3',texto1:"hola",texto2:"hola2",texto3:"hola3",texto4:"hola4",texto5:"hola5",texto6:"hola6"},
            {dataIconMenu: '4',texto1:"hola",texto2:"hola2",texto3:"hola3",texto4:"hola4",texto5:"hola5",texto6:"hola6"},
            {dataIconMenu: '5',texto1:"hola",texto2:"hola2",texto3:"hola3",texto4:"hola4",texto5:"hola5",texto6:"hola6"},
            {dataIconMenu: '6',texto1:"hola",texto2:"hola2",texto3:"hola3",texto4:"hola4",texto5:"hola5",texto6:"hola6"}
        ];


        function menu_left(){

            const $div_menu=document.createElement('div');
            $div_menu.classList.add('menu_responsive');
            const $container_menu=document.querySelector('.nav_div');
            function menu_inner() {
                $div_menu.innerHTML = `
    <h1>K-MOON</h1>
    <ul>
    <li>INICIO<i data-icon-menu="1" class="fa-solid fa-angle-down"></i></li>
    <li>MARCAS<i data-icon-menu="2" class="fa-solid fa-angle-down"></i></li>
    <li>CUIDADO DE LA PIEL<i data-icon-menu="3" class="fa-solid fa-angle-down"></i></li>
    <li>DERMOCOSMETICA<i data-icon-menu="4" class="fa-solid fa-angle-down"></i></li>
    <li>SKINCARE COREANO<i data-icon-menu="5" class="fa-solid fa-angle-down"></i></li>
    <li>MAQUILLAJE<i data-icon-menu="6" class="fa-solid fa-angle-down"></i></li>
    </ul>  
    <i class="fa-solid fa-user"></i>
`
                return $div_menu.innerHTML;
            }

            menu_inner();

            function menu_inner_style(){
                const $style_menu=document.createElement('style');
                $style_menu.innerHTML=`
    .nav_div{
    position:relative;
    }
    .menu_responsive{
    position:absolute;
    left: 0;
    top: 100%;
    border: 2px solid black;
    width: 325px;
    height: 550px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    background: rgba(150,150,150,0.8);
    border-radius:15px;
    display: none;
    }
    .active_menu{
    display: flex;
    background: rgba(150,150,150,0.8);
    }
    .menu_responsive > ul{
    display: flex;
    flex-direction:column;
    gap: 35px 0;
    padding: 0 35px;
    list-style: none;
    align-items: center;
    width: 100%;
  
    }
    .menu_responsive > ul > li{
    padding: 7.5px 25px;
    border: 1px solid transparent;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    background: lightblue;
    gap: 15px;
    width: 100%;
    // text-align: center;
    }
    .menu_responsive > ul > li:hover{
    border-color: black;
    color: white; 
    
    }
    .menu_responsive>ul>li>i:hover{
    color: blue;
   
    }
    // .li_active {
    //    opacity:0;
    // }


    .menu_responsive > i{
    
    border: 1px solid black;
    border-radius: 50%;
    padding: 10px;
    
    
    }
`
                document.head.appendChild($style_menu);


                $container_menu.appendChild($div_menu);

                return $container_menu;
            }
            menu_inner_style();

            $container_menu.addEventListener('click', (e) => {

                if (e.target.matches('#lista_1 > li:nth-of-type(3)>i')) {
                    $div_menu.classList.toggle('active_menu');
                }

                if (e.target.matches('.menu_responsive>ul>li>i')) {

                    const iClicked=e.target.closest('li');
                    iClicked.classList.toggle('li_active');

                    const menu_comodin=document.querySelector('.list_two_dinamic');

                    if(menu_comodin) {
                        menu_comodin.remove();
                        menu_inner();
                    }
                    else {

                        const all_i = document.querySelectorAll('.menu_responsive > ul > li>i');
                        const all_li = document.querySelectorAll('.menu_responsive > ul > li');
                        const icon = e.target.getAttribute('data-icon-menu');
                        const encontrado = array_menu.find((dataIconMenu) => dataIconMenu.dataIconMenu == icon);

                        // Convertimos los `NodeList` a un array y recorremos hacia atrás
                        [...all_i].forEach((el, index) => {
                            if (el.getAttribute('data-icon-menu') !== icon) {
                                // Eliminamos el <li> asociado al <i> si no coincide con el icono
                                all_li[index].remove();
                            }
                        });

                        const list_two = document.createElement('ul');
                        list_two.classList.add('list_two_dinamic');
                        const list_two_style = document.createElement('style');
                        list_two_style.innerHTML = `
            .list_two_dinamic{
            list-style: none;
            display:flex;
            flex-direction: column;
            width: 100%;
            align-items: center;
            justify-content: center;
            gap: 20px;
          
            }
            .list_two_dinamic>li{
            border:1px solid black;
            padding: 7.5px;
            width: 100%;
            border-radius: 15px;
            text-align: center;
            }
            .list_two_dinamic>li:hover{
            color: white;
            background: lightblue;
            }
            
            `
                        document.head.appendChild(list_two_style);

                        Object.keys(encontrado).forEach(key => {

                            if (key !== 'dataIconMenu') {
                                const li_two = document.createElement('li');
                                li_two.textContent = encontrado[key];
                                list_two.appendChild(li_two);
                            }
                        })

                        document.querySelector('.menu_responsive > ul').appendChild(list_two);
                    }
                }
            });

            const $menu = document.querySelector('.menu_responsive');
            const mediaQuery = window.matchMedia('(max-width: 768px)');


            function handleMenuOnResize() {
                if (!mediaQuery.matches) {
                    // Si el ancho de la ventana es mayor a 750px, escondemos el menú
                    // $menu.classList.add('active_menu');
                    // icon_width.style.display="none";
                }
            }

// Escuchar el evento de redimensionamiento
            window.addEventListener('resize', handleMenuOnResize);

// Ejecutar la función al cargar la página para asegurarnos que el menú esté en el estado correcto
            handleMenuOnResize();

        }
        menu_left()
    }
    addEvents(){


        document.querySelectorAll('.span').forEach(span=>{

            span.addEventListener('mouseover',event=>{

                if(event.target.matches('.span')) {

                    const next = event.target.nextElementSibling;
                    next.classList.toggle("active_span");
                }
            })

            span.addEventListener('mouseout',event=>{


                if(event.target.matches('.span')) {

                    const next = event.target.nextElementSibling;
                    next.classList.toggle("active_span");
                }

            })
        })

    }
    eventos_menuDesplegable(){

        const $menu_desplegable=document.querySelector('.menu_desplegable');
// Define los estilos para el desplegable
        const style_desplegable = document.createElement('style');
        style_desplegable.innerHTML = `
    .lista {
        z-index: 2;
        pointer-events: none;
        opacity: 0; /* Por defecto, oculta la lista */
        transition: opacity 0.3s ease; /* Animación de transición para la opacidad */
    }
    .active_span {
        opacity: 1;
    }
    .lista_desactiv {
        pointer-events: auto; /* Permite interacción con la lista cuando está activa */
        opacity: 1; /* Muestra la lista cuando está activa */
    }

    .lista > li {
        border: 1px solid black;
    }
`;

// Agrega los estilos al documento
        document.head.appendChild(style_desplegable);

        const $span_all = document.querySelectorAll('.span');
        const $lista_all = document.querySelectorAll('.lista');

// Añadir el evento mouseenter a los spans para mostrar la lista
        $span_all.forEach(span => {
            span.addEventListener('mouseenter', () => {
                span.nextElementSibling.classList.add('active_span', 'lista_desactiv');
            });
        });

// Ocultar la lista cuando el mouse sale de la lista o el span
        $span_all.forEach(span => {
            span.addEventListener('mouseleave', () => {
                setTimeout(() => { // Timeout para permitir que el mouse entre en la lista antes de ocultarla
                    if (!span.nextElementSibling.matches(':hover')) { // Verifica si el mouse no está sobre la lista
                        span.nextElementSibling.classList.remove('active_span', 'lista_desactiv');
                    }
                }, 100);
            });
        });

        $lista_all.forEach(ul => {
            ul.addEventListener('mouseleave', () => {
                ul.classList.remove('active_span', 'lista_desactiv');
            });
        });

// Añadir el evento mouseenter a los elementos li
        $lista_all.forEach(ul => {
            ul.querySelectorAll('li').forEach(li => {
                li.addEventListener('mouseenter', () => {
                    console.log("Mouse sobre un li");
                    li.style.background = "red"; // Cambia el color del li al pasar el mouse
                });
                li.addEventListener('mouseleave', () => {
                    li.style.background = ""; // Vuelve al color original cuando el mouse sale
                });
            });
        });
    }
}