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

