class Project {

    constructor(projectDetails) {

        this.title = projectDetails.title;
        this.description = projectDetails.description;
        this.imageSrc = projectDetails.imageSrc;
        this.href = projectDetails.href;
    };
};

const projects = [

    {
        title: 'Plane Motion Path',
        description: 'Interactive GSAP animation of a plane flying between home and an airport with motion path, auto-rotation, speed control, reversing, progress tracking, and point-to-click navigation',
        imageSrc: '../assets/images/thumbnails/plane-motion-path-thumbnail.png',
        href: './data/projects/plane-motion-path/index.html' 
    },
    {
        title: 'Hover Highlight Button',
        description: 'A button that hightlights when hovered over',
        imageSrc: '../assets/images/thumbnails/hover-highlight-button-thumbnail.png',
        href: './data/projects/hover-highlight-button/index.html'
    },
    {
        title: 'Letter Hole Jumper',
        description: 'A simple animation of the letter H popping out of a hole that opens up and then closes.',
        imageSrc: '../assets/images/thumbnails/letter-hole-jumper-thumbnail.png',
        href: './data/projects/letter-hole-jumper/index.html'
    },

].map(projectDetails => {

    return new Project(projectDetails)
});

export default projects;