import "./experience.css";
import { references } from "./references";

const buildExperienceTemplateArticle = (reference) => {
  return `
      <article class="company-reference">
        <img class="reference-front reference-logo" src="${reference.logo}" alt="reference-logo">
        <p class="reference-front"><b>From:</b> ${reference.startdate}</p>
        <p class="reference-front"><b>To:</b> ${reference.enddate}</p>
        <p class="reference-back hidden"><b>Role:</b> ${reference.role}</p>
        <p class="reference-back hidden"><b>Description:</b> ${reference.description}</p>
        <a class="reference-back hidden" href="${reference.url}"><button class="reference-back hidden">${reference.name}</button></a>
      </article>
    
    `;
};

const toogleReferenceCard = (event) => {
  const frontElements = event.target.querySelectorAll(".reference-front");
  const backElements = event.target.querySelectorAll(".reference-back");

  frontElements.forEach((element) => {
    element.classList.toggle('hidden');
  });

  backElements.forEach((element) => {
    element.classList.toggle('hidden');
  });

};

const addReferencesListener = () => {
  const referenceCards = document.querySelectorAll(".company-reference");
  referenceCards.forEach((referent) => {
    referent.addEventListener("mouseenter", toogleReferenceCard);
    referent.addEventListener("mouseleave", toogleReferenceCard);
  });
};

export const printExperiencesTemplatePage = (references) => {
  document.querySelector("main").innerHTML = `
    <h1>Companies I worked for:</h1>
    <div class="references-container"> 
    </div>
    `;
  references.forEach((reference) => {
    document.querySelector(".references-container").innerHTML +=
      buildExperienceTemplateArticle(reference);
  });

  addReferencesListener();
};
