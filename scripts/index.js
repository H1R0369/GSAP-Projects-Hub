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

    // ==================== CARDS ====================

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
    };

    // ==================== ACTIONS ====================

    const bulbIcon = document.querySelector('#bulb-icon');

    bulbIcon.addEventListener('click', () => {
        const body = document.body;
        const burgerIconPath = document.querySelector('#burger-menu-icon path');
        const bulbIconPath = document.querySelector('#bulb-icon');

        body.classList.toggle('light');
        burgerIconPath.style.fill = body.classList.contains('light') ? '#000000' : '#ffffff';
        bulbIconPath.style.fill = body.classList.contains('light') ? '#000000' : '#ffffff';
    })

    // ==================== ANIMATIONS ====================

    const scaleUpEls = document.querySelectorAll('.gsap-scale-up');

    scaleUpEls.forEach(el => {
        el.addEventListener('mouseenter', () => gs.scaleUp(el, el.dataset.scaleMax));
        el.addEventListener('mouseleave', () => gs.scaleDown(el));
    })
}



window.addEventListener('load', () => {
    renderProjects();
    addListeners();
    gs.displayBody();
    gs.playEntry();
})