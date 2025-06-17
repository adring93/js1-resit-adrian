const cartContainer = document.getElementById("cart-container");
cartContainer.innerHTML = "<p>Loading...</p>";

let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

function displayCartItems() {
  if (!cartContainer) return;
  
  if (cartItems.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  let html = "";
  cartItems.forEach((item, index) => {
    const usdPrice = (item.price / 10).toFixed(2);
    const isDuplicate = cartItems.filter(p => p.id === item.id).length > 1;
    const duplicateIcon = isDuplicate ? '<span class="duplicate-alert">!</span>' : "";

    html += `
      <div class="product">
        <img src="${item.image.url}" alt="${item.image.alt}">
        <h2>${item.title}${duplicateIcon}</h2>
        <p><strong>Price:</strong> $${usdPrice} USD</p>
        <button class="remove-btn" data-index="${index}">Remove</button>
      </div>
    `;
  });

  html += `
    <div class="cart-summary">
      <span>Total: $${getCartTotal()} USD</span>
      <button id="checkout-button">Complete Purchase</button>
    </div>
  `;

  cartContainer.innerHTML = html;

  document.querySelectorAll(".remove-btn").forEach(btn =>
    btn.addEventListener("click", removeItem)
  );
  document.getElementById("checkout-button")
    .addEventListener("click", () => {
      window.location.href = "confirmation/index.html";
    });
}

function removeItem(event) {
  const index = event.target.dataset.index;
  cartItems.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  displayCartItems();
  updateCartCount();
}

function updateCartCount() {
  const count = cartItems.length;
  const cartCount = document.getElementById("cart-count");
  if (cartCount) cartCount.textContent = `(${count})`;
}

function getCartTotal() {
  return cartItems.reduce((sum, item) => sum + item.price / 10, 0).toFixed(2);
}

window.addEventListener("error", () => {
  cartContainer.innerHTML = "<p style='color:red;'>Something went wrong. Please try again later.</p>";
});

displayCartItems();
updateCartCount();
