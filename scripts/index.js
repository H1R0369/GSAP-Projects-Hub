import {projects} from '../Data/projects-list.js';

const projectsSectionEl = document.querySelector('.projects-section');
let projectsHTML = '';

projects.forEach(project => {

    projectsHTML += `
        <a 
            href='${project.href}'
            class="project-link"
        >
            <div
                class="project-container"
            >   
                <div
                    class="thumbnail-container"
                >
                    <img class="project-thumbnail" src='${project.imageSrc}' alt="project-thumbnail">

                </div>

                <div
                    class="project-title-container"
                >
                    <h6
                        class="project-title"
                    >
                        ${project.title}
                        
                    </h6>

                </div>

                <div
                    class="project-description-container"
                >
                    <p
                        class="project-description"
                    >
                        ${project.description}
                        
                    </p>

                </div>

            </div>
        </a>
    `

});

projectsSectionEl.innerHTML = projectsHTML;