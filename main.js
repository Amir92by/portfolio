
// 0. loop: auto input =>typed
var typed = new Typed('.auto-input', {

    strings : [
                "Amir Ben Younes", 
                "Developer Web",
                 "Designer CAO",
                 "Freelancer"
                ],

    typeSpeed: 100,
                backSpeed: 100,
                loop: true
  });



//1. dark -mode
const icon = document.getElementById('icon')

icon.onclick = function () {
    document.body.classList.toggle('dark-theme')

    if (document.body.classList.contains('dark-theme')) {
        icon.setAttribute("class",'fal fa-sun')

    } else {
        icon.setAttribute("class",'fal fa-moon')
        
    }
}

//2.navbar toggle
const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')
const navLink = document.querySelectorAll('.nav-link')
 

hamburger.addEventListener('click', () => { 
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
 })
 navLink.forEach(l=> l.addEventListener('click', () => { 
    hamburger.classList.remove('active')
    navMenu.classList.remove('active')
 }))


 //3. scroll top
 //project: scroll top

const up =  document.querySelector('.top')
// console.log(up)

window.onscroll = function(){
    if(scrollY >=500){

        up.classList.add('show')
    }else{
        up.classList.remove('show')

    }
}

up.onclick =function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}
    



//

// let slider = tns({
    
//         "autoWidth": true,
//         "items": 3.3,
//         "gutter": 10,
//         "mouseDrag": true,
//         "swipeAngle": false,
//         "container": ".my-slider",
//         "speed": 400
      
// })