document.addEventListener("DOMContentLoaded", () => {
  // importar los productos del fichero de js cargado por script 
  const collection_products = [];
  const products = fetchProducts();
  products
    .then((data) => {
      if (data && Array.isArray(data)) {
        data.forEach((product) => {
          collection_products.push(product);
        });
      };
    })
    .catch((error) => {
      console.error("Error loading products:", error);
    });

    console.log("Products loaded:", collection_products);
    // Añadir los eventos a los productos
    addEventListenersToNavProducts(collection_products);
});

const  fetchProducts = async() => {
  // Función para cargar los productos desde un fichero JSON
  try {
    const response = await fetch("./src/products.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

const updateProductUX = (productId, data)=>{
  // Función para actualizar la UX de los productos

  // destructuring el objeto data a variables
  const {
    uuid, // uuid del producto
    name, // nombre del producto
    type, // tipo del producto
    price, // precio del producto
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
  const fabric_details_DOM = document.querySelector(`#fabric-details`);
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
  price_DOM.textContent = price;
  price_DOM.setAttribute("data-price", price);
  // Actualizar la categoría del producto
  category_DOM.textContent = category;
  // Actualizar la descripción del producto
  description_DOM.textContent = description;
  // Actualizar los detalles de fabricación del producto
  updateFrabricDetailsUX(frabric_details);
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
  console.log("Updating stock UX for units in stock:", stockMSG);
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
const addEventListenersToNavProducts = (collection_products) => {
  // función para añadir los eventos a los productos y poder capturar el evento de click
  const productLinks = document.querySelectorAll(".link-product-nav");

  if(productLinks.length > 0) {
    productLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        // capturar el padre de la imagen del clickada para recuperar el uuid del producto
        const productUUID = e.target.parentElement.getAttribute("uuid");

        console.log("Product clicked:", productUUID);
        const product = collection_products.find(p => p.uuid === productUUID);
        if (product) {
          updateProductUX(productUUID, product);
        } else {
          console.error("Product not found:", productUUID);
        }
      });
    });
  };
};

