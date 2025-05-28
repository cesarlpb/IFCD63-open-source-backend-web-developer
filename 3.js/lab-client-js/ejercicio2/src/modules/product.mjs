const  fetchProducts = async() => {
  // Función para cargar los productos desde un fichero JSON
  try {
    const response = await fetch("./src/data/products.json");
    // Verificar si la respuesta es correcta
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

export const products = () => {
  // Función que carga los productos y los devuelve como una promesa
  // Si no se encuentran productos, devuelve un array vacío y muestra un mensaje de error
  return fetchProducts().then(products => {
    if (!products || products.length === 0) {
      console.error("No products found");
      return [];
    }
    // Aquí podrías hacer algo con los productos, como almacenarlos en una variable global o en el estado de tu aplicación
    return products;
  });
}

export const updateProductUX = async (productId, data)=>{
  // Función para actualizar la UX de los productos

  // Verificar si recibimos la data del producto o es nula
  if (!productId) {
    console.error("Product data is null or undefined");
    return;
  }
  // Verificar si el producto existe en la colección
  const data_collection = await products();
  const product = data_collection.find(p => p.uuid === productId);
  data = product || data; // Si no se encuentra el producto, usar los datos pasados como argumento
  if (!data) {
    console.error("Product not found in the collection");
    return;
  }

  // destructuring el objeto data a variables
  const {
    uuid, // uuid del producto
    name, // nombre del producto
    type, // tipo del producto
    prices, // precio del producto
    unitsInStock, // unidades en stock del producto
    image, // imagenes del producto
    sizes, // tallas del producto
    description, // descripción del producto
    category, // categoría del producto
    rating, // valoración del producto
    frabric_details // detalles de fabricación del producto
  } = data;

  // Seleccionar los elementos del DOM que se van a actualizar.
  const article_uuid_DOM = document.querySelector(`#uuid`);
  const img_full_DOM = document.querySelector(`#image-large`);
  const img_small_DOM = document.querySelector(`#image-small`);
  const name_DOM = document.querySelector(`#name`);
  const type_DOM = document.querySelector(`#type`);
  const price_DOM = document.querySelector(`#price`);
  const category_DOM = document.querySelector(`#category`);
  const description_DOM = document.querySelector(`#description`);
  const afterpay_DOM = document.querySelector(`#afterpay`);
  // seleccionar el contenedor de tallas
  updateSizesUX(sizes);
  // actualizar el stock del producto
  updateInStockUX(unitsInStock);
  // cambiar los datos del DOM del producto
  // Actualizar el uuid del producto
  article_uuid_DOM.setAttribute("uuid", uuid);
  // Actualizar la imagen del producto
  img_full_DOM.setAttribute("src", image);
  img_small_DOM.setAttribute("src", image);
  // Actualizar el nombre y tipo del producto
  name_DOM.textContent = name;
  type_DOM.textContent = type;
  // Actualizar el precio del producto
  price_DOM.textContent = getPriceStringFromProduct(prices);
  // Actualizar el atributo data-price con el JSON de precios
  price_DOM.setAttribute("data-price", JSON.stringify(prices));
  // Actualizar la categoría del producto
  category_DOM.textContent = category;
  // Actualizar la descripción del producto
  description_DOM.textContent = description;
  // Actualizar los detalles de fabricación del producto
  updateFrabricDetailsUX(frabric_details);
  // Actualizar el texto de Afterpay del producto
    afterpay_DOM.textContent = getAfterpayStringFromProduct(prices);
}
const updateSizesUX = (sizes) => {
  // Función para actualizar la UX de las tallas del producto
  const sizesContainer = document.querySelector("#size-links-container");
  sizesContainer.innerHTML = ""; // Limpiar el contenedor de tallas
  sizes.forEach((size) => {
    const sizeLink = document.createElement("a");
    // dance-link py-3 px-5 border-2 border-black rounded-sm font-bold
    sizeLink.classList.add("dance-link", "py-3", "px-5", "border-2", "border-black", "rounded-sm", "font-bold");
    // Añadir atributos y texto al enlace de talla
    sizeLink.setAttribute("href", "#");
    sizeLink.textContent = size;
    sizesContainer.appendChild(sizeLink);
  });
}

const updateFrabricDetailsUX = (fabric_details) => {
  // Función para actualizar la UX de los detalles de fabricación del producto
  const fabricDetailsContainer = document.querySelector("#fabric-details");
  fabricDetailsContainer.innerHTML = ""; // Limpiar el contenedor de detalles de fabricación
  if (fabric_details && Array.isArray(fabric_details)) {
    fabric_details.forEach((detail) => {
      const detailItem = document.createElement("li");
      detailItem.textContent = detail;
      fabricDetailsContainer.appendChild(detailItem);
    });
  } else {
    fabricDetailsContainer.textContent = "No fabric details available.";
  }
}
const updateInStockUX = (unitsInStock) => {
  // Función para actualizar la UX de las unidades en stock
  const stockContainer = document.querySelector("#stock");
  const stockMSG = stockContainer.querySelector(".stock-msg");
  const quantityForm = document.querySelector("#quantity-form");
  const paymentForm = document.querySelector("#payment-form");
  // In Stock, ready to ship | Out of Stock
  // color bg-green-50 text-green-500 | bg-red-50 text-red-500
  if (unitsInStock > 0) {
    stockMSG.textContent = "In Stock, ready to ship";
    stockContainer.classList.remove("bg-red-50", "text-red-500");
    stockContainer.classList.add("bg-green-50", "text-green-500", "in-stock");
    // seleccionar el quantity-form y ocultarlo. Tambien loquear el form del carro
    blockOrActivateQuantityButtons(quantityForm, false);
    blockOrActivateCartForm(paymentForm, false);
    
    } else {
    stockMSG.textContent = "Out of Stock";
    stockContainer.classList.remove("bg-green-50", "text-green-500", "in-stock");
    stockContainer.classList.add("bg-red-50", "text-red-500", "out-of-stock");
    // seleccionar el quantity-form y ocultarlo. Tambien loquear el form del carro
    blockOrActivateQuantityButtons(quantityForm, true);
    blockOrActivateCartForm(paymentForm, true);
  }
}

const blockOrActivateQuantityButtons = (quantityForm, state) => {
  // Función para bloquear o activar los botones de cantidad
  const quantityButtons = quantityForm.querySelectorAll("button");
  const quantityInput = quantityForm.querySelector("#quantity-input");
  if (state) {
    // Bloquear los botones de cantidad
    quantityButtons.forEach((button) => {
      button.disabled = true; // Bloquear el botón
      button.classList.remove("cursor-pointer");
      button.classList.add("cursor-not-allowed");
    });
    quantityInput.disabled = true; // Bloquear el input de cantidad
  } else {
    // Activar los botones de cantidad
    quantityButtons.forEach((button) => {
      button.disabled = false; // Activar el botón
      button.classList.remove("cursor-not-allowed");
      button.classList.add("cursor-pointer");
    });
    quantityInput.disabled = false; // Habilitar el input de cantidad
}
}
const blockOrActivateCartForm = (paymentForm, state) => {
  // Función para bloquear o activar el formulario del carro
  const submitButton = paymentForm.querySelector("button[type='submit']");
  // cursor-not-allowed | cursor-pointer
  if (state) {
    // Bloquear el botón de envío del formulario
    submitButton.disabled = true; // Bloquear el botón
    submitButton.classList.remove("cursor-pointer");
    submitButton.classList.add("cursor-not-allowed");
  } else {
    // Activar el botón de envío del formulario
    submitButton.disabled = false; // Activar el botón
    submitButton.classList.remove("cursor-not-allowed");
    submitButton.classList.add("cursor-pointer");
  }
}

const getPriceStringFromProduct = (prices) => {
    // Función que devuelve el precio del producto en formato string con su valor y currency
    const currency = localStorage.getItem("currency") || "EUR"; // Recuperar la moneda del localStorage o usar EUR por defecto
    const validCurrencies = localStorage.getItem("currencies") ? JSON.parse(localStorage.getItem("currencies")) : [];
    console.log("Valid currencies:", validCurrencies);
    const isValidCurrency = validCurrencies.some(c => c.code === currency);
    if (!isValidCurrency) {
        console.warn(`Currency ${currency} is not valid, using default EUR.`);
        return "Price not available";
    }
    // Buscar el precio del producto en la lista de precios
    if (!prices || prices.length === 0) {
        console.warn("No prices available for this product.");
        return "Price not available";
    }
    const price = prices.find(p => p.currency === currency);
    if (!price) {
        console.warn(`Price not found for currency ${currency}, using first available price.`);
        return `${prices[0].value} ${prices[0].currency}`;
    }
    return `${price.value}${validCurrencies.find(c => c.code === currency).symbol}`;
}

const getAfterpayStringFromProduct = (prices) => {
    // Función que devuelve el texto de Afterpay del producto
    const currency = localStorage.getItem("currency") || "EUR"; // Recuperar la moneda del localStorage o usar EUR por defecto
    const validCurrencies = localStorage.getItem("currencies") ? JSON.parse(localStorage.getItem("currencies")) : [];
    console.log("Valid currencies:", validCurrencies);
    const isValidCurrency = validCurrencies.some(c => c.code === currency);
    if (!isValidCurrency) {
        console.warn(`Currency ${currency} is not valid, using default EUR.`);
        return "Afterpay not available";
    }
    // Buscar el precio del producto en la lista de precios
    if (!prices || prices.length === 0) {
        console.warn("No prices available for this product.");
        return "Afterpay not available";
    }
    const price = prices.find(p => p.currency === currency);
    if (!price) {
        console.warn(`Price not found for currency ${currency}, using first available price.`);
        return `${prices[0].value} ${prices[0].currency}`;
    }
    // Dividir el precio entre 4 para Afterpay
    const afterpayValue = (price.value / 4).toFixed(2);
    if (afterpayValue <= 0) {
        console.warn("Afterpay value is not valid.");
        return "Afterpay not available";
    }
    return `${afterpayValue}${validCurrencies.find(c => c.code === currency).symbol}`;
}

export const addEventListenersToNavProducts = async () => {
  // función para añadir los eventos a los productos y poder capturar el evento de click
    // recuperar los productos de la colección
    const collection_products = await products();
    // Seleccionar todos los enlaces de productos en la navegación

  const productLinks = document.querySelectorAll(".link-product-nav");

  if(productLinks.length > 0) {
    productLinks.forEach((link) => {
      link.addEventListener("click", async (e) => {
        e.preventDefault();
        // capturar el padre de la imagen del clickada para recuperar el uuid del producto
        const productUUID = e.target.parentElement.getAttribute("uuid");
        const product = collection_products.find(p => p.uuid === productUUID);
        if (product) {
          await updateProductUX(productUUID, product);
        } else {
          console.error("Product not found:", productUUID);
        }
      });
    });
  };
};