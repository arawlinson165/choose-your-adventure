//script for scenario 1
let points;

//give points-giving buttons an id so js can find them


//run off in different directions
b1.addEventListener("click", function () {
    document.querySelector(".page page-0").style.display = "none";
})

//everyone look for water
b2.addEventListener("click", function () {
    bg.className = "page page-2_2";
    s.innerHTML = "You've been separated from the group for a few hours, but you find a cool bird that starts to follow you."
    b1.innerHTML = "1. Start chirping at it to try to learn its language";
    b2.innerHTML = "2. Try to k*ll it and eat it because you're getting hangry";
    b3.innerHTML = "";
    b4.innerHTML = "4. Ignore it";



})

