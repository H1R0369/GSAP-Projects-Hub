gsap.registerPlugin(SplitText, TextPlugin);

const gs = {

    entryPlaying: false,

    playEntry() {

        const logoSvgSticker = this.select('#logo-svg-sticker');
        const logoTxtMy = this.select('#logo-txt-my');
        const logoTxtHub = this.select('#logo-txt-hub');
        const burgerIcon = this.select('#burger-menu-icon')
        const projects = this.select('#projects-container').querySelectorAll('.project-card-link');

        const split = new SplitText(logoTxtHub, {type: 'chars'});

        const tl = gsap.timeline({paused: this.entryPlayed})

            .to(logoSvgSticker, {
                width: 0, 
                duration: 1, 
                ease: 'power2.in'
            })
            .from(logoTxtMy, {
                y: -window.innerHeight,
                ease: 'power1.out'
            })
            .from(split.chars, {
                opacity: 0,
                rotationY: '360deg',
                transformPerspective: '400px',
                duration: 1,
                repeat: -1,
                repeatDelay: 5,
                stagger: {
                    amount: 1,
                    ease: 'power2.in'
                }
            })
            .from(burgerIcon, {
                opacity: 0,
                duration: 3
            }, '<+0.5')
            .from(projects, {
                display: 'none',
                autoAlpha: 0,
                stagger: 0.2,
                duration: 2
            }, '<+0.7');
    },

    displayBody() {

        const body = this.select('body');
        gsap.to(body, {autoAlpha: 1});
    },

    select: e => document.querySelector(e),
    selectAll: e => document.querySelectorAll(e),


}

export default gs;