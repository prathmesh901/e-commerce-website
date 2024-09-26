// Get the button element
const add-to-cart = document.getElementById('add-to-cart');

// Add event listener to the button
addToCartButton.addEventListener('click', animateButton);

// Animation function
function animateButton() {
  // Add animation class
  addToCartButton.classList.add('animate-pulse'); // or 'animate-bounce'

  // Remove animation class after 0.5 seconds
  setTimeout(() => {
    addToCartButton.classList.remove('animate-pulse'); // or 'animate-bounce'
  }, 500);
}
Bootstrap Animation Classes:
You can also use Bootstrap's built-in animation classes:
<button id="add-to-cart" class="btn btn-primary animate__animated">Add to Cart</button>

// Get the button element
const addToCartButton = document.getElementById('add-to-cart');

// Add event listener to the button
addToCartButton.addEventListener('click', animateButton);

// Animation function
function animateButton() {
  // Add animation class
  addToCartButton.classList.add('animate__pulse'); // or 'animate__bounce'

  // Remove animation class after 0.5 seconds
  setTimeout(() => {
    addToCartButton.classList.remove('animate__pulse'); // or 'animate__bounce'
  }, 500);
}

