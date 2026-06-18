//script for scenario 1
let b1 = document.querySelector("#b1");
let b2 = document.querySelector("#b2");
let b3 = document.querySelector("#b3");
let b4 = document.querySelector("#b4");
let s = document.querySelector("#story");
let bg = document.querySelector("#background");

//run off in different directions
b1.addEventListener("click", function () {
    bg.className = "page page-2_1";
    s.innerHTML = "You've been separated from the group for a few hours, but you find a cool bird that starts to follow you."
    b1.innerHTML = "1. Start chirping at it to try to learn its language";
    b2.innerHTML = "2. Try to k*ll it and eat it because you're getting hangry";
    b3.innerHTML = "3. Run after it and follow it";
    b4.innerHTML = "4. Ignore it";

    b1.addEventListener("click", function () {
        bg.className = "page page-3_1";
        s.innerHTML = "You've been separated from the group for a few hours, but you find a cool bird that starts to follow you."
        b1.innerHTML = "1. Start chirping at it to try to learn its language";
        b2.innerHTML = "2. Try to k*ll it and eat it because you're getting hangry";
        b3.innerHTML = "3. Run after it and follow it";
        b4.innerHTML = "4. Ignore it";


    })

})

//everyone look for water
b2.addEventListener("click", function(){
    bg.className = "page page-2_1";
    s.innerHTML = "You've been separated from the group for a few hours, but you find a cool bird that starts to follow you."
    b1.innerHTML = "1. Start chirping at it to try to learn its language";
    b2.innerHTML = "2. Try to k*ll it and eat it because you're getting hangry";
    b3.innerHTML = "3. Run after it and follow it";
    b4.innerHTML = "4. Ignore it";

    
    
})

