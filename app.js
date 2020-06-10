const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
let btn = document.getElementById("btn");
let color = document.querySelector(".color");

btn.addEventListener('click', function() {
    let randomNumber = 2;
    document.body.style.borderBlockEndColor = colors[randomNumber];

});