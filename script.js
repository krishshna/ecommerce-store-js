let cart = JSON.parse(localStorage.getItem("cart")) || [];
let allProducts = [];

window.onload = function(){
    document.getElementById("cartCount").innerText = cart.length;
};

fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(data => {
    allProducts = data;
    displayProducts(data);
});

function displayProducts(products){

    let container = document.getElementById("products");

    container.innerHTML = "";

    products.forEach(product => {

        let div = document.createElement("div");

        div.classList.add("product");

        div.innerHTML = `
        <img src="${product.image}">
        <h3>${product.title}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;

        container.appendChild(div);

    });

}

function addToCart(productId){

    let product = allProducts.find(p => p.id === productId);
    
    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));
    
    document.getElementById("cartCount").innerText = cart.length;

    console.log(product.title);
    
}

function searchProducts() {

    let searchText = document.getElementById("searchInput").value.toLowerCase();
    
    let filteredProducts = allProducts.filter(product =>
        product.title.toLowerCase().includes(searchText)
    );
    
    displayProducts(filteredProducts);
    
}

function filterCategory(category){

    if(category === "all"){
    displayProducts(allProducts);
    return;
    }
    
    let filtered = allProducts.filter(product => product.category === category);
    
    displayProducts(filtered);
    
}