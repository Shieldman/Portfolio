import "./navbar.css"

const buildNavbarTemplate = () => {
    return `
    <nav>
        <ul class="main-menu">
            <li class="main-menu-point menu-selected">
                <a href="/home" class="menu-button">Home</a>
            </li>
            <li class="main-menu-point">
                <a href="/experience" class="menu-button">Experience</a>
            </li>
            <li class="main-menu-point">
                <a href="/projects" class="menu-button">Projects</a>
            </li>
        </ul>
  </nav>`
};

export const printNavbarTemplate = () => {
    document.querySelector("header").innerHTML = buildNavbarTemplate();
};

