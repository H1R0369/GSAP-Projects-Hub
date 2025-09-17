const btn = document.querySelector('.btn');
const bg = document.querySelector('.bg');

btn.addEventListener('mouseenter', () => {
    console.log('yeah')
    gsap.fromTo(bg, 
        {
            scale: 0
        },
        {
            scale: 1,
        }
    )

})

btn.addEventListener('mouseleave', () => {

    gsap.to(bg, {scale: 0})

})