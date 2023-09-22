




















let prev = document.querySelector('.offer__slider-prev')
let next = document.querySelector('.offer__slider-next')
let slides = document.querySelectorAll('.offer__slide')

let slideIndex = 0

function slideShow(n) {

    if(n > slides.length - 1) {
        slideIndex = 0
    }

    if(n < 0) {
        slideIndex = slides.length - 1
    }

    slides.forEach(slide => slide.classList.add('fade','hide'))
    slides[slideIndex].classList.remove('hide')
}

slideShow(slideIndex)

next.onclick = () => {
    slideIndex++
    slideShow(slideIndex)
}

prev.onclick = () => {
    slideIndex--
    slideShow(slideIndex)
}

let spans = document.querySelectorAll('.tabheader__item')
let img = document.querySelector('.img')

spans.forEach(div => {
    div.onclick = () => {
        let click = div.getAttribute('.tabheader__item')
        if(click === "премиум") {
            img.src = "Food_dist/img/tabs/hamburger.jpg"
        }
    }
})







let timer = document.getElementById('seconds');
let startBtn = document.getElementById('startBtn');

let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

function updateTime() {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes === 60) {
    hours++;
    minutes = 0;
  }
  timer.textContent = `${seconds.toString().padStart(2, '2')}`;



  
}

startBtn.addEventListener('click', () => {
  interval = setInterval(updateTime, 1000);
  startBtn.disabled = true;
 
});






let modal = document.querySelector(".modal");
let btns = document.querySelectorAll(".btn");
let modalClose = document.querySelector(".modal__close");
let inps = document.querySelectorAll("input");

let patterns = {
  name: /^[a-z ,.'-]+$/i,
  phone:
    /^\+998([- ])?(90|91|93|94|95|98|99|33|97|71)([- ])?(\d{3})([- ])?(\d{2})([- ])?(\d{2})$/g,
};

btns.forEach((btn) => {
  btn.onclick = () => {
    modal.style.display = "block"; 
  };
  modalClose.onclick = () => {
    modal.style.display = "none";
  };
});

inps.forEach((inp) => {
  inp.onkeyup = () => {
    if (patterns[inp.name].test(inp.value)) {
      inp.classList.remove("error-field");
      inp.classList.remove("required");
    } else {
      inp.classList.add("error-field");
      inp.classList.add("required");
    }
  };
});
let tabcontents = document.querySelectorAll('.tabcontent')
let tabButtons = document.querySelectorAll('.tabheader__item')
tabcontents.forEach(item => item.classList.add('fade','hide'))

 


 
      
        tabcontents[0].classList.remove('hide')
    
let prevOpened = 0


tabButtons.forEach((btn,index) => {
    btn.onclick = () => {
        tabcontents[prevOpened].classList.add('hide')
        tabcontents[index].classList.remove('hide')



        tabButtons[prevOpened].classList.remove('tabheader__item_active')

                 btn.classList.add('tabheader__item_active')

                   prevOpened = index
    }
} )


let genederBtns = document.querySelectorAll('#gender .calculating__choose-item')
let activeBtns = document.querySelectorAll(' .calculating__choose_big .calculating__choose-item')

genederBtns.forEach(btn => {

    btn.onclick = () => {

        genederBtns.forEach(el => el.classList.remove('calculating__choose-item_active'))
        
         btn.classList.add('calculating__choose-item_active')


    }
})


activeBtns.forEach(btn => {

    btn.onclick = () => {


          activeBtns.forEach(el => el.classList.remove('calculating__choose-item_active'))
        
         btn.classList.add('calculating__choose-item_active')


    }
})






































