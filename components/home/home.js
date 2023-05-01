import "./home.css"

const buildHomeTemplate = () => {

return `
<div class="main-container">
<div class="persona-container">
  <img class="persona-container-image" src="./assets/profile.jpeg" alt="profile-picture">
  <div class="personal-info-container">
      <h2>Arnau Rovira</h2>
      <h3>JavaScript Developer</h3>
  </div>
</div>
<h2 class="persona-description-title"> About me </h2>
<p class="persona-description-container">
Motivated and detail-oriented JavaScript developer with 0 years of experience developing web applications using various front-end frameworks and libraries. Skilled in developing clean, maintainable, and scalable code. Proficient in developing single-page applications and integrating back-end APIs. Proven track record of delivering high-quality products within tight deadlines.
<div class="buttons-container">
<a href="https://github.com/Shieldman"><button class="home-button">GitHub</button></a>
<a href="https://www.linkedin.com/in/arnau-rovira-ravetllat-6b777478/"><button class="home-button">LinkedIn</button></a>
</div>

</div>`

};

export const printHomeTemplate = () => {
    document.querySelector("main").innerHTML = buildHomeTemplate();
};