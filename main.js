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
//control
const control = document.querySelectorAll('.control li')

let carouselIndex = 0;
let timer;

function toggleBg() {
  imgs.forEach(i => i.classList.remove('visible'))
  imgs[carouselIndex].classList.add('visible')
}

function runCarouselContent(arr, ani) {
  const currElement = arr[carouselIndex]
  const nextIndex = (carouselIndex + 1) % arr.length;
  const nextElement = arr[nextIndex]

  //Run animations
  currElement.classList.remove(ani)
  currElement.classList.add(ani)

  //Golden trick
  nextElement.classList.remove(ani)
}

function runCarousel(i = 99) {
  carouselIndex++;
  if(i !== 99) carouselIndex = i;
  if(carouselIndex>1) carouselIndex = 0;
  toggleBg()
  runCarouselContent(subImgs, 'run-content')
  runCarouselContent(subH1, 'run-content')
  runCarouselContent(subBtn, 'run-content')
  runCarouselContent(control, 'control-bg')
}

control.forEach((li,i)=>{
  li.addEventListener('click', ()=>{
    runCarousel(i)
    resetTimer()
  })
})

function RunPage() {timer = setInterval(runCarousel, 8000);}

//when any dot control is clicked
function resetTimer(){
  clearInterval(timer);
  timer = setInterval(runCarousel, 5000);
}

/* **************** form access ***************** */
const formAccess = document.getElementById('access')
const agePage = document.querySelector('.age-page')
const main = document.querySelector('main')

formAccess.addEventListener('submit', (e)=>{
  e.preventDefault()
  const month = +formAccess.month.value // type String initially but + sign turns it into an integer -- console.log(typeof month)
  const day = +formAccess.day.value
  const year = +formAccess.year.value

  if(!month || !day || !year){
    alert('You must fill all the fields')
    return
  }
  const age = calculateAge(year, month, day)
  if(age < 21){
      alert('You must be 21 or older to access this page.')
  } 
  else{
    agePage.style.display = 'none'
    main.style.display = 'block'
    //initial run
    runCarouselContent(subImgs, 'run-content')
    runCarouselContent(subH1, 'run-content')
    runCarouselContent(subBtn, 'run-content')
    runCarouselContent(control, 'control-bg')
    setTimeout(RunPage, 1500);
  }
})

function calculateAge(year, month, day) {
  const today = new Date() // new Date(year,month,day)
  const birthdate = new Date(year, month - 1, day)

/* Then we need to get our age */
  let age = today.getFullYear() - birthdate.getFullYear();

/* HOWEVER, what if we have not reached our birth-month and birth day */
  const monthDiff = today.getMonth() - birthdate.getMonth();
  if(monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())){
      age--;
  }
  return age
}

//For testing purposes
/* window.addEventListener('DOMContentLoaded', () => {
  RunPage()
}) */