import loadCss from "./loadCss.mjs";

loadCss("/src/styles/Card.module.css")
  .then(() => console.log("✅ Estilos aplicados"))
  .catch((err) => console.error("❌ No se pudo cargar el CSS:", err));

export async function fetchItems() {
  try {
    const url =
      "https://v2.jokeapi.dev/joke/Programming" +
      "?lang=es" +
      "&blacklistFlags=nsfw,religious,political,racist,sexist,explicit" +
      "&amount=3";
    const res = await fetch(url);
    const data = await res.json();
    return data.jokes;
  } catch (err) {
    console.error("Error:", error);
  }
  // finally {
  //   // console.info("Se ha terminado la petición de datos.")
  // }
}

export default function Card(item) {
  /* Equivale a: */
  // const category = item.category;
  // ...
  // const joke = item.joke
  //
  const { category, type, setup, delivery, joke } = item;

  const div = document.createElement("div");
  const p = document.createElement("p");
  const container = document.querySelector("#app"); // div#app
  const span = document.createElement("span");

  switch (type) {
    case "single":
      p.textContent = joke; // texto de la broma
      div.appendChild(p);
      // div > p
      break;
    case "twopart":
      const h2 = document.createElement("h2");
      h2.textContent = setup; // texto 1
      p.textContent = delivery; // texto 2
      div.appendChild(h2);
      div.appendChild(p);
      // div > h2 + p
      break;
  }

  span.textContent = category;
  div.appendChild(span); // div => h2 y/o p + span

  div.className = "card";
  container.appendChild(div);
}
