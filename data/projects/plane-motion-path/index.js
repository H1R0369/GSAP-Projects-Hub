const select = e => document.querySelector(e);
const selectAll = e => document.querySelectorAll(e);

const btn = select('#control-btn');
const progressEl = select('#progress');
const timeEl = select('#time');

const animation = gsap.to('img', {
    motionPath: {
        path: [
            {x: 250, y: 50},
            {x: 50, y: 250},
            {x: 250, y: 400},
        ],
        curviness: 1,
        autoRotate: true
    },
    duration: 5,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
})

let flipped = false;
animation.eventCallback('onRepeat', function() {

    gsap.to(this.targets(), { scaleX: flipped ? 1 : -1, duration: 0.25 });
    
    if (flipped) {flipped = false}
    else flipped = true;

});

animation.eventCallback('onUpdate', function() {

    progressEl.textContent = `Progress: ${this.progress().toFixed(1)}`;
    timeEl.textContent = `Time: ${this.time().toFixed(1)}`

})

btn.addEventListener('click', () => {

    if (btn.textContent === 'pause') {
        animation.pause();
        btn.textContent = 'play';
    } 
    else if (btn.textContent === 'play') {
        animation.play();
        btn.textContent = 'pause';
    }



}) 