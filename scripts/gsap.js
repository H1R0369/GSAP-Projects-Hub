gsap.registerPlugin(SplitText, TextPlugin);

const gs = {

    entryPlaying: false,

    playEntry() {

        const logoSvg = this.select('#logo-svg-container');
        const logoTxtMy = this.select('#logo-txt-my');
        const logoTxtHub = this.select('#logo-txt-hub');
        const burgerIcon = this.select('#burger-menu-icon')

        const split = new SplitText(logoTxtHub, {type: 'chars'});

        const tl = gsap.timeline({})

            .from(logoSvg, {
                width: 0, 
                duration: 1, 
                ease: 'power2.in'
            })
            .from(logoTxtMy, {
                y: -100,
                ease: 'power1.in'
            })
            .from(split.chars, {
                opacity: 0,
                rotationY: '360deg',
                transformPerspective: '600px',
                stagger: {
                    amount: 0.5,
                    ease: 'power2.in'
                }
            })
            .from(burgerIcon, {
                opacity: 0,
                duration: 1
            })
    },

    displayBody() {

        const body = this.select('body');
        gsap.to(body, {autoAlpha: 1});
    },

    select: e => document.querySelector(e),
    selectAll: e => document.querySelectorAll(e),


}

export default gs;