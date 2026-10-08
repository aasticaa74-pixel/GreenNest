let cart = [];

const addButtons = document.querySelectorAll(".add-cart");

const cartCountDisplay = document.getElementById("cart-count");
const cartButton = document.getElementById("cart-button");

const cartPopup = document.getElementById("cart-popup");
const closeCart = document.getElementById("close-cart");

const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

/* ADD TO CART */

addButtons.forEach(function(button) {

```
button.onclick = function() {

    const card = button.closest(".plant-card");

    const name = card.querySelector("h3").textContent;
    const priceText = card.querySelector("h4").textContent;

    const price = Number(
        priceText.replace("₹", "").trim()
    );

    cart.push({
        name: name,
        price: price
    });

    cartCountDisplay.textContent = cart.length;

    updateCart();

};
```

});

/* UPDATE CART */

function updateCart() {

```
cartItems.innerHTML = "";

let total = 0;

cart.forEach(function(item) {

    const itemDiv = document.createElement("div");

    itemDiv.className = "cart-item";

    itemDiv.innerHTML = `
        <span>${item.name}</span>
        <span>₹${item.price}</span>
    `;

    cartItems.appendChild(itemDiv);

    total = total + item.price;

});

if (cart.length === 0) {

    cartItems.innerHTML = "<p>Your cart is empty.</p>";

}

cartTotal.textContent = total;
```

}

/* OPEN CART */

cartButton.onclick = function() {

```
cartPopup.style.display = "flex";
```

};

/* CLOSE CART */

closeCart.onclick = function() {

```
cartPopup.style.display = "none";
```

};

/* CLOSE WHEN CLICKING OUTSIDE */

cartPopup.onclick = function(event) {

```
if (event.target === cartPopup) {

    cartPopup.style.display = "none";

}
```

};

