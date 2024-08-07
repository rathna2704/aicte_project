// Initialize an empty cart array
let cart = [];

// Function to add items to the cart
function addToCart(name, price) {
    // Add the item to the cart array
    cart.push({ name, price });
    // Update the cart display
    updateCart();
}

// Function to update the cart display
function updateCart() {
    // Get references to the cart items container and total display
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotalDiv = document.getElementById('cart-total');
    
    // Clear the current cart items display
    cartItemsDiv.innerHTML = '';

    // Initialize total price variable
    let total = 0;

    // Iterate over the cart items and create HTML for each item
    cart.forEach((item, index) => {
        total += item.price; // Update total price

        // Create a new div for each cart item
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.innerHTML = `
            <span>${item.name} - $${item.price.toFixed(2)}</span>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        // Append the new item div to the cart items container
        cartItemsDiv.appendChild(cartItemDiv);
    });

    // Update the total display
    cartTotalDiv.innerHTML = `Total: $${total.toFixed(2)}`;
}

// Function to remove an item from the cart
function removeFromCart(index) {
    // Remove the item at the specified index
    cart.splice(index, 1);
    // Update the cart display
    updateCart();
}

function addToCart(item, price) {
    alert(${item} has been added to your cart for $${price});
}
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your message has been sent!');
});