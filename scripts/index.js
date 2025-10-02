import gs from './gsap.js';
import projects from '../data/projects-list.js';

const projectsContainer = document.querySelector('#projects-container');

function renderProjects() {

    let projectsHTML = '';

    projects.forEach(project => {

        projectsHTML += `

            <div class="project-card">
                <a 
                    href=${project.href}
                    class="project-card-link"
                >
                    <img 
                        src=${project.imageSrc}
                        class="project-thumbnail"
                        alt="project-thumbnail"
                    >
                    <h5 class="project-title">${project.title}</h5>
                    <p class="project-description">${project.description}</p>
                </a>
            </div>
        `
    });

    projectsContainer.innerHTML = projectsHTML;
}

window.addEventListener('load', () => {
    renderProjects();
    gs.displayBody();
    gs.playEntry();
})