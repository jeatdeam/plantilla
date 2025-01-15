import {$header_template,$footer_template} from "./templateHeaderFooter.js";

export class Product_1 {
    constructor(marca_product, tittle_description, price,
                images, list_info_1, list_info_2) {
        this.marca_product = marca_product;
        this.tittle_description = tittle_description;
        this.price = price;
        this.images = images;
        this.list_info_1 = list_info_1;
        this.list_info_2 = list_info_2;
        this.body = document.querySelector('body');
    }
    makeBody() {
        this.deleteHeaderFooter();
        this.deleteMain();

        const $main_clone = document.createElement('main');
        $main_clone.innerHTML = `
        <div class="product_plantilla">
            <section class="container_1">
                <h1>${this.marca_product}</h1>
                <div class="container_top_bot">
                    <div class="c1_element c1_element_1">
                        <div class="c1_element_top">
                            <img src="Imagenes/${this.images[0]}" alt="">
                        </div>
                        <div class="c1_element_bot">
                            <img src="Imagenes/${this.images[1]}" alt="">
                            <img src="Imagenes/${this.images[2]}" alt="">
                            <img src="Imagenes/${this.images[3]}" alt="">
                        </div>
                    </div>
                    <div class="c1_element c1_element_2">
                        <h1>${this.tittle_description}</h1>
                        <div>
                            <ul id="lista_right_1">
                                <li>S/.${this.price}</li>
                                <li>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </li>
                            </ul>
                        </div>
                        <hr>
                        <div>
                            <ul id="lista_right_2">
                                <li>Tipo de piel</li>
                                <li>Beneficios del producto</li>
                                <li>Usado para</li>
                                <li>Fragancia</li>
                                <li>Ingredientes especiales</li>
                            </ul>
                            <ul id="lista_right_3">
                                <li>${this.list_info_1[0]}</li>
                                <li>${this.list_info_1[1]}</li>
                                <li>${this.list_info_1[2]}</li>
                                <li>${this.list_info_1[3]}</li>
                                <li>${this.list_info_1[4]}</li>
                            </ul>
                        </div>
                        <hr>
                        <ul>
                            <h2>Acerca del producto</h2>
                            <li>${this.list_info_2[0]}</li>
                            <li>${this.list_info_2[1]}</li>
                            <li>${this.list_info_2[2]}</li>
                            <li>${this.list_info_2[3]}</li>
                            <li>${this.list_info_2[4]}</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section class="container_2">
                <h1>Combinaciones recomendadas</h1>
                <div class="recomendation_products">
                    <div class="recomendation_element recomendation_element_1">
                        <img src="Imagenes/recomendados_1.png" alt="">
                    </div>
                    <div class="recomendation_element recomendation_element_2">
                        <img src="Imagenes/recomendados_2.webp" alt="">
                    </div>
                    <div class="recomendation_element recomendation_element_3">
                        <img src="Imagenes/recomendados_3.jpg" alt="">
                    </div>
                    <div class="recomendation_element recomendation_element_4">
                        <img src="Imagenes/recomendados_5.webp" alt="">
                    </div>
                    <div class="recomendation_element recomendation_element_5">
                        <img src="Imagenes/recomendados_6.webp" alt="">
                    </div>
                    <div class="recomendation_element recomendation_element_6">
                        <img src="Imagenes/recomendados_7.jpeg" alt="">
                    </div>
                </div>
            </section>
            <hr>
        </div>
    `;


        // Insertar el nuevo main en el body
        this.insertarHeader();
        this.addEvents();
        this.eventos_menuDesplegable()
        this.body.appendChild($main_clone);
        this.insertarFooter();
        this.responsive_menu();

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

    deleteMain(){
        const $main_search=document.querySelector('main');
        if($main_search){
            $main_search.remove();
        }
    }

    insertarHeader(){
        const $header_clone=$header_template.content.cloneNode(true);
        this.body.prepend($header_clone);

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

        // const icon_house=document.querySelector('#lista_1>li:nth-of-type(1)');
        //
        // icon_house.addEventListener('click',(event)=>{
        //
        //     const session_storage=sessionStorage.getItem('mas-vendido');
        //     if(session_storage)
        //     {
        //         sessionStorage.removeItem('mas-vendido');
        //
        //     }
        //     window.location="index.html";
        //
        //
        // })

    //     const logo_tienda=document.querySelector('.nav_div_element>h1')
    //
    //     logo_tienda.addEventListener('click',event=>{
    //         const session_storage=sessionStorage.getItem('mas-vendido');
    //         if(session_storage)
    //         {
    //             sessionStorage.removeItem('mas-vendido');
    //
    //         }
    //         window.location="index.html";
    //
    //     })
    }
    insertarFooter(){
        const $footer_clone=$footer_template.content.cloneNode(true);
        this.body.appendChild($footer_clone);
    }
    deleteHeaderFooter(){
        const $header_search=document.querySelector('header');
        if($header_search){
            $header_search.remove();
        }
        const $footer_search=document.querySelector('footer');
        if($footer_search){
            $footer_search.remove();
        }


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
