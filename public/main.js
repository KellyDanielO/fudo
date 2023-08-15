var slide_menu_btn = document.querySelector("#slide_menu_btn");
slide_menu_btn.addEventListener("click", () => {
    let slide_menu = document.querySelector(".slide_menu");
    slide_menu.classList.add("active");
    // console.log('yes');
});

var side_close_btn = document.querySelector("#side_close_btn");
side_close_btn.addEventListener("click", () => {
    let slide_menu = document.querySelector(".slide_menu");
    slide_menu.classList.remove("active");
    // console.log('yes');
});

const next = document.querySelector('.next');
var pizza_cont = document.querySelector('.pizza_cont');
next.addEventListener('click', () => {
    if (window.matchMedia('(min-width: 640px)').matches) {
        pizza_cont.scrollLeft += window.innerWidth * .35;
        // pizza_cont.scrollTo(window.innerWidth / (1 / 3), 0);
    } else {
        pizza_cont.scrollLeft += window.innerWidth * .85;
        // pizza_cont.scrollTo(window.innerWidth, 0);
    }
});

const prev = document.querySelector('.prev');
prev.addEventListener('click', () => {
    if (window.matchMedia('(min-width: 640px)').matches) {
        pizza_cont.scrollLeft -= window.innerWidth * .35;
        // pizza_cont.scrollTo(window.innerWidth / (1 / 3), 0);
    } else {
        pizza_cont.scrollLeft -= window.innerWidth * .85;
        // pizza_cont.scrollTo(window.innerWidth, 0);
    }
});