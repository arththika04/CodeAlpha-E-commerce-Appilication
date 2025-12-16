const cart = JSON.parse(localStorage.getItem("cart")) || [];
const div = document.getElementById("cart");

cart.forEach(item => {
  div.innerHTML += `<p>${item.name} - $${item.price}</p>`;
});

function checkout() {
  localStorage.setItem("orders", JSON.stringify(cart));
  localStorage.removeItem("cart");
  alert("Payment Successful (Demo)");
  window.location.href = "orders.html";
}
