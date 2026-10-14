/* FLIP CARD */

const card =
document.getElementById("card");

document
.getElementById("flipBtn")
.addEventListener("click",()=>{

    card.classList.add("flip");

});

document
.getElementById("backBtn")
.addEventListener("click",()=>{

    card.classList.remove("flip");

});


/* TYPING EFFECT */

const words = [

    "Web Developer",
    "UI Designer",
    "Information Systems Student"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing =
document.getElementById("typing");

function typeEffect(){

    const current =
    words[wordIndex];

    if(deleting){

        typing.textContent =
        current.substring(0,charIndex--);

    }else{

        typing.textContent =
        current.substring(0,charIndex++);

    }

    let speed =
    deleting ? 60 : 100;

    if(charIndex === current.length + 1){

        deleting = true;
        speed = 1400;

    }

    if(deleting && charIndex === 0){

        deleting = false;

        wordIndex =
        (wordIndex + 1) %
        words.length;

    }

    setTimeout(typeEffect,speed);
}

typeEffect();