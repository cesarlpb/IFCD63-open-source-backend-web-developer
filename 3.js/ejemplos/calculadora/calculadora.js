import sumar from "./sumar.mjs";

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const a = form.querySelector("#a").valueAsNumber; // valor como Number
  const b = form.querySelector("#b").valueAsNumber; // valor como Number
  console.log(a, b)
  const suma = sumar(a, b);

  const el = form.querySelector("#suma");
  el.textContent = suma;
})
