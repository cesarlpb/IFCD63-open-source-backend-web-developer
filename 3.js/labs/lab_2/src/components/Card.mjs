/**
 * Carga un archivo CSS (mis-estilos.css) y lo aplica al documento.
 * Devuelve una promesa que resuelve con el objeto CSSStyleSheet.
 */
export async function loadCss(url) {
  // 1. Descargamos el archivo como texto
  const cssText = await fetch(url, { credentials: "same-origin" }).then((r) => {
    if (!r.ok) throw new Error(`${r.status} ${r.statusText}`);
    return r.text();
  });

  // 2. Intentamos usar la API Constructable Stylesheets
  if (
    "adoptedStyleSheets" in Document.prototype &&
    "replaceSync" in CSSStyleSheet.prototype
  ) {
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(cssText);
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
    return sheet; // 🎉 Modern path
  }

  // 3. Fallback: creamos un <style> clásico
  const style = document.createElement("style");
  style.textContent = cssText;
  document.head.appendChild(style);
  return style; // Devuelve un <style>, pero mantiene la promesa
}

// Ejemplo de uso
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
