//script for scenario 1
let scoreDisp = document.querySelector("#points");
let points = 0;
let pos = document.querySelector("#pos");
let neg = document.querySelector("#neg");

let pos1 = document.querySelector("#pos1");
let neg1 = document.querySelector("#neg1");

//give points-giving buttons an id so js can find them


//run off in different directions

pos.addEventListener("click", function(event){
    points += 1;
    scoreDisp.innerHTML = points + " reputation score";
    console.log(points);
})

neg.addEventListener("click", function(event){
    points -= 1;
    scoreDisp.innerHTML = points + " reputation score";
})

pos1.addEventListener("click", function(event){
    points += 1;
    scoreDisp.innerHTML = points + " reputation score";
    console.log(points);
})

neg1.addEventListener("click", function(event){
    points -= 1;
    scoreDisp.innerHTML = points + " reputation score";
})
