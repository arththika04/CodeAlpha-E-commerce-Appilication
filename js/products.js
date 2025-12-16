let allProducts = [];

fetch("data/products.json")
  .then(res => res.json())
  .then(data => {
    allProducts = data;
    show(data);
  });

function show(products) {
  const div = document.getElementById("products");
  div.innerHTML = "";

  products.forEach(p => {
    div.innerHTML += `
      <div class="product">
        <h4>${p.name}</h4>
        <p>$${p.price}</p>
        <button onclick='add(${JSON.stringify(p)})'>Add to Cart</button>
      </div>
    `;
  });
}

function search() {
  const q = document.getElementById("search").value.toLowerCase();
  show(allProducts.filter(p => p.name.toLowerCase().includes(q)));
}

function add(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}
