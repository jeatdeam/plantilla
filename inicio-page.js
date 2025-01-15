import {$header_template,$footer_template,$main_template} from "./templateHeaderFooter.js";
import {Product_1} from "./product_1.js";

export class InicioPage{
    constructor(){


    this.body=document.querySelector('body');
    }
    makeBody() {
        this.removeBody(); // Eliminar contenido anterior

        // Verificar si el historial actual no es el home
        if (!history.state || history.state.page !== 'home') {
            // Si estamos en un producto o en otra página, no sobreescribas el estado
            history.pushState({ page: 'home' }, "", "#aqui-ta-tu-pagina-gaa");
        }

        this.insertBody(); // Insertar nuevo contenido
        this.styleSections(); // Aplicar estilos a las secciones
    }

    insertHeader(){
        const clone_header=$header_template.content.cloneNode(true);
        this.body.prepend(clone_header);

    }
    menuCategoryShowStyle(){
        const $category_style=document.createElement('style');
        $category_style.innerHTML=`
            .active_span{
            opacity: 1;
            }
        
        `
        document.head.appendChild($category_style);

        const style_desplegable=document.createElement('style');
        style_desplegable.innerHTML = `
        .lista{
        z-index: 2;
        }
        .span{
    
        }
        .active_span{
        opacity:1;
        }
    `
        document.head.appendChild(style_desplegable);

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

    createCirclesImagenesSlider(){
        const $style_circles = document.createElement('style');

            $style_circles.innerHTML = `
        
            .slider_circles_main{
               display: flex;
               flex-direction: column;
              position: relative;
              margin-top: 50px;
              aspect-ratio: 16/9;
              z-index: 1;
              // height: 100%;
              width: 100%;
        
            }
            .imagenes_container_slider{
              display:flex;
              width: 100%;
        
            }
            .img_circle{
                // min-width: 100%;
                width: 100%;
                position:absolute;
                top:0;
                left:0;
                object-fit: cover;
                opacity: 0;
                transition: opacity 0.5s ease-in-out;
                aspect-ratio: 16/9;
                height: 100%;
        
            }
            .active{
                opacity: 1;
             }
        `;
            const $style_carrousel = document.createElement('style');
            $style_carrousel.innerHTML = `
            .carousel_top{
             overflow: hidden;
            }
        
        `
            const $style_arrow = document.createElement('style');
            $style_arrow.innerHTML = `
            .container_info{
            margin-top: 25px;
            }
        
            .arrow_carrousel{
                display: flex;
                position: absolute;
                top:50%;
                transform: translateY(-50%);
                width:100%;
                padding: 0 10px;
                justify-content: space-between;
            }
            .arrow_carrousel>span{
            font-size: 75px;
            color: rgba(10,10,10,0.9);
            }
        
        `
            document.head.appendChild($style_circles);
            document.head.appendChild($style_carrousel);
            document.head.appendChild($style_arrow);
    }
    controlatorTimeSlider(){
        let contador_2=0;
            const $all_circle=document.querySelectorAll('.anim_circle');
            $all_circle[contador_2].classList.toggle('active_circle');

            let auxiliar_1=setInterval(()=>{

                $all_circle[contador_2].classList.remove('active_circle');
                contador_2=(contador_2+1)%$all_circle.length;
                $all_circle[contador_2].classList.toggle('active_circle');

            },5000);
            document.querySelector('.slider_circles_main').addEventListener('click',(event)=> {

                clearInterval(auxiliar_1);

                if (event.target.matches('.arrow_left')) {

                    $all_circle[contador_2].classList.remove('active_circle');
                    contador_2 = ((contador_2 - 1) + $all_circle.length) % $all_circle.length;
                    $all_circle[contador_2].classList.toggle('active_circle');

                }
                if (event.target.matches('.arrow_right')) {

                    $all_circle[contador_2].classList.remove('active_circle');
                    contador_2 = ((contador_2 + 1) % $all_circle.length);
                    $all_circle[contador_2].classList.toggle('active_circle');
                }

                auxiliar_1=setInterval(()=>{

                    $all_circle[contador_2].classList.remove('active_circle');
                    contador_2=(contador_2+1)%$all_circle.length;
                    $all_circle[contador_2].classList.toggle('active_circle');


                },5000)
            })
    }
    intervalTimeSlider(){
        let contador=0;
        const $imagenes=document.querySelectorAll('.img_circle');
        $imagenes[contador].classList.toggle('active');

        let auxiliar_2=setInterval(()=>{

            $imagenes[contador].classList.remove('active');
            contador=(contador+1)%$imagenes.length;
            $imagenes[contador].classList.toggle('active');

        },5000)
        document.querySelector('.slider_circles_main').addEventListener('click',(event)=>{

            clearInterval(auxiliar_2);

            if(event.target.matches('.arrow_left')){

                $imagenes[contador].classList.remove('active');
                contador=((contador-1)+$imagenes.length)%$imagenes.length;
                $imagenes[contador].classList.toggle('active');

            }
            if(event.target.matches('.arrow_right')){

                $imagenes[contador].classList.remove('active');
                contador=((contador+1)%$imagenes.length);
                $imagenes[contador].classList.toggle('active');
            }

            auxiliar_2=setInterval(()=>{

                $imagenes[contador].classList.remove('active');
                contador = (contador + 1) % $imagenes.length;
                $imagenes[contador].classList.toggle('active');

            },5000);

        });
    }
    animationMiniCirclesSlider(){
        this.createCirclesImagenesSlider()

        const $all_imagenes = document.querySelectorAll('.img_circle');

        $all_imagenes.forEach((element, index) => {
            const $circle = document.createElement('span');
            $circle.classList.add('anim_circle', `anime_circle_${index + 1}`);
            const $style_circle = document.createElement('style');
            $style_circle.innerHTML = `
                .anim_circle{
                width: 17.5px;
                display: block;
                height: 17.5px;
                border-radius: 50%;
                border:1px solid black;
                background: transparent;
                }
            `
            document.querySelector('head').appendChild($style_circle);
            document.querySelector('.circles_animated_carrousel').appendChild($circle);

        })

        const $circles_animated_carrousel = document.querySelector('.circles_animated_carrousel');
        const $style_circles_container = document.createElement('style');
        $style_circles_container.innerHTML = `
                .circles_animated_carrousel{
                    position: absolute;
                    top: 95%;
                    transform: translateX(50%);
                    right:50%;
                    display: flex;
                    gap: 7.5px;
                }
                .active_circle{
                background: black;
                }
    
                `
        document.head.appendChild($style_circles_container);
        this.controlatorTimeSlider()
        this.intervalTimeSlider()
    }

    allBrands(){
        const $container_products=document.querySelector('.container_products');
        const $container_products_style=document.createElement('style');
        $container_products_style.innerHTML=`
        body{
        background: #F2F0EB;
        }
        .container_products{
         gap: 25px;
         border-radius: 15px;
         width:90%;
         margin: 0 auto;
        }
        .product_element{
        border: 1px solid black;
        border-radius: 15px;
        display: flex;
        width:100%;
    
        align-items: center;
        justify-content: center;
        position:relative;
        // min-height: 300px;
        }
        .product_element>h1{
        text-align:center;
        font-size: 1px;
        position: absolute;
        }
    `
        document.head.appendChild($container_products_style);

        const array_background=[
            "TOCOBO.webp","NUMBUZIN.png","COSRX.webp","HARUHARU.webp","BEAUTYOFJOSEON.webp"
            ,"CENTELA.png","NACIFIC.webp","EUCERIN.jpg","AVENE.png","LAROCHEPOSAY.png"
        ]
        const $product_element=document.querySelectorAll('.product_element');

        $product_element.forEach((element,index)=>{

            element.style.background=`url(Imagenes-main/${array_background[index]}`;
            element.style.backgroundPosition="center center";
            element.style.backgroundRepeat="no-repeat";
            element.style.backgroundSize="contain";
            // element.style.backgroundOrigin="content-box";

        })
    }




    styleSections(){
        // this.arrayMenu();
        this.menuMovile();
        this.menuMovileStyle();
        this.menuMovileResponsive();



        this.allBrands();
        this.menuCategoryShowStyle();
        this.animationMiniCirclesSlider();
        this.mainSection();
        this.menuMovileEventos();
        this.listaMenuTwo();
        this.mainEvents();


    }
    arrayProducts(){
        const array_products=[
        {
            dataId: 1,
            marca_product: "TOCOBO",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "100",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 2,
            marca_product: "TOCOBO2",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "200",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 3,
            marca_product: "TOCOBO3",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "300",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 4,
            marca_product: "TOCOBO4",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "400",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 5,
            marca_product: "TOCOBO5",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "500",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 6,
            marca_product: "TOCOBO6",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "600",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 7,
            marca_product: "TOCOBO7",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "700",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 8,
            marca_product: "TOCOBO8",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "800",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 9,
            marca_product: "TOCOBO9",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "900",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 10,
            marca_product: "TOCOBO10",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "1000",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 11,
            marca_product: "TOCOBO11",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "1100",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 12,
            marca_product: "TOCOBO12",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "1200",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 13,
            marca_product: "TOCOBO13",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "1300",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 14,
            marca_product: "TOCOBO14",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "1400",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 15,
            marca_product: "TOCOBO15",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "1500",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 16,
            marca_product: "TOCOBO16",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "1600",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 17,
            marca_product: "TOCOBO17",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "1700",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 18,
            marca_product: "TOCOBO18",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "1800",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 19,
            marca_product: "TOCOBO19",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "1900",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 20,
            marca_product: "TOCOBO20",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "2000",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 21,
            marca_product: "TOCOBO21",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "2100",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 22,
            marca_product: "TOCOBO22",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "2200",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 23,
            marca_product: "TOCOBO23",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "2300",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 24,
            marca_product: "TOCOBO24",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "2400",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 25,
            marca_product: "TOCOBO25",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "2500",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 26,
            marca_product: "TOCOBO26",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "2600",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 27,
            marca_product: "TOCOBO27",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "2700",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 28,
            marca_product: "TOCOBO28",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "2800",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        }
    ]
        return array_products;
    }
    mostSellersOne(){
        const array_products= this.arrayProducts()
        const $mas_Vendido=document.querySelector('.carousel_masVendidos_one');

        for(let i=0;i<array_products.length;i++){

            const $element_carousel=document.createElement('div');
            $element_carousel.classList.add('masV_element',`masV_element_${i+1}`);
            $element_carousel.setAttribute('data-mVendidos',`${i+1}`);

            const figure=document.createElement('figure');
            figure.innerHTML=`
        <img src="Imagenes-main/${array_products[i].imgs[0]}">
        <figcaption>${array_products[i].marca_product}</figcaption>
        <figcaption>${array_products[i].sub_tittle}</figcaption>
        <figcaption>${array_products[i].price}</figcaption>
    
        `
            const figure_style=document.createElement('style');
            figure_style.innerHTML=`
            .masV_element_${i+1}>figure{
              display: flex;
              width: 300px;
              height: 450px;
              flex-direction: column;
              align-items:center;
              justify-content: center;
            }
            .masV_element_${i+1}:hover{
             transition: scale 0.25s ease-in-out;
    
            }
            .masV_element_${i+1}>figure>img{
                height: 70%;
                object-fit: cover;
                // width: 100%;
            }
            .masV_element_${i+1}>figure>figcaption{
            height: 10%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            }
            `
            document.head.appendChild(figure_style);
            $element_carousel.appendChild(figure);
            $mas_Vendido.appendChild($element_carousel);
        }
    }

    arrayProductsTwo(){
        const array_products_2=[
        {
            dataId: 29,
            marca_product: "TOCOBO",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "100",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 30,
            marca_product: "TOCOBO",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "100",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 31,
            marca_product: "TOCOBO",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "100",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 32,
            marca_product: "TOCOBO",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "100",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 33,
            marca_product: "TOCOBO",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "100",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 34,
            marca_product: "TOCOBO",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "100",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 35,
            marca_product: "TOCOBO",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "100",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 36,
            marca_product: "TOCOBO",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "100",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 37,
            marca_product: "TOCOBO",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "100",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 38,
            marca_product: "TOCOBO",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "100",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 39,
            marca_product: "TOCOBO",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "100",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 40,
            marca_product: "TOCOBO",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "100",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 41,
            marca_product: "TOCOBO",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "100",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 42,
            marca_product: "TOCOBO",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "100",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 43,
            marca_product: "TOCOBO",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "100",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 44,
            marca_product: "TOCOBO",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "100",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 45,
            marca_product: "TOCOBO",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "100",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 46,
            marca_product: "TOCOBO",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "100",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 47,
            marca_product: "TOCOBO",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "100",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 48,
            marca_product: "TOCOBO",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "100",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 49,
            marca_product: "TOCOBO",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "100",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 50,
            marca_product: "TOCOBO",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "100",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 51,
            marca_product: "TOCOBO",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "100",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 52,
            marca_product: "TOCOBO",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "100",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 53,
            marca_product: "TOCOBO",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "100",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 54,
            marca_product: "TOCOBO",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "100",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 55,
            marca_product: "TOCOBO",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "100",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        },
        {
            dataId: 56,
            marca_product: "TOCOBO",
            tittle_description: "hola hola hola hola hola tittle description",
            price: "100",
            imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
            info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
            info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
            sub_tittle:"Exfoliante de rostro tocobo"
        }
    ]
        return array_products_2;
    }
    mostSellersTwo(){
        const array_products_2=this.arrayProductsTwo();
        const $mas_Vendido_2=document.querySelector('.carousel_masVendidos_two');

        for(let i=0;i<array_products_2.length;i++){
            const $element_carousel_2=document.createElement('div');
            $element_carousel_2.classList.add('masV_element_2',`masV_element_2_${i+1}`);
            $element_carousel_2.setAttribute('data-mVendidos',`${i+29}`);
            const figure_2=document.createElement('figure');
            figure_2.innerHTML=`
        <img src="Imagenes-main/${array_products_2[i].imgs[0]}">
        <figcaption>${array_products_2[i].marca_product}</figcaption>
        <figcaption>${array_products_2[i].sub_tittle}</figcaption>
        <figcaption>${array_products_2[i].price}</figcaption>
    
        `
            const figure_style=document.createElement('style');

            figure_style.innerHTML=`
            .masV_element_2_${i+1}>figure{
              display: flex;
              width: 300px;
              height: 450px;
              flex-direction: column;
              align-items:center;
              justify-content: center;
            }
            .masV_element_2_${i+1}:hover{
            transition: scale 0.25s ease-in-out;
            }
            .masV_element_2_${i+1}>figure>img{
                height: 70%;
                object-fit: cover;
    
            }
            .masV_element_2_${i+1}>figure>figcaption{
            height: 10%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            }
    
            `
            $element_carousel_2.appendChild(figure_2);
            $mas_Vendido_2.appendChild($element_carousel_2);
            document.head.appendChild(figure_style);
        }
    }



    menuMovile() {
        const $menu_movile = document.createElement('div');
        $menu_movile.classList.add('menu_responsive');
        $menu_movile.innerHTML = `
        <h1>K-MOON</h1>
        <ul>
            <li>
            <div>
            <h3>INICIO</h3>
            <i data-icon-menu="1" class="fa-solid fa-angle-down"></i>
            </div>
            <ul class="sub_List" id="subList_1">
                <li>inicio 1</li>
                <li>inicio 2</li>
                <li>inicio 3</li>
                <li>inicio 4</li>
                <li>inicio 5</li>
                <li>inicio 6</li>
            </ul>
            </li>
            <li>
            <div>
            <h3>MARCAS</h3>
            <i data-icon-menu="2" class="fa-solid fa-angle-down"></i>
            </div>
            <ul class="sub_List" id="subList_2">
                <li>inicio 7</li>
                <li>inicio 8</li>
                <li>inicio 9</li>
                <li>inicio 10</li>
                <li>inicio 11</li>
                <li>inicio 12</li>
            </ul>
            </li>
            <li>
            <div>
            <h3>CUIDADO DE LA PIEL</h3>
            <i data-icon-menu="3" class="fa-solid fa-angle-down"></i>
            </div>
            <ul  class="sub_List" id="subList_3">
                <li>inicio 13</li>
                <li>inicio 14</li>
                <li>inicio 15</li>
                <li>inicio 16</li>
                <li>inicio 17</li>
                <li>inicio 18</li>
            </ul>
            </li>
            <li>
            <div>
            <h3>DERMOCOSMETICA</h3>
            <i data-icon-menu="4" class="fa-solid fa-angle-down"></i>
            </div>
            <ul class="sub_List" id="subList_4">
                <li>inicio 19</li>
                <li>inicio 20</li>
                <li>inicio 21</li>
                <li>inicio 22</li>
                <li>inicio 23</li>
                <li>inicio 24</li>
            </ul>
            </li>
            <li>
            <div>
            <h3>SKINCARE COREANO</h3>
            <i data-icon-menu="5" class="fa-solid fa-angle-down"></i>
            </div>
            <ul class="sub_List" id="subList_5">
                <li>inicio 25</li>
                <li>inicio 26</li>
                <li>inicio 27</li>
                <li>inicio 28</li>
                <li>inicio 29</li>
                <li>inicio 30</li>
            </ul>
            </li>
            <li>
            <div>
            <h3>MAQUILLAJE</h3>
            <i data-icon-menu="6" class="fa-solid fa-angle-down"></i>
            </div>
            <ul class="sub_List" id="subList_6">    
                <li>inicio 31</li>
                <li>inicio 32</li>
                <li>inicio 33</li>
                <li>inicio 34</li>
                <li>inicio 35</li>
                <li>inicio 36</li>
            </ul>
            </li>
        </ul>
        <i class="fa-solid fa-user"></i>
    `;

        // const array_menu = [
        //     { dataIconMenu: '1', texto1: "inicio", texto2: "hola2", texto3: "hola3", texto4: "hola4", texto5: "hola5", texto6: "hola6" },
        //     { dataIconMenu: '2', texto1: "marcas", texto2: "hola2", texto3: "hola3", texto4: "hola4", texto5: "hola5", texto6: "hola6" },
        //     { dataIconMenu: '3', texto1: "cuidado de la piel", texto2: "hola2", texto3: "hola3", texto4: "hola4", texto5: "hola5", texto6: "hola6" },
        //     { dataIconMenu: '4', texto1: "dermocosmetica", texto2: "hola2", texto3: "hola3", texto4: "hola4", texto5: "hola5", texto6: "hola6" },
        //     { dataIconMenu: '5', texto1: "skincare coreano", texto2: "hola2", texto3: "hola3", texto4: "hola4", texto5: "hola5", texto6: "hola6" },
        //     { dataIconMenu: '6', texto1: "maquillaje", texto2: "hola2", texto3: "hola3", texto4: "hola4", texto5: "hola5", texto6: "hola6" }
        // ];
        //
        // const all_i = document.querySelectorAll('.menu_responsive>i');
        // all_i.forEach(icon => {
        //     const objChossed = array_menu.find(element => element.dataIconMenu === icon.getAttribute('data-icon-menu'));
        //
        //     if (objChossed) {
        //         const subList = document.createElement('ul');
        //         Object.keys(objChossed).forEach(key => {
        //
        //             if (key !== 'dataIconMenu') {
        //                 const subListLi = document.createElement('li');
        //                 subListLi.textContent = objChossed[key];
        //                 subList.appendChild(subListLi);
        //             }
        //         });
        //         icon.closest('li').appendChild(subList);
        //     }
        // });
        const $nav_subContainer = document.querySelector('.nav_div');
        $nav_subContainer.appendChild($menu_movile);

        return $menu_movile;
    }

    menuMovileStyle(){
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
    // height: 550px;
    display: none;
    gap: 25px;
    padding: 25px 0;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    background: rgba(150,150,150,0.8);
    border-radius:15px;
    // transition: all 0.5 ease-in-out;
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
    .menu_responsive>ul>li>div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .menu_responsive>ul>li>ul{
    display: none;
    flex-direction: column;
    width: 100%;
    list-style: none;
    gap: 25px;
    padding: 15px 0 15px 15px;
 
    }
    .menu_responsive>ul>li>ul>li:hover{
    color: orange;
    }
    .active_subList{
    display: flex;
    }
    .menu_responsive>ul>li>ul>li{
    width: 100%;
    font-size: 20px;
    border: 1px solid transparent;
    }
    .menu_responsive > ul > li{
    padding: 7.5px 25px;
    border: 1px solid transparent;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: lightblue;
    gap: 15px;
    width: 100%;
    }
    .menu_responsive > ul > li:hover{
    border-color: black;
    color: white;
    }
    .menu_responsive>ul>li>i:hover{
    color: blue;
    }
    .menu_responsive > i{
    border: 1px solid black;
    border-radius: 50%;
    padding: 10px;
    }
    .li_desactive{
    opacity:0;
    // display:none;
    }
    .active_background{
    // background: red;
    }
    .active_flex{
    display: flex !important;
    }
`
        document.head.appendChild($style_menu);
        return $style_menu;
    }

    menuMovileResponsive() {
        const $menu_movile_class = document.querySelector('.menu_responsive');
        const $container_menu = document.querySelector('.nav_div');

        $container_menu.addEventListener('click', (e) => {
            // Si se presiona el ícono de la bolsa de compras
            if (e.target.matches('#iconBagShopping')) {
                $menu_movile_class.classList.toggle('active_menu');
            }

            // Si se presiona alguno de los íconos de despliegue de sub-lista
            if (e.target.matches('.menu_responsive>ul>li>div>i')) {
                const all_subLists = document.querySelectorAll('.menu_responsive>ul>li>ul');
                const current_subList = e.target.closest('div').nextElementSibling;

                // Primero ocultar todas las sub-listas abiertas
                all_subLists.forEach((subList) => {
                    if (subList !== current_subList) {
                        subList.classList.remove('active_flex');
                    }
                });

                // Mostrar u ocultar la lista clicada
                current_subList.classList.toggle('active_flex');
            }
        });
    }


    menuMovileEventos(){
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

    mainEvents() {
        const array_products = this.arrayProducts();
        const array_products_2 = this.arrayProductsTwo();

        // Evento para los productos
        document.querySelector('.container_products').addEventListener('click', (event) => {
            if (event.target.classList.contains('product_element')) {
                const element_clicked = event.target.getAttribute('data-category');
                sessionStorage.setItem('marca-product', JSON.stringify(element_clicked));
                window.location = 'main.html'; // Redirige a la página del producto
            }
        });

        // Evento para productos "más vendidos" - Primer grupo
        document.querySelector('.mas_vendido').addEventListener('click', (event) => {
            const element_clicked = event.target.closest('.masV_element');
            if (element_clicked) {
                const element_data = element_clicked.getAttribute('data-mVendidos');
                const element_chossed_1 = array_products.find(element => element.dataId == element_data);

                if (element_chossed_1) {
                    const product = new Product_1(
                        element_chossed_1.marca_product,
                        element_chossed_1.tittle_description,
                        element_chossed_1.price,
                        element_chossed_1.imgs,
                        element_chossed_1.info_1,
                        element_chossed_1.info_2,
                        element_chossed_1.sub_tittle
                    );
                    product.makeBody();
                    sessionStorage.setItem('mas-vendido', JSON.stringify(element_chossed_1));
                    history.pushState({page: 'producto'}, '', `#${element_chossed_1.marca_product}`);
                    // window.scrollTo(0, 0);
                }
            }
        });

        // Evento para productos "más vendidos" - Segundo grupo
        document.querySelector('.mas_vendido').addEventListener('click', (event) => {
            const element_clicked = event.target.closest('.masV_element_2');
            if (element_clicked) {
                const element_data = element_clicked.getAttribute('data-mVendidos');
                const element_chossed_2 = array_products_2.find(element => element.dataId == element_data);

                if (element_chossed_2) {
                    const product = new Product_1(
                        element_chossed_2.marca_product,
                        element_chossed_2.tittle_description,
                        element_chossed_2.price,
                        element_chossed_2.imgs,
                        element_chossed_2.info_1,
                        element_chossed_2.info_2,
                        element_chossed_2.sub_tittle
                    );
                    product.makeBody();
                    sessionStorage.setItem('mas-vendido', JSON.stringify(element_chossed_2));
                    history.pushState({page: 'producto'}, '', `#${element_chossed_2.marca_product}`);
                    // window.scrollTo(0, 0);
                }
            }
        });

        // Manejo de la carga inicial
        document.addEventListener('DOMContentLoaded', () => {
            // Verificar si hay algo en sessionStorage para productos
            const last_session = sessionStorage.getItem('mas-vendido');
            const currentPage = window.location.pathname; // Obtener la ruta actual

            if (last_session && history.state && history.state.page === 'producto') {
                // Restaurar el producto si estamos en la página del producto
                const get_session = JSON.parse(last_session);
                const product = new Product_1(
                    get_session.marca_product,
                    get_session.tittle_description,
                    get_session.price,
                    get_session.imgs,
                    get_session.info_1,
                    get_session.info_2
                );
                product.makeBody();
                history.replaceState({ page: 'producto' }, '', `#${get_session.marca_product}`);
            } else if (!last_session || history.state.page === 'home') {
                // Si estamos en el home o no hay producto en sessionStorage, cargamos el inicio
                const create_home = new InicioPage();
                create_home.makeBody(); // Crea el home si estamos en la página principal
                history.replaceState({ page: 'home' }, '', window.location.href);
            }

        });


        // Manejo de clics en el ícono de inicio
        const icon_house = document.querySelector('#lista_1>li:nth-of-type(1)');
        icon_house.addEventListener('click', () => {
            sessionStorage.removeItem('mas-vendido');
            window.scrollTo(0, 0);
        });

        // Manejo de clics en el logo
        const logo_tienda = document.querySelector('.nav_div_element>h1');
        logo_tienda.addEventListener('click', () => {
            sessionStorage.removeItem('mas-vendido');
            window.scrollTo(0, 0);
        });

        // Manejo del evento popstate
        window.addEventListener('popstate', (event) => {
            if (event.state && event.state.page === 'home') {
                const nuevo_index = new InicioPage();
                nuevo_index.makeBody();
                window.scrollTo(0, 0);
            } else if (event.state && event.state.page === 'producto') {
                const recovery_session = sessionStorage.getItem('mas-vendido');
                if (recovery_session) {
                    const recovery_object = JSON.parse(recovery_session);
                    const product_1 = new Product_1(
                        recovery_object.marca_product,
                        recovery_object.tittle_description,
                        recovery_object.price,
                        recovery_object.imgs,
                        recovery_object.info_1,
                        recovery_object.info_2,
                        recovery_object.sub_tittle
                    );
                    product_1.makeBody();
                    window.scrollTo(0, 0);
                }
            }
        });
    }

    arrayMenu(){
        const array_menu=[
            {dataIconMenu: '1',texto1:"hola",texto2:"hola2",texto3:"hola3",texto4:"hola4",texto5:"hola5",texto6:"hola6"},
            {dataIconMenu: '2',texto1:"hola",texto2:"hola2",texto3:"hola3",texto4:"hola4",texto5:"hola5",texto6:"hola6"},
            {dataIconMenu: '3',texto1:"hola",texto2:"hola2",texto3:"hola3",texto4:"hola4",texto5:"hola5",texto6:"hola6"},
            {dataIconMenu: '4',texto1:"hola",texto2:"hola2",texto3:"hola3",texto4:"hola4",texto5:"hola5",texto6:"hola6"},
            {dataIconMenu: '5',texto1:"hola",texto2:"hola2",texto3:"hola3",texto4:"hola4",texto5:"hola5",texto6:"hola6"},
            {dataIconMenu: '6',texto1:"hola",texto2:"hola2",texto3:"hola3",texto4:"hola4",texto5:"hola5",texto6:"hola6"}
        ];
    }

    listaMenuTwo(){
        const marcas=["TOCOBO","COSRX","NUMBUZ:N","HARUHARU","BEAUTY OF JOSEON",
        "SKIN1004","NACIFIC","EUCERIN","AVENE","LA ROCHE-POSAY"];

        const li_category=document.querySelectorAll('.lista_two>li');

        li_category.forEach((li,index) => {

            li.textContent=`${marcas[index]}`;
        })
    }
    mainSection(){
        this.mostSellersOne();
        this.mostSellersTwo();
        // this.styleSections()
    }



    insertFooter(){
        const clone_footer=$footer_template.content.cloneNode(true);
        this.body.appendChild(clone_footer);


    }
    insertMain(){
        const clone_main=$main_template.content.cloneNode(true);
        this.body.appendChild(clone_main);

    }
    insertBody(){

        this.insertHeader();
        this.insertMain();
        this.insertFooter();

    }
    deleteHeader(){
        const header_validation=document.querySelector('header');
        if(header_validation)header_validation.remove();

    }
    deleteFooter(){
        const footer_validation=document.querySelector('footer');
        if(footer_validation)footer_validation.remove();

    }
    deleteMain(){
        const main_validation=document.querySelector('main');
        if(main_validation)main_validation.remove();

    }
    removeBody(){

        this.deleteHeader();
        this.deleteMain();
        this.deleteFooter();

    }




}