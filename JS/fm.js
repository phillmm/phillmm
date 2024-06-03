//Carrusel:::::::::::::::::::::::::
var bgCounter = 0; //Contador de las imágenes de background.

function heroSlideshow() {
    var listaImgBg = [
        "url('img/Hero_01.webp')",
        "url('img/Hero_02.webp')",
        "url('img/Hero_03.webp')"
    ];

    bgCounter++;

    if(bgCounter == listaImgBg.length) {
        bgCounter = 0;
    }

    document.getElementById("header__fondo").style.background = "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), " + listaImgBg[bgCounter] + " center repeat";
}

//Slideshow automático con animaciones
var counterNext = 0;
var counterMain = 0;

function slideshowAnim() {
    var listaImgBgAnim = document.getElementsByClassName("fondosHero");
    
    counterNext++;
    counterMain = counterNext - 1;

    if(counterNext == listaImgBgAnim.length) {
        counterNext = 0;
    }
    if(counterMain < 0) {
        counterMain = listaImgBgAnim.length - 1;
    }

    for (let i = 0; i < listaImgBgAnim.length; i++) {
        listaImgBgAnim[i].classList.remove("nextSlide");
        listaImgBgAnim[i].classList.remove("mainSlide");
        listaImgBgAnim[i].classList.remove("hiddenSlide");

        if(i == counterNext) {
            listaImgBgAnim[i].classList.add("nextSlide");
        }
        else if(i == counterMain) {
            listaImgBgAnim[i].classList.add("mainSlide");
        }
        else {
            listaImgBgAnim[i].classList.add("hiddenSlide");
        }
    }
}

//Fecha actual
document.addEventListener('DOMContentLoaded', () => {
    const currentYearSpan = document.getElementById('currentYear');
    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;
  }
);

//Iluminar sección actual
document.addEventListener('DOMContentLoaded', () => {
    const options = {
      threshold: 0.6
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const menuLink = document.querySelector(`#menu a[href="#${id}"]`);
  
        if (entry.isIntersecting) {
          menuLink.classList.add('active');
        } else {
          menuLink.classList.remove('active');
        }
      });
    }, options);
  
    // Observamos cada sección
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
  }
);

//Mostrar y ocultar menú :::::::::::::::
var posPreviaScroll = document.documentElement.scrollTop;

window.onscroll = function() {esconderMostrarMenu()};

function esconderMostrarMenu() {
    var posActualScroll = document.documentElement.scrollTop;
    if (posPreviaScroll > posActualScroll) {
        //Al hacer scroll hacia arriba mostramos el menú
        //document.getElementById("superior").style.display = "flex";
        document.getElementById("superior").style.top = "0";

        document.getElementById("superior").style.height = "10rem";
    }
    else {
        document.getElementById("superior").style.top = "-10rem";
    }

    //Actualizamos la variable de posición previa
    posPreviaScroll = posActualScroll;
}