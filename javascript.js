import {Product_1} from "./product_1.js";
import {InicioPage} from "./inicio-page.js";

const inicioPage=new InicioPage();
inicioPage.makeBody();




function event_header(){

    const $category_style=document.createElement('style');
    $category_style.innerHTML=`
    .active_span{
    opacity: 1;
    }

`
    document.head.appendChild($category_style);
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
// function menu_inner() {
//     $div_menu.innerHTML = `
//     <h1>K-MOON</h1>
//     <ul>
//     <li>INICIO<i data-icon-menu="1" class="fa-solid fa-angle-down"></i></li>
//     <li>MARCAS<i data-icon-menu="2" class="fa-solid fa-angle-down"></i></li>
//     <li>CUIDADO DE LA PIEL<i data-icon-menu="3" class="fa-solid fa-angle-down"></i></li>
//     <li>DERMOCOSMETICA<i data-icon-menu="4" class="fa-solid fa-angle-down"></i></li>
//     <li>SKINCARE COREANO<i data-icon-menu="5" class="fa-solid fa-angle-down"></i></li>
//     <li>MAQUILLAJE<i data-icon-menu="6" class="fa-solid fa-angle-down"></i></li>
//     </ul>
//     <i class="fa-solid fa-user"></i>
// `
// }
function menu_inner_style(){
    const $style_menu=document.createElement('style');
    $style_menu.innerHTML=`
    .nav_div{
    position:relative;
    }
    .menu_responsive{
    z-index: 2;
    position:absolute;
    left: 0;
    top: 100%;
    border: 2px solid black;
    width: 325px;
    height: 550px;
    display: none;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    background: rgba(150,150,150,0.8);
    border-radius:15px;

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
}
function responsive_menu(){

    const array_menu=[
        {dataIconMenu: '1',texto1:"hola",texto2:"hola2",texto3:"hola3",texto4:"hola4",texto5:"hola5",texto6:"hola6"},
        {dataIconMenu: '2',texto1:"hola",texto2:"hola2",texto3:"hola3",texto4:"hola4",texto5:"hola5",texto6:"hola6"},
        {dataIconMenu: '3',texto1:"hola",texto2:"hola2",texto3:"hola3",texto4:"hola4",texto5:"hola5",texto6:"hola6"},
        {dataIconMenu: '4',texto1:"hola",texto2:"hola2",texto3:"hola3",texto4:"hola4",texto5:"hola5",texto6:"hola6"},
        {dataIconMenu: '5',texto1:"hola",texto2:"hola2",texto3:"hola3",texto4:"hola4",texto5:"hola5",texto6:"hola6"},
        {dataIconMenu: '6',texto1:"hola",texto2:"hola2",texto3:"hola3",texto4:"hola4",texto5:"hola5",texto6:"hola6"}
    ];

}
function menu_left(){

    const $div_menu=document.createElement('div');
    $div_menu.classList.add('menu_responsive');
    const $container_menu=document.querySelector('.nav_div');

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
    const mediaQuery = window.matchMedia('(max-width: 769px)');




// Escuchar el evento de redimensionamiento
    window.addEventListener('resize', handleMenuOnResize);

// Ejecutar la función al cargar la página para asegurarnos que el menú esté en el estado correcto


}



function eventos_menuDesplegable(){

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
}



// document.querySelector('.container_products').addEventListener('click',(event)=>{
//
//     if(event.target.classList.contains('product_element')){
//         const verificar_1=sessionStorage.getItem('marca-product');
//         const transformar_1=JSON.parse(verificar_1);
//         console.log(transformar_1);
//
//         const element_clicked=event.target.getAttribute('data-marca');
//         sessionStorage.setItem('marca-product',JSON.stringify(element_clicked));
//         window.location='main.html';
//
//         const verificar_2=sessionStorage.getItem('marca-product');
//         const transformar_2=JSON.parse(verificar_2);
//         console.log(transformar_2);
//
//     }
//
// })
//
//
// const $mas_vendido_container=document.querySelector('.mas_vendido');
//
// $mas_vendido_container.addEventListener('click', (event) => {
//         const element_clicked = event.target.closest('.masV_element');
//
//         if(element_clicked){
//                 const element_data=element_clicked.getAttribute('data-mVendidos');
//                 const element_chossed=array_products.find(element=>element.dataId==element_data);
//
//                 if(element_chossed){
//                     const product=new Product_1(
//                         element_chossed.marca_product,
//                         element_chossed.tittle_description,
//                         element_chossed.price,
//                         element_chossed.imgs,
//                         element_chossed.info_1,
//                         element_chossed.info_2,
//                         element_chossed.sub_tittle
//                     )
//                     product.makeBody();
//                 }
//                 sessionStorage.setItem('mas-vendido',JSON.stringify(element_chossed));
//                 history.pushState(element_data,'',`#${element_chossed.marca_product}`)
//         }
// })
//
// $mas_vendido_container.addEventListener('click', (event) => {
//     const element_clicked = event.target.closest('.masV_element_2');
//
//
//     if(element_clicked){
//         const element_data=element_clicked.getAttribute('data-mVendidos');
//         const element_chossed=array_products_2.find(element=>element.dataId==element_data);
//
//         if(element_chossed){
//             const product=new Product_1(
//                 element_chossed.marca_product,
//                 element_chossed.tittle_description,
//                 element_chossed.price,
//                 element_chossed.imgs,
//                 element_chossed.info_1,
//                 element_chossed.info_2,
//                 element_chossed.sub_tittle
//             )
//             product.makeBody();
//         }
//         sessionStorage.setItem('mas-vendido',JSON.stringify(element_chossed));
//     }
//
// })
//
// document.addEventListener('DOMContentLoaded',(el)=>{
//
//     if(!history.state){
//         const initialState={page:'home',description:'pagina inicial'};
//         history.replaceState(initialState,'',window.location.href);
//         console.log('estado inicial añadido',initialState);
//     }
//
//
//     const last_session=sessionStorage.getItem('mas-vendido');
//
//     if(last_session){
//
//         const get_session=JSON.parse(last_session);
//
//         const product=new Product_1(
//             get_session.marca_product,
//             get_session.tittle_description,
//             get_session.price,
//             get_session.imgs,
//             get_session.info_1,
//             get_session.info_2
//         );
//         product.makeBody();
//
//     }
//
//
//
// })
//
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
// })
//
// const logo_tienda=document.querySelector('.nav_div_element>h1')
//
// logo_tienda.addEventListener('click',event=>{
//
//     window.location="index.html";
//
// })
//
// window.addEventListener('popstate',(event)=>{
//
//     if(event.state){
//     console.log('estado actual del historial: ', event.state)
//
//        if(event.state.page==='home'){
//
//            insertHeaderFooterMain();
//
//
//        }else if(event.state.page==='product'){
//            const product_data=sessionStorage.getItem('mas-vendido');
//            const product=product_data?JSON.parse(product_data):null;
//
//            if(product){
//                const product_instance = new Product_1(
//                    product.marca_product,
//                    product.tittle_description,
//                    product.price,
//                    product.imgs,
//                    product.info_1,
//                    product.info_2,
//                    product.sub_tittle
//                );
//                product_instance.makeBody();
//                console.log(`Mostrando el producto: ${product.marca_product}`);
//            }
//
//        }
//
//
//
//     } else{
//       console.log('no hay estado asociado')
//     }
//
//
// })





