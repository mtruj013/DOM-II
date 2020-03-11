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



//keydown



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


//drag/drop



//load
window.addEventListener('load', (event) =>{
    logo.textContent = '(Herbie) Fully Loaded';
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

//resize
const resizeHeader = document.querySelectorAll('h2');
console.log(resizeHeader);

window.onresize = resizeHeader.forEach(element => {
    element.textContent = 'Resized!';
});

// function windowResize (resizeHeader){
//     resizeHeader.forEach(element => {
//         element.textContent = 'Resized!';
//     });


// }
// resizeHeader.forEach(element => {
//         element.textContent = 'Resized!';
//     });


// function resized (resizeHeader){
//     for(let i =0; i < resizeHeader.length; i++){
//         resizeHeader[i].textContent = 'resized!';
//     }
// }
// window.addEventListener('resize', resized);