//console.log(document.body)
const burger = document.querySelector('.burger');
const logo = document.querySelectorAll('#logo img');
const links = document.querySelector('.links');
burger.addEventListener('click', ()=>{
    burger.classList.toggle('active')
    logo[0].classList.toggle('hide_logo');
    logo[1].classList.toggle('visible_logo');
    links.classList.toggle('drop-menu');
    links.classList.toggle('show-menu');
    document.body.classList.toggle('hideScrollBar')
})