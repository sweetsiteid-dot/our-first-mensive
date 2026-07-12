const openBtn = document.getElementById("openBtn");
const cover = document.getElementById("cover");
const mainContent = document.getElementById("mainContent");

const bgMusic = document.getElementById("bgMusic");

const envelope = document.getElementById("envelope");
const letterSection = document.getElementById("letterSection");

/* OPEN GIFT */

openBtn.addEventListener("click", () => {

    bgMusic.play();

    cover.style.opacity = "0";

    setTimeout(() => {

        cover.style.display = "none";
        mainContent.style.display = "block";

        startFalling();

    }, 1000);

});

/* AUTO SLIDER */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide=>{
        slide.classList.remove("active");
    });

    dots.forEach(dot=>{
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");

}

setInterval(()=>{

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);

},3000);

/* ENVELOPE */

envelope.addEventListener("click",()=>{

    envelope.classList.add("open");

    setTimeout(()=>{

        letterSection.style.display = "block";

        letterSection.scrollIntoView({
            behavior:"smooth"
        });

    },700);

});

/* FALLING HEARTS & STARS */

function createFallingItem(){

    const item = document.createElement("div");

    const icons = [
        "🤍",
        "✨",
        "⭐",
        "♡",
        "✦"
    ];

    item.innerHTML =
        icons[Math.floor(Math.random()*icons.length)];

    item.classList.add("falling");

    item.style.left =
        Math.random()*100 + "vw";

    item.style.fontSize =
        (Math.random()*15 + 15) + "px";

    item.style.animationDuration =
        (Math.random()*4 + 4) + "s";

    document.body.appendChild(item);

    setTimeout(()=>{

        item.remove();

    },8000);

}

function startFalling(){

    setInterval(()=>{

        createFallingItem();

    },500);

}

/* INIT */

showSlide(0);
