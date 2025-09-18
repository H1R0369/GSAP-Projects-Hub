const select = e => document.querySelector(e);
const selectAll = e => document.querySelectorAll(e);

const controlBtn = select('#control-btn');
const revBtn = select('#reverse-btn');
const resBtn = select('#restart-btn');
const playbackBtn = select('#playback-btn');
const timeSlider = select('#time-slider');
const progressEl = select('#progress');
const timeEl = select('#time');
const homeEl = select('.home-img');
const airportEl = select('.airport-img');

let flipped = false;
let currentPlayback = 1;

gsap.set(homeEl, {x: 180, y: -50});
gsap.set(airportEl, {x: -170, y: 250});

const anim = gsap.to('.plane-img', {
    motionPath: {
        path: [
            {x: 250, y: 50},
            {x: 50, y: 250},
            {x: 250, y: 300},
        ],
        curviness: 1,
        autoRotate: true
    },
    duration: 5,
    ease: 'power1.inOut',
});

anim.eventCallback('onComplete', flipPlane, ['reverse']);

anim.eventCallback('onReverseComplete', flipPlane, ['restart']);

anim.eventCallback('onUpdate', function() {

    timeSlider.value = this.time();
    updateTimeValues(this.progress(), this.time());

});

function flipPlane(direction) {

    gsap.to('.plane-img', { scaleX: flipped ? 1 : -1, duration: 0.25 });
    
    flipped = flipped ? false : true;

    if (direction === 'reverse') {anim.reverse()}
    else anim.restart();

};

function resetAnim() {

    gsap.to('.plane-img', { scaleX: 1 });
    flipped = false;
    anim.restart();

}

function updateTimeValues(progressValue, timeValue) {

    progressEl.textContent = `Progress: ${progressValue.toFixed(1)}`;
    timeEl.textContent = `Time: ${timeValue.toFixed(2)}`

};

controlBtn.addEventListener('click', (e) => {
    anim.paused(!anim.paused());
    e.target.textContent = anim.paused() ? 'play' : 'pause';
});

revBtn.addEventListener('click', (e) => {
    anim.reversed(!anim.reversed());
    e.target.textContent = anim.reversed() ? 'forward' : 'reverse';
});

resBtn.addEventListener('click', () => {
    resetAnim();
});

playbackBtn.addEventListener('click', (e) => {
    if (currentPlayback === 4) {currentPlayback = 1}
    else currentPlayback++;
    anim.timeScale(currentPlayback);
    resetAnim();
    e.target.textContent = `${currentPlayback}x`
})

timeSlider.addEventListener('input', (e) => {
    const val = Number(e.target.value);
    anim.pause(val);
    updateTimeValues(anim.progress(), anim.time());
});

timeSlider.addEventListener('change', (e) => {
    const val = Number(e.target.value);
    anim.resume(val);
});

homeEl.addEventListener('click', () => {
    anim.pause();
    gsap.to(anim, {time: 2});
    anim.resume();
})

airportEl.addEventListener('click', () => {
    anim.pause();
    gsap.to(anim, {time: 3.12});
    anim.resume();
})