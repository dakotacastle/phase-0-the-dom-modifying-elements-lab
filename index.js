// Write your code here!
const b = document.querySelector("main#main");
b.parentElement.removeChild(b);

const newHeader = document.createElement("h1");
newHeader.id = "victory";
document.body.appendChild(newHeader);
newHeader.textContent =  "Dakota is the champion";
// const victory = document.getElementById("victory");
// victory.innerHTML = "Dakota is the champion";
