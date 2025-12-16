fetch("data/products.json")
  .then(res => res.json())
  .then(data => {
    window.products = data;
    display(data);
  });

function display(items) {
  const div = document.getElementById("products");
  div.innerHTML = "";
  items.forEach(p => {
    div.innerHTML += `
      <div class="product">
        <h4>${p.name}</h4>
        <p>$${p.price}</p>
        <button onclick='addToCart(${JSON.stringify(p)})'>Add to Cart</button>
      </div>`;
  });
}

function searchProduct() {
  const q = document.getElementById("search").value.toLowerCase();
  display(products.filter(p => p.name.toLowerCase().includes(q)));
}

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}
