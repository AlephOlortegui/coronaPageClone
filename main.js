const burger = document.querySelector('.burger')
const links = document.querySelector('.links')
const logos = document.querySelectorAll('.logo')

burger.addEventListener('click', ()=>{
  burger.classList.toggle('active')
  links.classList.toggle('active')
  logos[0].classList.toggle('hide');
  logos[1].classList.toggle('visible')
  //do not scroll
  document.body.classList.toggle('hideScrollBar')
  //Bug
  window.scrollTo(0,0)
})

/* **************** Carousel ***************** */
const imgs = document.querySelectorAll('.carousel-img')
const subImgs = document.querySelectorAll('.carousel-content img')
const subH1 = document.querySelectorAll('.carousel-content h1')
const subBtn = document.querySelectorAll('.carousel-content .cta.btn')

let carouselIndex = 0;
let timer;

function toggleBg() {
  imgs.forEach(i => i.classList.remove('visible'))
  imgs[carouselIndex].classList.add('visible')
}

function runCarouselContent(arr) {
  const currElement = arr[carouselIndex]
  const nextIndex = (carouselIndex + 1) % arr.length;
  const nextElement = arr[nextIndex]

  //Run animations
  currElement.classList.remove('run-content')
  currElement.classList.add('run-content')

  //Golden trick
  nextElement.classList.remove('run-content')
}

function runCarousel() {
  carouselIndex++;
  if(carouselIndex>1) carouselIndex = 0;
  toggleBg()
  runCarouselContent(subImgs)
  runCarouselContent(subH1)
  runCarouselContent(subBtn)
}

function RunPage() {timer = setInterval(runCarousel, 3000);}

//For testing purposes
window.addEventListener('DOMContentLoaded', () => {
  RunPage()
})