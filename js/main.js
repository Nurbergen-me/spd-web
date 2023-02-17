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
if (slider) {
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
}


// Burger toggle

var burger = document.querySelector('.navbar__burger')
var burgerClose = document.querySelector('.hidden__close')
var hiddenMenu =  document.querySelector('.hidden')
var hiddenLinks = document.querySelectorAll('.hidden__link')

burger.addEventListener('click', () => {
    hiddenMenu.classList.toggle('active')
})

burgerClose.addEventListener('click', () => {
    hiddenMenu.classList.remove('active')
})

hiddenLinks.forEach(link => {
    link.addEventListener('click', () => {
        hiddenMenu.classList.remove('active')
    })
})



// Burger toggle

var navbar = document.querySelector('.navbar')
var toTop = document.querySelector('.to-top')
window.addEventListener('scroll', function(e) {
    lastPosition = window.scrollY;
    
    if (lastPosition > 10) {
        navbar.classList.add('active')
        toTop.classList.remove('d-none')
    } else {
        navbar.classList.remove('active')
        toTop.classList.add('d-none')
    }
});


// Swiper slider
var swiperItem = document.querySelector(".swiper");
if (swiperItem) {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        slideActiveClass: 'active',
        slideToClickedSlide: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 10,
            }
        },
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
}


// Video

var playWrap = document.querySelectorAll(".reviews__play-btn");
// var video = document.getElementById("video");

playWrap.forEach(item => {

    item.addEventListener("click", (e) => {
        playWrap.forEach(item => {
            item.classList.remove('d-none')
        })
        item.classList.add('d-none')
        // const video = item.parentNode.querySelector('.reviews__video')
        // console.log(video)
        // if (video.paused == true) {
        //     video.play();
        //     playButton.classList.add("hidden");
        // } else {
        //     video.pause();
        //     playButton.classList.remove("hidden");
        // }
    });
})


// Toggle Filters 

var allFilter = document.querySelector(".cases__all-filter");
var filters = document.querySelector(".cases__filters");

if (allFilter) {
    allFilter.addEventListener('click', (e) => {
        console.log('hi')
        filters.classList.toggle('hidden')
    })
    
}


// Double Range

function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#C6C6C6', '#946EFF', controlSlider);
    if (from > to) {
        fromSlider.value = to;
        fromInput.value = to;
    } else {
        fromSlider.value = from;
    }
}
    
function controlToInput(toSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#C6C6C6', '#946EFF', controlSlider);
    setToggleAccessible(toInput);
    if (from <= to) {
        toSlider.value = to;
        toInput.value = to;
    } else {
        toInput.value = from;
    }
}

function controlFromSlider(fromSlider, toSlider, fromInput) {
  const [from, to] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, '#C6C6C6', '#946EFF', toSlider);
  if (from > to) {
    fromSlider.value = to;
    fromInput.value = to;
  } else {
    fromInput.value = from;
  }
}

function controlToSlider(fromSlider, toSlider, toInput) {
  const [from, to] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, '#C6C6C6', '#946EFF', toSlider);
  setToggleAccessible(toSlider);
  if (from <= to) {
    toSlider.value = to;
    toInput.value = to;
  } else {
    toInput.value = from;
    toSlider.value = from;
  }
}

function getParsed(currentFrom, currentTo) {
  const from = parseInt(currentFrom.value, 10);
  const to = parseInt(currentTo.value, 10);
  return [from, to];
}

function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max-to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition)/(rangeDistance)*100}%,
      ${rangeColor} ${((fromPosition)/(rangeDistance))*100}%,
      ${rangeColor} ${(toPosition)/(rangeDistance)*100}%, 
      ${sliderColor} ${(toPosition)/(rangeDistance)*100}%, 
      ${sliderColor} 100%)`;
}

function setToggleAccessible(currentTarget) {
  const toSlider = document.querySelector('#toSlider');
  if (Number(currentTarget.value) <= 0 ) {
    toSlider.style.zIndex = 2;
  } else {
    toSlider.style.zIndex = 0;
  }
}

const fromSlider = document.querySelector('#fromSlider');
const toSlider = document.querySelector('#toSlider');
const fromInput = document.querySelector('#fromInput');
const toInput = document.querySelector('#toInput');
if (toSlider) {
    fillSlider(fromSlider, toSlider, '#C6C6C6', '#946EFF', toSlider);
    setToggleAccessible(toSlider);
    fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
    toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
    fromInput.oninput = () => controlFromInput(fromSlider, fromInput, toInput, toSlider);
    toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);
}

