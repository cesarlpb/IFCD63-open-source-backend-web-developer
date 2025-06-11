// currency.js
import { updateProductUX, products } from "./product.mjs";

const getCurrencies = async () => {
    try {
        const cached = localStorage.getItem("currencies");
        if (cached) return JSON.parse(cached);

        const response = await fetch("./src/data/currency.json");
        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();
        localStorage.setItem("currencies", JSON.stringify(data));
        return data;
    } catch (error) {
        console.error("Error fetching currencies:", error);
        return [];
    }
};

const validCurrency = async (currency) => {
    const currencies = await getCurrencies();
    return currencies.some(c => c.code === currency);
};

export const getCurrency = async () => {
    const currencies = await getCurrencies();
    const storedCurrency = localStorage.getItem("currency");

    if (storedCurrency) {
        const isValid = await validCurrency(storedCurrency);
        if (isValid) return storedCurrency;

        localStorage.removeItem("currency");
    }

    return currencies.length > 0 ? currencies[0].code : "EUR";
};

const formatUXCurrency = async (currency) => {
    const currencies = await getCurrencies();
    let currencyData = currencies.find(c => c.code === currency);

    if (!currencyData) {
        console.warn("Currency not found, using default EUR");
        currencyData = { name: "Euro", code: "EUR", symbol: "€" };
    }

    const currency_value = document.querySelector("#currency_value");
    if (currency_value) {
        currency_value.textContent = `${currencyData.name} (${currencyData.code} ${currencyData.symbol})`;
    }
};

const setCurrency = async (currency) => {
    const defaultCurrency = await getCurrency();
    const isValid = await validCurrency(currency);

    if (isValid) {
        localStorage.setItem("currency", currency);
    } else {
        localStorage.removeItem("currency");
        currency = defaultCurrency;
        console.warn(`Currency ${currency} is not valid, using default currency.`);
        localStorage.setItem("currency", currency);
    }

    await formatUXCurrency(currency);
};
const updateUX = async () => {
        // capturar el UUID del producto para actualizar su UX cuando cambiemos la moneda
        // recuperar los productos de la colección
        const collection_products = await products();
        const productElement = document.querySelector("#uuid");
        const productUUID = productElement.getAttribute("uuid");
        const product = collection_products.find(p => p.uuid === productUUID);
        if (product) {
          await updateProductUX(productUUID, product);
        } else {
          console.error("Product not found:", productUUID);
        }
}
export const addEventListenersToNavCurrencies = async () => {
    const currencyLinks = document.querySelectorAll(".currency_selector");

    currencyLinks.forEach(link => {
        link.addEventListener("click", async (e) => {
            // Evitar el comportamiento por defecto del enlace
            e.preventDefault();
            // Actualizar la UX del producto con la nueva moneda
            const currencyCode = link.getAttribute("data-currency");
            await setCurrency(currencyCode);
            const ulContainer = link.closest("ul");
            const hiddenLi = ulContainer?.querySelectorAll(".hidden");

            hiddenLi?.forEach(li => li.classList.remove("hidden"));
            link.parentElement.classList.add("hidden");
            // Actualizar la UX del producto
            await updateUX();
        });
    });

    const local_currency = await getCurrency();
    await formatUXCurrency(local_currency);
};
export const initCurrency = async () => {
    const currencies = await getCurrencies();

    if (!currencies || currencies.length === 0) {
        console.warn("No currencies found to initialize.");
        return;
    }

    const storedCurrency = localStorage.getItem("currency");

    if (!storedCurrency || !(await validCurrency(storedCurrency))) {
        const defaultCurrency = currencies[0].code;
        localStorage.setItem("currency", defaultCurrency);
        console.info(`Currency initialized with default: ${defaultCurrency}`);
    }

    const local_currency = await getCurrency();
    await formatUXCurrency(local_currency);
};
