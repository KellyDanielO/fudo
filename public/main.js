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