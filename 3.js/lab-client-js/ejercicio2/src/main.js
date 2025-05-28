import { getRandomInt } from "./modules/utils.mjs";
import { addEventListenersToNavProducts, updateProductUX } from "./modules/product.mjs";
import { addEventListenersToNavCurrencies, initCurrency } from "./modules/currency.mjs";
document.addEventListener("DOMContentLoaded", async () => {
  // Añadir los eventos a las monedas
  addEventListenersToNavCurrencies();
  // Inicializar la moneda
  await initCurrency();
  // Añadir los eventos a los productos
  addEventListenersToNavProducts();
  // Obtener el UUID del producto al principio para actualizar la UX y quitar el producto customizado
  await updateProductUX(get_product_UUID());
  // llamar al primer producto para que se muestre en la página
});



const get_product_UUID = () =>{
  // Obtener el UUID del producto al principio para actualizar la UX y quitar el producto customizado
  const productElement = document.querySelector("#uuid");
  if (productElement) {
    const productUUID = productElement.getAttribute("uuid");
    return productUUID;
  }
}

