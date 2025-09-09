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
        title: 'Letter Hole Jumper',
        description: 'A simple animation of the letter H coming out of a hole that opens up and eventually closes.',
        image: 'letter-hole-jumper-thumbnail',
        href: './Data/Projects/Letter Hole Jumper/index.html'
    }

].map(projectDetails => {

    return new Project(projectDetails)

})