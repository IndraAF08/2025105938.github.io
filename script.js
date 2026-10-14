/* FLIP CARD */

const card = document.getElementById("card");

const flipBtn = document.getElementById("flipBtn");

const backBtn = document.getElementById("backBtn");

flipBtn.addEventListener("click", function(){

    card.classList.add("flip");

});

backBtn.addEventListener("click", function(){

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

const typing = document.getElementById("typing");

function typeEffect(){

    const currentWord = words[wordIndex];

    if(deleting){

        typing.textContent =
        currentWord.substring(0, charIndex--);

    }else{

        typing.textContent =
        currentWord.substring(0, charIndex++);

    }

    let speed = deleting ? 60 : 100;

    if(charIndex === currentWord.length + 1){

        deleting = true;
        speed = 1200;
    }

    if(deleting && charIndex === 0){

        deleting = false;

        wordIndex =
        (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();
