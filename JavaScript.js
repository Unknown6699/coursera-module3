const location_1 = document.querySelector("#menu")
const location_2 = document.querySelectorAll(".block_with_text")
const location_3 = document.querySelector("#button_menu")
const location_4 = document.querySelector("#lists_menu")
const location_5 = document.querySelectorAll(".div_menu")
let k = 0
let scroll_window_1 = window.pageYOffset
window.addEventListener("scroll", function() {let scroll_window_2 = window.pageYOffset; k = 0
    if (scroll_window_1 > scroll_window_2) {location_1.style.top = "0px"; location_4.style.display = "none"} 
    else {location_1.style.top = "-61px"; location_4.style.display = "none"}
    scroll_window_1 = scroll_window_2})

for (let i = 0; i < 3; i++) {
    location_2 [i].addEventListener("click", function() {location_2 [i].style.transform = "scale(1.08)"; location_4.style.display = "none"})
    location_2 [i].addEventListener("mouseout", function() {location_2 [i].style.transform = "scale(1)"})}

location_3.addEventListener("click", function() {location_4.style.display = "block"; k++
    if (k === 2) {location_4.style.display = "none"; k = 0}})
for (let j = 0; j < 3; j++) {location_5 [j].addEventListener("click", function() {location_4.style.display = "none"})}
