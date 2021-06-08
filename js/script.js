const number = document.querySelector(".counter");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");

let counter = 0;

increase.addEventListener("click", () => {
  counter++;
  number.innerHTML = `<h1>${counter}</h1>`;

  if (counter > 0) {
    number.style.color = "green";
  }
  if (counter == 0) {
    number.style.color = "hsl(209, 61%, 16%)";
  }
});

decrease.addEventListener("click", () => {
  counter--;
  number.innerHTML = `<h1>${counter}</h1>`;

  if (counter < 0) {
    number.style.color = "red";
  }
  if (counter == 0) {
    number.style.color = "hsl(209, 61%, 16%)";
  }
});

reset.addEventListener("click", () => {
  counter = 0;
  number.innerHTML = `<h1>${counter}</h1>`;
  number.style.color = "hsl(209, 61%, 16%)";
});
