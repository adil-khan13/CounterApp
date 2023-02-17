// function changeHeading() {
//   let element = document.getElementById("heading1");
//   element.innerHTML = "Changed using DOM manipulation";
// }

// let element = document.getAnimations("heading1");

// element.addEventListener("mouseenter", changeHeading);
var count = 0;
document.getElementById("number").innerText = count;

function inc() {
  count++;
  document.getElementById("number").innerText = count;
}
function dec() {
  if (count == 0) {
    count = count;
  } else {
    count--;
  }
  document.getElementById("number").innerText = count;
}
function reset() {
  count = 0;
  document.getElementById("number").innerText = count;
}
