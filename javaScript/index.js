
//abrir y cerrar menu hamburguesa

const buttonHamburguesa = document.getElementById('buttonHamburguesa');
const buttonHamburguesaCerrar = document.getElementById('buttonHamburguesaCerrar');
const divHamburguesa = document.getElementById('divHamburguesa');
const menuHamburguesaUl = document.getElementById('menuHamburguesaUl');

const heroFilter = document.getElementById('heroFilter')
const mainFilter = document.getElementById('mainFilter')
const footerFilter = document.getElementById('footerFilter')


const abrirMenu = () => {
    divHamburguesa.style.display = "block";
    buttonHamburguesa.style.display = "none";
    heroFilter.classList.add('filter');
    mainFilter.classList.add('filter');
    footerFilter.classList.add('filter');
}

const cerrarMenu = () => {
    divHamburguesa.style.display = "none";
    buttonHamburguesa.style.display = "inline";
    heroFilter.classList.remove('filter');
    mainFilter.classList.remove('filter');
    footerFilter.classList.remove('filter');
}

buttonHamburguesa.addEventListener('click', abrirMenu)
buttonHamburguesaCerrar.addEventListener('click', cerrarMenu)