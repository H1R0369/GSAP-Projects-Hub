import gs from './gsap.js';
import projects from '../data/projects-list.js';

const projectsContainer = document.querySelector('#projects-container');

function renderProjects() {

    let projectsHTML = '';

    projects.forEach(project => {

        projectsHTML += `

            <a 
                href="./data/projects/${project.href}"
                class="project-card-link"
            >
                
                <img 
                    src="./assets/images/thumbnails/${project.imageSrc}.png"
                    class="project-thumbnail"
                    alt="project-thumbnail"
                >
                <h5 class="project-title">${project.title}</h5>
                <p class="project-description">${project.description}</p>
            </a>
        `
    });

    projectsContainer.innerHTML = projectsHTML;
}

function addListeners() {

    const cards = document.querySelectorAll('.project-card-link');

    if (window.innerWidth > 1024) {
        cards.forEach(c => {
            c.addEventListener('mouseenter', () => c.classList.add('hover'));
            c.addEventListener('mouseleave', () => c.classList.remove('hover'));
        });
    } else {
        cards.forEach(c => {
            c.addEventListener('click', async (e) => {
                const link = e.currentTarget.href;
                gs.changeCardGradient(e.currentTarget);
                e.preventDefault();
                setTimeout(() => {
                    window.location.href = link;
                }, 300);
            })
        })
    }
}



window.addEventListener('load', () => {
    renderProjects();
    addListeners();
    gs.displayBody();
    // gs.playEntry();
})