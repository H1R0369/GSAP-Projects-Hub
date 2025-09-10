const tl = gsap.timeline({repeat: -1, repeatDelay: 0.5, yoyo: true})

    .from('.hole', {

        scale: 0,
        repeat: 1,
        duration: 0.3,
        repeatDelay: 0.5,
        yoyo: true
        
    })

    .fromTo('h1', {

        y: 180,
        scaleY: 2,
        scaleX: 0.5

    },
    {

        y: -180,
        scaleY: 1,
        scaleX: 1,
        ease: 'power1'

    }, '>-0.85')

    .to('h1', {

        y: 0,
        ease: 'power3.in'

    }, '>')

    .to('h1', {

        scaleY: 0.7,
        scaleX: 1.2,
        transformOrigin: '50% 150%',
        duration: 0.2,
        repeat: 1,
        yoyo: true

    }, '>')

    .to('.shadow', {

        opacity: 1,

    }, '0.3')

    .to('.shadow', {

        scaleX: 0.8,
        filter: 'blur(2px)',
        ease: 'power3.in'

    }, '>')

