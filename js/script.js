const main = () => {
    let modoColor = localStorage.getItem('modo'); // Valor actual de la key 'modo' en localStorage
    let capaHeader = document.getElementById('header');
    let capaMain = document.getElementById('main');
    let capaFooter = document.getElementById('footer');
    let nav = document.getElementById('nav');

    // Cambio de estilos
    let botonEjecutar = document.querySelector('#btnEjecutar');
    botonEjecutar.addEventListener('click', ejecutar);

    if (modoColor === "estiloInicial") { // Se verifica el valor actual de la key para saber que estilo mostrar en la pagina               
        capaHeader.classList.add("estiloInicialHeader");               
        capaMain.classList.add("estiloInicialMain");               
        capaFooter.classList.add("estiloInicialFooter");
    } else if(modoColor === "estiloRojo") {
        capaHeader.classList.add('estiloRojoHeader');
        capaMain.classList.add('estiloRojoMain');
        capaFooter.classList.add('estiloRojoFooter');
        nav.classList.add('estiloRojoNav');
        capaHeader.style.transitionDuration = '0s';
        capaHeader.style.opacity = '1';
        capaMain.style.transitionDuration = '0s';
        capaMain.style.opacity = '1';
        capaFooter.style.transitionDuration = '0s';
        capaFooter.style.opacity = '1';
        nav.style.transitionDuration = '0s';
        nav.style.opacity = '1';
    } else if(modoColor === "estiloMorado") {
        capaHeader.classList.add("estiloMoradoHeader");               
        capaMain.classList.add("estiloMoradoMain");               
        capaFooter.classList.add("estiloMoradoFooter");
        capaHeader.style.transitionDuration = '0s';
        capaHeader.style.opacity = '1';
        capaMain.style.transitionDuration = '0s';
        capaMain.style.opacity = '1';
        capaFooter.style.transitionDuration = '0s';
        capaFooter.style.opacity = '1';
    } else if(modoColor === "estiloNegro") {
        capaHeader.classList.add('estiloNegroHeader');
        capaMain.classList.add('estiloNegroMain');
        capaFooter.classList.add('estiloNegroFooter');
        capaHeader.style.transitionDuration = '0s';
        capaHeader.style.opacity = '1';
        capaMain.style.transitionDuration = '0s';
        capaMain.style.opacity = '1';
        capaFooter.style.transitionDuration = '0s';
        capaFooter.style.opacity = '1';
    }

    // Efecto acordeon
    let elementosAcord = document.getElementsByClassName('acordeonItems');
    for (let i = 0; i < elementosAcord.length;  i++) {
        elementosAcord[i].addEventListener('click', function(){
            let panel = this.nextElementSibling;
            let flecha = this.lastElementChild; 
            flecha.style.transform = "rotate(180deg)";
            if(panel.style.display == "none") {
                panel.style.display = "block";
                flecha.style.transform = "rotate(360deg)";   
            } else {
                panel.style.display = "none";
                flecha.style.transform = "rotate(180deg)";
            } 
        });
    }
}

const ejecutar = () => {
    let elemento = document.querySelector(`#opciones`);
    let header = document.querySelector(`#header`);
    let main = document.querySelector(`#main`);
    let footer = document.querySelector(`#footer`);
    let nav = document.querySelector(`#nav`);

    switch(Number(elemento.value)) {
        case 1:
            localStorage.setItem("modo", "estiloInicial"); // Se le asigna el valor del estilo a localStorage, el cual se mantendra a pesar de que se recargue o cambie de pagina
            localStorage.setItem("menu", "Tono inicial");
            if(header.classList.contains('estiloNegroHeader')) {
                header.classList.remove('estiloNegroHeader');
                main.classList.remove('estiloNegroMain');
                footer.classList.remove('estiloNegroFooter');
            } else if(header.classList.contains('estiloRojoHeader')) {
                header.classList.remove('estiloRojoHeader');
                main.classList.remove('estiloRojoMain');
                footer.classList.remove('estiloRojoFooter');
                nav.classList.remove('estiloRojoNav');
            } else if (header.classList.contains('estiloMoradoHeader')) {
                header.classList.remove('estiloMoradoHeader');
                main.classList.remove('estiloMoradoMain');
                footer.classList.remove('estiloMoradoFooter');
            }
            header.style.transitionDuration = '1s';
            main.style.transitionDuration = '1s';
            footer.style.transitionDuration = '1s';
            break;
        case 2:
            localStorage.setItem("modo", "estiloRojo");
            localStorage.setItem("menu", "Tonos rojizos");
            if (header.classList.contains('estiloMoradoHeader')) {
                header.classList.remove('estiloMoradoHeader');
                main.classList.remove('estiloMoradoMain');
                footer.classList.remove('estiloMoradoFooter');
            } else if(header.classList.contains('estiloNegroHeader')) {
                header.classList.remove('estiloNegroHeader');
                main.classList.remove('estiloNegroMain');
                footer.classList.remove('estiloNegroFooter');
            }
            header.classList.add('estiloRojoHeader');
            main.classList.add('estiloRojoMain');
            footer.classList.add('estiloRojoFooter');
            nav.classList.add('estiloRojoNav'); 
            header.style.transitionDuration = '1s';
            main.style.transitionDuration = '1s';
            footer.style.transitionDuration = '1s';
            nav.style.transitionDuration = '1s';
            header.style.opacity = '0';
            main.style.opacity = '0';
            footer.style.opacity = '0';
            nav.style.opacity = '0';
            header.style.opacity = '1';
            main.style.opacity = '1';
            footer.style.opacity = '1';
            nav.style.opacity = '1';
            break;
        case 3:
            localStorage.setItem("modo", "estiloMorado");
            localStorage.setItem("menu", "Tonos morados");
            if (header.classList.contains('estiloRojoHeader')) {
                header.classList.remove('estiloRojoHeader');
                main.classList.remove('estiloRojoMain');
                footer.classList.remove('estiloRojoFooter');
                nav.classList.remove('estiloRojoNav');
            } else if(header.classList.contains('estiloNegroHeader')) {
                header.classList.remove('estiloNegroHeader');
                main.classList.remove('estiloNegroMain');
                footer.classList.remove('estiloNegroFooter');
            }
            header.classList.add('estiloMoradoHeader');
            main.classList.add('estiloMoradoMain');
            footer.classList.add('estiloMoradoFooter');
            header.style.transitionDuration = '1s';
            main.style.transitionDuration = '1s';
            footer.style.transitionDuration = '1s';
            header.style.opacity = '0';
            main.style.opacity = '0';
            footer.style.opacity = '0';
            header.style.opacity = '1';
            main.style.opacity = '1';
            footer.style.opacity = '1';
            break;
        case 4:
            localStorage.setItem("modo", "estiloNegro");
            localStorage.setItem("menu", "Tonos oscuros");
            if (header.classList.contains('estiloRojoHeader')) {
                header.classList.remove('estiloRojoHeader');
                main.classList.remove('estiloRojoMain');
                footer.classList.remove('estiloRojoFooter');
                nav.classList.remove('estiloRojoNav');
            } else if(header.classList.contains('estiloMoradoHeader')) {
                header.classList.remove('estiloMoradoHeader');
                main.classList.remove('estiloMoradoMain');
                footer.classList.remove('estiloMoradoFooter');
                nav.classList.remove('estiloMoradoNav');
            }
            header.classList.add('estiloNegroHeader');
            main.classList.add('estiloNegroMain');
            footer.classList.add('estiloNegroFooter');
            header.style.transitionDuration = '1s';
            main.style.transitionDuration = '1s';
            footer.style.transitionDuration = '1s';
            header.style.opacity = '0';
            main.style.opacity = '0';
            footer.style.opacity = '0';
            header.style.opacity = '1';
            main.style.opacity = '1';
            footer.style.opacity = '1';
            break;
        default:
            console.log(elemento);
            break;
    }
}
