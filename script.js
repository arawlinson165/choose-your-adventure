//script for scenario 1
let scoreDisp = document.querySelector("#points");
let points = Number(localStorage.getItem("points"));
if (points == null) points = 0;


let pos = document.querySelector("#pos");
let neg = document.querySelector("#neg");

let pos1 = document.querySelector("#pos1");
let neg1 = document.querySelector("#neg1");

//give points-giving buttons an id so js can find them


//run off in different directions

if (pos !== null) {
    pos.addEventListener("click", function (event) {
        event.preventDefault();
        points += 1;
        localStorage.setItem("points", points);
        scoreDisp.innerHTML = points + " reputation score";
        console.log(points);
        window.location.href = pos.href;
    })
}


if (neg !== null) {
    neg.addEventListener("click", function (event) {
        event.preventDefault();
        points -= 1;
        localStorage.setItem("points", points);
        scoreDisp.innerHTML = points + " reputation score";
        window.location.href = neg.href;
    })
}


if (pos1 !== null) {
    pos1.addEventListener("click", function (event) {
        event.preventDefault();
        points += 1;

        localStorage.setItem("points", points);
        scoreDisp.innerHTML = points + " reputation score";
        console.log(points);
        window.location.href = pos1.href;
    })
}


if (neg1 !== null) {
    neg1.addEventListener("click", function (event) {
        event.preventDefault();
        points -= 1;

        localStorage.setItem("points", points);
        scoreDisp.innerHTML = points + " reputation score";
        window.location.href = neg1.href;
    })
}

