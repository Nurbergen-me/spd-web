// QA toggle 

var qaItem = document.querySelectorAll('.qa__item')

qaItem.forEach(item => {
    item.addEventListener('click', (e) => {
        if (item.classList.contains('active')) {
            item.classList.remove('active')
        } else {
            item.classList.add('active')
        }
    })
})


// Cases slide

const slider = document.querySelector('.cases__items');
let isDown = false;
let startX;
let scrollLeft;
slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
});