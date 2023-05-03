import './style.css'

import {printNavbarTemplate as Nav} from "./components/navbar/navbar";
import {printHomeTemplate as Home} from './components/home/home';
import {printExperiencesTemplatePage as Experience} from './components/experience/experience';
import {printProjectsTemplatePage as Projects} from './components/projects/projects'; 
import {references} from './components/experience/references';
import {projects} from './components/projects/projects-list';




//Construccion inical de la página
const buildPageTemplate = () => {
    Nav();
    document.querySelector('.main-menu-point:first-child').classList.add("menu-selected");
    Home();
    createButtonsListeners();

};

const createButtonsListeners = () =>{

    const menuButtons = document.querySelectorAll('.menu-button');
    menuButtons.forEach((button) => {button.addEventListener('click', (ev) => {
        
        ev.preventDefault(); // Esto hace que el link no cargue la URL a la que apunta
        const linkHref = ev.target.href; // Almacenamos la URL en una constante
        console.log('El link apunta a:', linkHref ); // La mostramos en consola
        switch (linkHref){
            case 'http://localhost:5173/home':
                document.querySelector('main').innerHTML='';
                Home();
                document.querySelector('.main-menu-point:nth-child(1)').classList.add("menu-selected");
                document.querySelector('.main-menu-point:nth-child(2)').classList.remove("menu-selected");
                document.querySelector('.main-menu-point:nth-child(3)').classList.remove("menu-selected");
                break;
            case 'http://localhost:5173/experience':
                document.querySelector('main').innerHTML='';
                Experience(references);
                document.querySelector('.main-menu-point:nth-child(1)').classList.remove("menu-selected");
                document.querySelector('.main-menu-point:nth-child(2)').classList.add("menu-selected");
                document.querySelector('.main-menu-point:nth-child(3)').classList.remove("menu-selected");
                break;
            case 'http://localhost:5173/projects':
                document.querySelector('main').innerHTML='';
                Projects(projects);
                document.querySelector('.main-menu-point:nth-child(1)').classList.remove("menu-selected");
                document.querySelector('.main-menu-point:nth-child(2)').classList.remove("menu-selected");
                document.querySelector('.main-menu-point:nth-child(3)').classList.add("menu-selected");
                break;
        }
        });})
    
};



buildPageTemplate();