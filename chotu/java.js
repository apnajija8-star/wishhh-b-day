/* ===========================================
   messages.js
=========================================== */

/* ===========================================
   Rotating Hero Messages
=========================================== */

const heroMessages = [

    "Happy Birthday, aaalu! 🎉",

    "May your smile never fade. 😊",

    "Thank you for being my love. 💖",

    "Every memory with you is priceless. ✨",

    "May all your dreams come true. 🌸",

    "Keep shining like the brightest moon. ⭐",

    "Life is more beautiful with mee. 💕",

    "Today is all about celebrating YOU! 🎂"

];

/* ===========================================
   Slideshow Data
=========================================== */

const slides = [

    {
        image: "assets/slide-1.jpg",
        title: "Beautiful Memories",
        text: "Every picture tells a story we'll never forget."
    },

    {
        image: "assets/slide-2.jpg",
        title: "Crazy Adventures",
        text: "Thank you for making ordinary days unforgettable."
    },

    {
        image: "assets/slide-3.jpg",
        title: "Smiles Forever",
        text: "Your happiness always makes everyone smile."
    },

    {
        image: "assets/slide-4.jpg",
        title: "Friendship Goals",
        text: "Friends like you are truly one in a million."
    },

    {
        image: "assets/slide-5.jpg",
        title: "New Memories Ahead",
        text: "Cheers to many more birthdays together!"
    }

];

/* ===========================================
   Surprise Messages
=========================================== */

const surpriseMessages = [

    "🎂 Eat lots of cake today!",

    "🌸 Keep smiling every day!",

    "💖 Never stop being yourself!",

    "🌈 Your kindness makes the world brighter.",

    "✨ May every wish come true!",

    "🎉 You're awesome just the way you are!",

    "😊 Keep making beautiful memories!",

    "🎁 The best is yet to come!"

];

/* ===========================================
   Floating Emoji List
=========================================== */

const floatingEmojis = [

    "🎈",

    "🎂",

    "🎉",

    "💖",

    "✨",

    "🌸",

    "⭐",

    "🦋",

    "🐱",

    "🎀",

    "💝",

    "🥳",

    "🎊",

    "🌺",

    "🌷"

];

/* ===========================================
   Quotes
=========================================== */

const quotes = [

    "A real partner makes every moment unforgettable.",

    "a right partner make life colorful.",

    "Good lover are life's greatest treasure.",

    "Memories made together last forever.",


    "The best stories begin with you my love."

];

/* ===========================================
   Counter Values
=========================================== */

const counters = {

    memories: 999,

    laughs: 9999,

    lifepartner: 1

};

/* ===========================================
   Wishes
=========================================== */

const wishes = [

    "May happiness always find you.",

    "May every dream become reality.",

    "Stay healthy and keep smiling.",

    "May success follow you everywhere.",

    "Enjoy every little moment of life.",

    "Never stop believing in yourself."

];

/* ===========================================
   Loader Messages
=========================================== */

const loaderMessages = [

    "Wrapping your surprise... 🎁",

    "Decorating with happiness... ✨",

    "Adding lots of smiles... 😊",

    "Almost Ready... 💖"

];

/* ===========================================
   Confetti Colors
=========================================== */

const confettiColors = [

    "#FF4D9D",

    "#FF80BF",

    "#FFD54F",

    "#64B5F6",

    "#7C4DFF",

    "#66BB6A",

    "#FF7043",

    "#F06292"

];

/* ===========================================
   Balloon Colors
=========================================== */

const balloonColors = [

    "#FF4D9D",

    "#FF80AB",

    "#FFD54F",

    "#4FC3F7",

    "#81C784",

    "#BA68C8"

];

/* ===========================================
   Music Playlist
   (Add more songs if needed)
=========================================== */

const playlist = [

    "assets/birthday.mp3"

];

/* ===========================================
   Export (Optional)
=========================================== */

window.heroMessages = heroMessages;
window.slides = slides;
window.surpriseMessages = surpriseMessages;
window.floatingEmojis = floatingEmojis;
window.quotes = quotes;
window.counters = counters;
window.wishes = wishes;
window.loaderMessages = loaderMessages;
window.confettiColors = confettiColors;
window.balloonColors = balloonColors;
window.playlist = playlist;
/* ===========================================
   main.js
=========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =======================================
       Elements
    ======================================= */

    const loader = document.getElementById("loader");
    const giftScreen = document.getElementById("giftScreen");
    const birthdayPage = document.getElementById("birthdayPage");

    const openGiftBtn = document.getElementById("openGiftBtn");
    const surpriseBtn = document.getElementById("surpriseBtn");

    const musicBtn = document.getElementById("musicBtn");
    const music = document.getElementById("birthdayMusic");

    const rotatingMessage =
        document.getElementById("rotatingMessage");

    const scrollBtn =
        document.getElementById("scrollTopBtn");

    const memoryCounter =
        document.getElementById("memoryCounter");

    const laughCounter =
        document.getElementById("laughCounter");

    const friendCounter =
        document.getElementById("friendCounter");

    /* =======================================
       Loader
    ======================================= */

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            }, 600);

        }, 1800);

    });

    /* =======================================
       Gift Open
    ======================================= */

    openGiftBtn.addEventListener("click", () => {

        giftScreen.classList.add("hidden");

        birthdayPage.classList.remove("hidden");

        if (typeof startConfetti === "function") {

            startConfetti();

        }

        if (typeof createFloatingEmojis === "function") {

            createFloatingEmojis();

        }

        music.play().catch(() => {});

        musicBtn.innerHTML =
            '<i class="fa-solid fa-volume-high"></i>';

        birthdayPage.scrollIntoView({

            behavior: "smooth"

        });

    });

    /* =======================================
       Music
    ======================================= */

    let musicPlaying = true;

    musicBtn.addEventListener("click", () => {

        if (music.paused) {

            music.play();

            musicBtn.innerHTML =
                '<i class="fa-solid fa-volume-high"></i>';

            musicPlaying = true;

        } else {

            music.pause();

            musicBtn.innerHTML =
                '<i class="fa-solid fa-volume-xmark"></i>';

            musicPlaying = false;

        }

    });

    /* =======================================
       Rotating Messages
    ======================================= */

    let msgIndex = 0;

    function rotateMessage() {

        msgIndex++;

        if (msgIndex >= heroMessages.length) {

            msgIndex = 0;

        }

        rotatingMessage.style.opacity = 0;

        setTimeout(() => {

            rotatingMessage.innerText =
                heroMessages[msgIndex];

            rotatingMessage.style.opacity = 1;

        }, 250);

    }

    setInterval(rotateMessage, 3500);

    /* =======================================
       Counter Animation
    ======================================= */

    function animateCounter(el, target) {

        let value = 0;

        const speed = Math.ceil(target / 100);

        const timer = setInterval(() => {

            value += speed;

            if (value >= target) {

                value = target;

                clearInterval(timer);

            }

            el.innerText = value;

        }, 20);

    }

    animateCounter(memoryCounter, counters.memories);

    animateCounter(laughCounter, counters.laughs);

    friendCounter.innerText = counters.friendship;

    /* =======================================
       Surprise Button
    ======================================= */

    surpriseBtn.addEventListener("click", () => {

        const random = Math.floor(

            Math.random() *

            surpriseMessages.length

        );

        alert(surpriseMessages[random]);

        if (typeof startConfetti === "function") {

            startConfetti();

        }

    });

    /* =======================================
       Scroll Button
    ======================================= */

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            scrollBtn.style.display = "flex";

        } else {

            scrollBtn.style.display = "none";

        }

    });

    scrollBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /* =======================================
       Quote Changer
    ======================================= */

    const quoteText =
        document.querySelector(".quote-box p");

    let quoteIndex = 0;

    setInterval(() => {

        quoteIndex++;

        if (quoteIndex >= quotes.length) {

            quoteIndex = 0;

        }

        quoteText.style.opacity = 0;

        setTimeout(() => {

            quoteText.innerText = quotes[quoteIndex];

            quoteText.style.opacity = 1;

        }, 300);

    }, 6000);

    /* =======================================
       Keyboard Shortcuts
    ======================================= */

    document.addEventListener("keydown", (e) => {

        if (e.code === "Space") {

            e.preventDefault();

            musicBtn.click();

        }

        if (e.key === "ArrowUp") {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }

    });

    /* =======================================
       Greeting
    ======================================= */

    console.log(

        "🎉 Happy Birthday Website Loaded Successfully!"

    );

});
/* ===========================================
   slideshow.js
=========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =======================================
       Elements
    ======================================= */

    const slides =
        document.querySelectorAll(".slide");

    const dots =
        document.querySelectorAll(".dot");

    const nextBtn =
        document.getElementById("nextSlide");

    const prevBtn =
        document.getElementById("prevSlide");

    const playPauseBtn =
        document.getElementById("playPause");

    const playPauseIcon =
        playPauseBtn.querySelector("i");

    /* =======================================
       Variables
    ======================================= */

    let current = 0;

    let autoPlay = true;

    let interval = null;

    const delay = 4500;

    /* =======================================
       Show Slide
    ======================================= */

    function showSlide(index){

        if(index >= slides.length){

            current = 0;

        }

        else if(index < 0){

            current = slides.length - 1;

        }

        else{

            current = index;

        }

        slides.forEach((slide)=>{

            slide.classList.remove("active");

        });

        dots.forEach((dot)=>{

            dot.classList.remove("active");

        });

        slides[current].classList.add("active");

        dots[current].classList.add("active");

    }

    /* =======================================
       Next
    ======================================= */

    function nextSlide(){

        showSlide(current + 1);

    }

    /* =======================================
       Previous
    ======================================= */

    function prevSlide(){

        showSlide(current - 1);

    }

    /* =======================================
       Auto Play
    ======================================= */

    function startAuto(){

        stopAuto();

        interval = setInterval(()=>{

            nextSlide();

        },delay);

    }

    function stopAuto(){

        clearInterval(interval);

    }

    /* =======================================
       Buttons
    ======================================= */

    nextBtn.addEventListener("click",()=>{

        nextSlide();

        if(autoPlay){

            startAuto();

        }

    });

    prevBtn.addEventListener("click",()=>{

        prevSlide();

        if(autoPlay){

            startAuto();

        }

    });

    /* =======================================
       Dots
    ======================================= */

    dots.forEach((dot,index)=>{

        dot.addEventListener("click",()=>{

            showSlide(index);

            if(autoPlay){

                startAuto();

            }

        });

    });

    /* =======================================
       Play Pause
    ======================================= */

    playPauseBtn.addEventListener("click",()=>{

        autoPlay = !autoPlay;

        if(autoPlay){

            startAuto();

            playPauseIcon.className =
            "fa-solid fa-pause";

        }

        else{

            stopAuto();

            playPauseIcon.className =
            "fa-solid fa-play";

        }

    });

    /* =======================================
       Keyboard
    ======================================= */

    document.addEventListener("keydown",(e)=>{

        if(e.key==="ArrowRight"){

            nextSlide();

        }

        if(e.key==="ArrowLeft"){

            prevSlide();

        }

    });

    /* =======================================
       Swipe Support
    ======================================= */

    let startX = 0;

    let endX = 0;

    const slider =
        document.querySelector(".slideshow");

    slider.addEventListener("touchstart",(e)=>{

        startX = e.touches[0].clientX;

    });

    slider.addEventListener("touchmove",(e)=>{

        endX = e.touches[0].clientX;

    });

    slider.addEventListener("touchend",()=>{

        if(startX - endX > 50){

            nextSlide();

        }

        if(endX - startX > 50){

            prevSlide();

        }

    });

    /* =======================================
       Pause On Hover
    ======================================= */

    slider.addEventListener("mouseenter",()=>{

        if(autoPlay){

            stopAuto();

        }

    });

    slider.addEventListener("mouseleave",()=>{

        if(autoPlay){

            startAuto();

        }

    });

    /* =======================================
       Image Preload
    ======================================= */

    slides.forEach((slide)=>{

        const img =
        slide.querySelector("img");

        if(img){

            const preload =
            new Image();

            preload.src = img.src;

        }

    });

    /* =======================================
       Initialize
    ======================================= */

    showSlide(0);

    startAuto();

});