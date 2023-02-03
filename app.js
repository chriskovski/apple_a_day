var myButton = document.getElementById("myButton");
var appendDiv = document.getElementById("appendable");

var p = document.createElement("p");
var applesEaten = 0;
var text = document.createTextNode(`You ate ${applesEaten} apples!`);

myButton.addEventListener("click", function() {
    applesEaten++;
})


p.appendChild(text);
appendDiv.appendChild(p);

