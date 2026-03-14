let cart = JSON.parse(localStorage.getItem("cart")) || [];

let container = document.getElementById("cartItems");

let total = 0;

cart.forEach(product => {

let div = document.createElement("div");

div.innerHTML = `
<img src="${product.image}" width="80">
<h3>${product.title}</h3>
<p>Price: $${product.price}</p>
`;

container.appendChild(div);

total += product.price;

});

let totalDiv = document.createElement("h2");
totalDiv.innerText = "Total: $" + total.toFixed(2);

container.appendChild(totalDiv);