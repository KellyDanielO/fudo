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
    pizza_cont.scrollTo(window.innerWidth / (1 / 3), 0);
});
const prev = document.querySelector('.prev');
prev.addEventListener('click', () => {
    pizza_cont.scrollTo(-window.innerWidth / (1 / 3), 0);
});