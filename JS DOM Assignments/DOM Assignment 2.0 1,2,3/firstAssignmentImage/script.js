
/// Adding Li compenenet in the give Ul

const ul = document.querySelector("ul");
const li = document.createElement("li");
li.textContent = "Hire Me";
ul.appendChild(li);


//Editing Placeholder Text 
const input = document.querySelector("input");
input.placeholder = "Serch My Project";

// Changing Image in Hero Section
function changeImage() {
    document.querySelector(".hero-right-section").innerHTML = '<img src="https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg" />';
}

changeImage()


// Adding Button "Support Me"
var div = document.querySelector(".hero-right-section");
var button = document.createElement("button");
button.innerHTML = "Support me";
div.appendChild(button);

