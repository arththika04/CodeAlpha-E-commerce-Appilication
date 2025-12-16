const orders = JSON.parse(localStorage.getItem("orders")) || [];
const div = document.getElementById("orders");

orders.forEach(o => {
  div.innerHTML += `<p>${o.name} - Delivered</p>`;
});
