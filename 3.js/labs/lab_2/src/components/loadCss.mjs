/**
 * Carga un archivo CSS (mis-estilos.css) y lo aplica al documento.
 * Devuelve una promesa que resuelve con el objeto CSSStyleSheet.
 */
export default async function loadCss(url) {
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