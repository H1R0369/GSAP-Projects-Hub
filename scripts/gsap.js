gsap.registerPlugin(SplitText, TextPlugin);

const gs = {

    entryPlaying: false,

    playEntry() {

        const logoSvgSticker = this.select('#logo-svg-sticker');
        const logoTxtMy = this.select('#logo-txt-my');
        const logoTxtHub = this.select('#logo-txt-hub');
        const burgerIcon = this.select('#burger-menu-icon');
        const bulbIcon = this.select('#bulb-icon');
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
            .from([burgerIcon, bulbIcon], {
                opacity: 0,
                duration: 3,
                stagger: 0.2
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

    changeCardGradient(card) {
        gsap.set(card, {
            background: 'var(--gradient-hover)'
        })
        setTimeout(() => {
            gsap.set(card, {
                background: 'var(--gradient)'
            })
        }, 200);
    },

    scaleUp(element, maxScale) {
        gsap.to(element, {
            scale: Number(maxScale),
        })
    },

    scaleDown(element) {
        gsap.to(element, {scale: 1})
    },

    pop(element, maxScale) {
        gsap.fromTo(element, 
            {
                scale: 1,
            }, 
            {
                scale: maxScale,
                repeat: 1,
                duration: 0.2,
                yoyo: true
            })
    },

    select: e => document.querySelector(e),
    selectAll: e => document.querySelectorAll(e),


}

export default gs;