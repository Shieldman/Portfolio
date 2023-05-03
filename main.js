import './style.css'

import {printNavbarTemplate as Nav} from "./components/navbar/navbar";
import {printHomeTemplate as RenderHome} from './components/home/home';
import {printExperiencesTemplatePage as RenderExperience} from './components/experience/experience';
import {printProjectsTemplatePage as RenderProjects} from './components/projects/projects'; 
import {references} from './components/experience/references';
import {projects} from './components/projects/projects-list';




//Construccion inical de la página
const buildPageTemplate = () => {
    Nav();
    document.querySelector('.main-menu-point:first-child').classList.add("menu-selected");
    RenderHome();
    createButtonsListeners();

};

const createButtonsListeners = () =>{

    const menuButtons = document.querySelectorAll('.menu-button');
    menuButtons.forEach((button) => {button.addEventListener('click', (ev) => {
        
        ev.preventDefault(); // Esto hace que el link no cargue la URL a la que apunta
        const linkHref = ev.target.href; // Almacenamos la URL en una constante
        console.log('El link apunta a:', linkHref ); // La mostramos en consola
        if(linkHref.includes('/home')){
                document.querySelector('main').innerHTML='';
                RenderHome();
                document.querySelector('.main-menu-point:nth-child(1)').classList.add("menu-selected");
                document.querySelector('.main-menu-point:nth-child(2)').classList.remove("menu-selected");
                document.querySelector('.main-menu-point:nth-child(3)').classList.remove("menu-selected");
        }else if (linkHref.includes('/experience')){
                document.querySelector('main').innerHTML='';
                RenderExperience(references);
                document.querySelector('.main-menu-point:nth-child(1)').classList.remove("menu-selected");
                document.querySelector('.main-menu-point:nth-child(2)').classList.add("menu-selected");
                document.querySelector('.main-menu-point:nth-child(3)').classList.remove("menu-selected");
        }else if(linkHref.includes('/projects')){
                document.querySelector('main').innerHTML='';
                RenderProjects(projects);
                document.querySelector('.main-menu-point:nth-child(1)').classList.remove("menu-selected");
                document.querySelector('.main-menu-point:nth-child(2)').classList.remove("menu-selected");
                document.querySelector('.main-menu-point:nth-child(3)').classList.add("menu-selected");
        };
    });})
    
};



buildPageTemplate();