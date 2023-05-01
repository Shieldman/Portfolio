import './style.css'

import {printNavbarTemplate as Nav} from "./components/navbar/navbar";
import {printHomeTemplate as Home} from './components/home/home';
import {printExperiencesTemplatePage as Experience} from './components/experience/experience';
import {references} from './components/experience/references';

//Construccion inical de la página
const buildPageTemplate = () => {
    Nav();
    Home();

};

const cleanTemplates = () =>{
    document.querySelector('main').innerHTML='';
};

// Lee los comentarios de este código para entender lo que hace 🔴
const menuButtons = document.querySelectorAll('menu-button');

addEventListener('click', (ev) => {
	ev.preventDefault(); // Esto hace que el link no cargue la URL a la que apunta
  const linkHref = ev.target.href; // Almacenamos la URL en una constante
  console.log('El link apunta a:', linkHref ); // La mostramos en consola
  document.querySelector('main').innerHTML='';
  switch (linkHref){
    case 'http://localhost:5173/home':
        Home();
        break;
    case 'http://localhost:5173/experience':
        Experience(references);
        break;
    case 'http://localhost:5173/projects':
        //Projects();
        break;
  }
})


buildPageTemplate();

