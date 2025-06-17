import { getProductById } from "./api.js";
const container = document.getElementById("product-container");
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
async function loadProduct() {
  const product = await getProductById(id);
  const usdPrice = (product.price / 10).toFixed(2);
  container.innerHTML = `
    <div class="product-detail">
      <img src="${product.image.url}" alt="${product.image.alt}">
      <h2>${product.title}</h2>
      <p>${product.description}</p>
      <p><strong>Price:</strong> $${usdPrice} USD</p>
      <button id="add-to-cart">Add to Cart</button>
    </div>
  `;
  document.getElementById("add-to-cart").addEventListener("click", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "../checkout/index.html";
  });
}
loadProduct();
