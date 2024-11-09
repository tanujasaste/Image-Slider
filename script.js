let scrollcontroller = document.querySelector(".gallery");
let backbtn = document.getElementById("backbtn");
let nextbtn = document.getElementById("nextbtn");

scrollcontroller.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollcontroller.scrollLeft += evt.deltaY;
    scrollcontroller.style.scrollBehavior = "auto";

})

nextbtn.addEventListener("click", () => {
    scrollcontroller.style.scrollBehavior = "smooth";
    scrollcontroller.scrollLeft += 900;
})

backbtn.addEventListener("click", () => {
    scrollcontroller.style.scrollBehavior = "smooth";
    scrollcontroller.scrollLeft -= 900;
})