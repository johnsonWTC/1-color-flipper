const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
let btn = document.getElementById("btn");
let color = document.querySelector(".color");

btn.addEventListener('click', function() {
    let randomNumber = getRamndomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.innerHTML = colors[randomNumber];
});

function getRamndomNumber() {
    return Math.floor(Math.random() * colors.length);
}