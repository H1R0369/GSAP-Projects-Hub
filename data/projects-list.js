class Project {

    constructor(projectDetails) {

        this.title = projectDetails.title;
        this.description = projectDetails.description;
        this.image = projectDetails.image;
        this.href = projectDetails.href;

    }

}

export const projects = [

    {
        title: 'Plane Motion Path',
        description: 'Interactive GSAP animation of a plane flying between home and an airport with motion path, auto-rotation, speed control, reversing, progress tracking, and point-to-click navigation',
        image: 'plane-motion-path-thumbnail',
        href: './data/projects/plane-motion-path/index.html' 
    },
    {
        title: 'Hover Highlight Button',
        description: 'A button that hightlights when hovered over',
        image: 'hover-highlight-button-thumbnail',
        href: './data/projects/hover-highlight-button/index.html'
    },
    {
        title: 'Letter Hole Jumper',
        description: 'A simple animation of the letter H popping out of a hole that opens up and then closes.',
        image: 'letter-hole-jumper-thumbnail',
        href: './data/projects/letter-hole-jumper/index.html'
    }

].map(projectDetails => {

    return new Project(projectDetails)

})