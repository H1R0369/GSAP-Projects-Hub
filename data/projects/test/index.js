gsap.registerPlugin(SplitText, TextPlugin);

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    gsap.to(divs, {clearProps: 'backgroundColor', duration: 0.01})
})


// const fDiv = document.querySelector('#first-div');

// gsap.to(fDiv, {rotationY: '360deg', duration: 8, repeat: -1, yoyo: true, transformOrigin: 'center', transformPerspective: 1000});

const split = new SplitText('h1', {type: 'chars'});


gsap.to(split.chars, {rotationY: '360deg', duration: 1.2, repeat: -1, stagger: {amount: 1, ease: 'power2.in'}, ease: 'back(2)', transformPerspective: '400'})




