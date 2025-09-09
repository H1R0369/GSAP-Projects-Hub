const tl = gsap.timeline({repeat: -1, repeatDelay: 0.5})

    .from('.hole', {

        scale: 0,
        duration: 0.5,
        repeat: 1,
        repeatDelay: 0.5,
        yoyo: true
        
    })

    .fromTo('h1', {

        y: 200,
        ease: 'power3.in'

    },
    {

        y: -150

    }, '-=1')

    .to('h1', {

        y: 0,
        duration: 0.6,
        ease: 'power3.in'

    }, '>')

tl.timeScale(1)