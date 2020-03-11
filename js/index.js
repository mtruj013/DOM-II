//mouseover
let navLinks = document.querySelectorAll('a');

navLinks[0].addEventListener("mouseover", function(event){
    event.target.textContent = 'Audi A4';
})
navLinks[1].addEventListener("mouseover", function(event){
    event.target.textContent = 'BMW 3';
})
navLinks[2].addEventListener("mouseover", function(event){
    event.target.textContent = 'Cadillac Fleetwood Eldorado';
})
navLinks[3].addEventListener("mouseover", function(event){
    event.target.textContent = 'Dodge Charger';
})



//wheel
function zoom(event){
    event.preventDefault();

    scale += event.deltaY * -0.01;

    scale = Math.min(Math.max(.125, scale), 4);

    headerImg.style.transform = `scale(${scale})`;
}

let scale =.5;
const headerImg = document.querySelector('.intro img');
headerImg.addEventListener('wheel', zoom);



//load
window.addEventListener('load', (event) =>{
    logo.textContent = 'Load Complete';
})
let logo = document.querySelector('.nav-container h1');


//focus 
let newForm = document.createElement('input');
newForm.setAttribute('type', "text");
document.querySelector('.content-section .text-content').appendChild(newForm);

const focusForm = document.querySelector('input[type = "text"]');
focusForm.addEventListener('focus', (event) => {
    event.target.style.background = 'red';
})







//double click + single click + mouse enter + mouse leave
const imgSelect = document.querySelectorAll('img');
imgSelect[0].addEventListener('dblclick', function (){
    imgSelect[0].setAttribute('src', 'img/herbie-fully-loaded.png')
});
imgSelect[1].addEventListener('click', event =>{
    imgSelect[1].setAttribute('src', 'img/herbie-1.jpg')
});
imgSelect[2].addEventListener('mouseenter', e =>{
    imgSelect[2].setAttribute('src', 'img/herbie-2.jpg')
});
imgSelect[3].addEventListener('mouseleave', e =>{
    imgSelect[3].setAttribute('src', 'img/herbie-3.jpg')
});


//mouseout

const textP = document.querySelectorAll('p');

textP[0].addEventListener("mouseout", function(event){
    event.target.style.color = "pink";
})


//keydown
document.addEventListener('keydown', changeColor);

function changeColor(){
    textP[1].style.color = 'red';
}