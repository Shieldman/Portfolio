import "./projects.css"

const buildProjectTemplateArticle = (project) => {
    return `
    <article class="project">
    <a href="${project.web}"><img class="project-image" href="" src="${project.url}" alt="project-image"></a>
        <h2 class="project-title">${project.title}</h2>
    </article>
    `
}

export const printProjectsTemplatePage = (projects) => {
    document.querySelector("main").innerHTML = `
      <h1>Highlighted projects:</h1>
      <div class="projects-container"> 
      </div>
      `;
    projects.forEach((project) => {
      document.querySelector(".projects-container").innerHTML +=
        buildProjectTemplateArticle(project);
    });
  };