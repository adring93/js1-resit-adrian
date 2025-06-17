export function getCartItems() {
  const stored = localStorage.getItem("cart");
  return stored ? JSON.parse(stored) : [];
}

export function saveCartItems(items) {
  localStorage.setItem("cart", JSON.stringify(items));
}

export function addToCart(product) {
  const cart = getCartItems();
  cart.push(product);
  saveCartItems(cart);
}

export function removeFromCart(id) {
  const updated = getCartItems().filter(item => item.id !== id);
  saveCartItems(updated);
}

export function getTotalPrice() {
  return getCartItems().reduce((total, item) => total + item.price, 0);
}
