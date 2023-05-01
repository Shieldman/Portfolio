import "./experience.css";
import { references } from "./references";

const buildExperienceTemplateArticle = (reference) => {
  return `
      <article class="company-reference">
        <img class="reference-front" src="${reference.logo}" alt="reference-logo">
        <p class="reference-front">From: ${reference.startdate}</p>
        <p class="reference-front">To: ${reference.enddate}</p>
        <p class="reference-back hidden">Role: ${reference.role}</p>
        <p class="reference-back hidden">Description: ${reference.description}</p>
        <a class="reference-back hidden" href="${reference.url}"><button class="reference-back">${reference.name}</button></a>
      </article>
    
    `;
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
};
