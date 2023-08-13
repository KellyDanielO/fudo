
var slide_menu_btn = document.getElementById("slide_menu_btn");
slide_menu_btn.addEventListener("click", () => {
    let slide_menu = document.querySelector(".slide_menu");
    slide_menu.classList.add("active");
    console.log('yes');
});