// import { Product } from "./producto.js";
import {Product_1}  from "./product_1.js";
import {array_products} from "./lista_productos.js";
import {Catalogo} from "./catalogo.js";
// import {$header_template,$footer_template}  from "./templateHeaderFooter";


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


}

eventos_menuDesplegable();

document.querySelector('body').addEventListener('click',(event)=>{

    if(event.target.classList.contains('element_cuadrado')){

        const element_clicked=event.target.getAttribute('data-id');
        const element_chossed=array_products.find(elem=>elem.dataId==element_clicked);

        if(element_chossed){
            const product_maked=new Product_1(
                element_chossed.marca_product,
                element_chossed.tittle_description,
                element_chossed.price,
                element_chossed.imgs,
                element_chossed.info_1,
                element_chossed.info_2
                );
            product_maked.makeBody();

            sessionStorage.setItem('product-saved',JSON.stringify(element_chossed));

            history.pushState(element_chossed,'',`#${element_chossed.marca_product}-${element_clicked}`)
            // history.pushState({dataId:element_clicked},'',`heSidoClieado-${element_chossed.marca_product}`);
        }

    }
    if(event.target.matches('.nav_div_element h1')){
        sessionStorage.removeItem('product-saved');
        // window.location.replace('index.html');
        window.location="index.html";

    }

})
window.addEventListener('load',()=>{

    if(window.location.hash&&sessionStorage.getItem('product-saved')){

    }
    else{
        history.replaceState(null,'',window.location.pathname)
    }


})


window.addEventListener('popstate',(event)=>{

    if(event.state && event.state.dataId){
        const catalogo_element=new Catalogo();
        catalogo_element.crearCatalogo();
    }
    else{
        const catalogo_element=new Catalogo();
        catalogo_element.crearCatalogo();
    }
})
window.addEventListener('DOMContentLoaded',()=> {

    if(history.state && history.state.dataId){

        const recovery_product=sessionStorage.getItem('product-saved');
        const transform_product=JSON.parse(recovery_product);

        if(transform_product){
            const product_maked = new Product_1(
                transform_product.marca_product,
                transform_product.tittle_description,
                transform_product.price,
                transform_product.imgs,
                transform_product.info_1,
                transform_product.info_2
            );
            product_maked.makeBody();
        }

    }

    else {

        const recovery_product_tittle=sessionStorage.getItem('category-marca');
        const transform_product_tittle=JSON.parse(recovery_product_tittle);

        const catalogo_element=new Catalogo(transform_product_tittle);
        catalogo_element.crearCatalogo();


    }

});

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
            icon_width.style.display="none";
        }
    }

// Escuchar el evento de redimensionamiento
    window.addEventListener('resize', handleMenuOnResize);

// Ejecutar la función al cargar la página para asegurarnos que el menú esté en el estado correcto
    handleMenuOnResize();

}
menu_left()

const icon_house=document.querySelector('#lista_1>li:nth-of-type(1)');

icon_house.addEventListener('click',(event)=>{

    window.location="index.html";


})













