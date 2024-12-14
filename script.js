let cart = [];

// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Add to Cart Functionality
function addToCart(cookieName, quantity) {
    const item = { name: cookieName, quantity: quantity };
    cart.push(item);
    updateCartDisplay();
}

// Update Cart Display
function updateCartDisplay() {
    const cartCount = document.getElementById("cart-count");
    cartCount.innerText = cart.length;

    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = cart.map(item => {
        return `<p>${item.name} x ${item.quantity}</p>`;
    }).join('');
}

// Toggle Cart Sidebar
function toggleCart() {
    const cartSidebar = document.getElementById("cart-sidebar");
    cartSidebar.classList.toggle("open");
}

// Close Cart Sidebar
function closeCart() {
    const cartSidebar = document.getElementById("cart-sidebar");
    cartSidebar.classList.remove("open");
}

// Modal for Cookie Details
function showDetails(title, description, image) {
    const modal = document.getElementById("modal");
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-description").innerText = description;
    document.getElementById("modal-image").src = image;
    modal.style.display = "block";
}

function closeDetails() {
    document.getElementById("modal").style.display = "none";
}
