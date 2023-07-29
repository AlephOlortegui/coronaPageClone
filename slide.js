const homeslider_bg = document.getElementById('homeslider_bg');
const slide_logo = document.getElementById('slide_logo');
const slide_title = document.getElementById('slide_title');
const slide_btn = document.getElementById('slide_btn');

const control = document.querySelectorAll('.control li');
let x = -1;

const data = [
    {
      id: 1,
      bg: "./img/bg1.jpg",
      img_src: "./img/logo_casa_corona.png",
      h1_txt: "DISFRUTA CON TUS AMIGOS DE EXPERIENCIAS ÚNICAS ¡Y VÍVELAS DESDE TU CASA!",
      btn_txt: "DESCÚBRELA"
    },
    {
      id: 2,
      bg: "./img/bg2.jpg",
      img_src: "./img/protect-paradise-logo-parley.png",
      h1_txt: "¿QUÉ SUCEDE CON ESA BOTELLA DE PLÁSTICO QUE UN DÍA NO RECICLASTE Y ACABÓ EN EL MAR?",
      btn_txt: "DESCÚBRELO"
    }
]

function updateCircleIndicator(x){
    control.forEach(n => {
        n.classList.remove('white-bg');
    });
    control[x].classList.add('white-bg');
}

function runAnimations() {
    slide_logo.classList.remove('run-animation');
    slide_title.classList.remove('run-animation');
    slide_btn.classList.remove('run-animation');

    /*https://medium.com/better-programming/how-to-restart-a-css-animation-with-javascript-and-what-is-the-dom-reflow-a86e8b6df00f */
    // void element.offsetWidth;
    void slide_logo.offsetWidth;
    void slide_title.offsetWidth;
    void slide_btn.offsetWidth;

    slide_logo.classList.add('run-animation');
    slide_title.classList.add('run-animation');
    slide_btn.classList.add('run-animation');   
}

function loadContent(i) {
    x = i;
    homeslider_bg.style.backgroundImage = `url(${data[x].bg})`; 
    slide_logo.setAttribute('src', `${data[x].img_src}`);
    slide_title.innerText =  `${data[x].h1_txt}` ;
    slide_btn.innerText = `${data[x].btn_txt}`;
    runAnimations();
    updateCircleIndicator(x)
}

control.forEach((element,i) => {
    element.addEventListener('click', ()=>{
        loadContent(i);
        resetTimer();
    })
});

function autoPlay(){
    x++;
    if(x>1){x=0}
    console.log(x);
    loadContent(x);
}


let timer = setInterval(autoPlay, 6000)
        //Para cuando los botones se apreten... 
        function resetTimer(){
            clearInterval(timer);
            timer = setInterval(autoPlay, 4000);
        }

function Initial(){
    setTimeout(autoPlay, 1000);
}
Initial();
