import { getAllProducts } from "./api.js";

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
    cartCount.textContent = cart.length > 0 ? `(${cart.length})` : "";
  }
}

async function displayProducts() {
  const container = document.getElementById("products");
  container.innerHTML = "<p>Loading games...</p>";

  try {
    const products = await getAllProducts();
    container.innerHTML = "";

    const filterSelect = document.getElementById("filter-select");
    let filtered = products;

    if (filterSelect) {
      filterSelect.addEventListener("change", () => {
        const selected = filterSelect.value;
        const visible = selected === "all" ? products : products.filter(p => p.genre.toLowerCase() === selected);
        renderProducts(visible);
      });
    }

    renderProducts(filtered);
  } catch (error) {
    container.innerHTML = "<p style='color: red;'>Failed to load products. Please try again later.</p>";
  }

  updateCartCount();
}

function renderProducts(products) {
  const container = document.getElementById("products");
  container.innerHTML = "";

  products.forEach((product, i) => {
    const usdPrice = (product.price / 10).toFixed(2);
    const delay = i * 0.07;
    container.innerHTML += `
      <div class="product" style="animation-delay:${delay}s">
        <img src="${product.image.url}" alt="${product.image.alt}" />
        <h2>${product.title}</h2>
        <p>$${usdPrice} USD</p>
        <a href="product/index.html?id=${product.id}">View Product</a>
      </div>
    `;
  });
}

displayProducts();