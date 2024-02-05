const btn = document.querySelector("button");
const popUp = document.querySelector(".pop-up");
const numbers = document.querySelectorAll("span");
const firstDiv = document.querySelector(".first-div");
const secondDiv = document.querySelector(".second-div");
const selectedElement = document.querySelector(".selected");
let numberSelected = null;

// Adding event listener
// .Classlist is used to give a class to an element

btn.addEventListener("click", () => {
  if (numberSelected === null) {
    popUp.classList.add("active");
    setTimeout(() => {
      popUp.classList.remove("active");
    }, 2000);
  } else {
    selectedElement.textContent = `You selected ${numberSelected} out of 5`;
    firstDiv.classList.remove("d-flex");
    firstDiv.classList.add("d-none");
    secondDiv.classList.remove("d-none");
    secondDiv.classList.add("d-flex");
  }
});

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    numbers.forEach((n) => {
      n.classList.remove("active");
    });
    number.classList.add("active");
    numberSelected = number.textContent;
});
});
