let nav= document.querySelector('#nav')
let navButton = document.querySelector('#nav-button')
let navImg = document.querySelector('#nav-img');

navButton.addEventListener('click', function(){
    if(nav.classList.toggle('open')){
        navImg.src = "img/icons-mobile/nav-clouse.svg"
    }else{
        navImg.src = "img/icons-mobile/nav-open.svg"
    }
})

let headerImg = document.querySelector('#header-img');

let img = ["img/header/BSPP2266 (1).png", "img/header/BSPP2266 (2).png", "img/header/BSPP2266 (3).png", "img/header/BSPP2266 (4).png"]


img.forEach((elem, i) => {
    setTimeout(() => {
      headerImg.src = elem
    }, (i + 1) * 5000)
  })