const products = [
    // ... (your product data)
    { name: "Apples", price: 2.99, image: "img/imgApples.jpg" },
    { name: "Plums", price: 2.99, image: "img/imgPlums.jpg" },
    { name: "Mangoes", price: 2.99, image: "img/imgMangoes.jpg" },
    { name: "Kiwi", price: 2.99, image: "img/imgKiwi.jpg" },
    { name: "Tomatoes", price: 1.99, image: "img/imgTomatoes.jpg" },
    { name: "Kale", price: 3.49, image: "img/imKale.jpg" },
    { name: "Zucchini", price: 2.99, image: "img/imgZucchini.jpg" },
    { name: "Cilantro Seeds", price: 2.99, image: "img/imgCilantro Seeds.jpg" },
    { name: "Basil Seeds", price: 2.99, image: "img/imgBasil Seeds.jpg" },
    { name: "Green Bean Seed", price: 2.99, image: "img/imgGreen Bean Seeds.jpeg" },
    { name: "Compost Turners", price: 1.99, image: "img/imgCompost Turners.jpeg" },
    { name: "Parsley", price: 3.49, image: "img/imgParsley.jpeg" },
    { name: "Carrot Seeds", price: 2.99, image: "img/imgCarrot Seeds.jpg" },
    { name: "Cucumber Seeds", price: 2.99, image: "img/imgCucumber Seeds.jpg" },
    { name: "Pruners and Shears", price: 2.99, image: "img/imgPruners and Shears.jpg" },
    { name: "Greenhouse Equipment", price: 2.99, image: "img/imgGreenhouse Equipment.jpg" },
    { name: "Green Beans", price: 1.99, image: "img/imgGreen Beans.jpg" },
    { name: "Rock Phosphate", price: 3.49, image: "img/imgRock Phosphate.jpg" },
    { name: "Feather Meal", price: 2.99, image: "img/imgFeather Meal.jpeg" },
    { name: "Cilantro", price: 2.99, image: "img/imgCilantro.jpeg" },
    { name: "Oregano", price: 2.99, image: "img/imgOregano.jpg" },
    { name: "Dill", price: 2.99, image: "img/imgDill.jpg" },
    { name: "Cultivators", price: 1.99, image: "img/imgCultivators.jpg" },
    { name: "Blueberries", price: 3.49, image: "img/imgBlueberries.jpeg" },
    { name: "Radishes", price: 2.99, image: "img/imgRadishes.png" },
    { name: "Soil Testing Kits", price: 2.99, image: "img/imgSoil Testing Kits.jpg" },
    { name: "Basil", price: 2.99, image: "img/imgBasil.jpeg" },
    { name: "Rosemary", price: 2.99, image: "img/imgRosemary.jpg" },
    { name: "Compost", price: 1.99, image: "img/imgCompost.jpg" },
    { name: "Cover Crops", price: 3.49, image: "img/imgCover Crops.jpg" },
    { name: "Lettuce", price: 2.99, image: "img/imgLettuce.jpg" },
    { name: "Radish Seeds", price: 2.99, image: "img/imgRadish Seeds.jpg" },
    { name: "Tractors", price: 2.99, image: "img/imgTractors.jpg" },
    { name: "Weeder", price: 2.99, image: "img/imgWeeders.jpg" },
    { name: "Oranges", price: 1.99, image: "img/imgOranges.jpg" },
    { name: "Thyme", price: 3.49, image: "img/imgThyme.jpg" },
    { name: "Spinach Seeds", price: 2.99, image: "img/imgSpinach Seeds.jpg" },
    { name: "Pea Seeds", price: 2.99, image: "img/imgPea Seeds.jpg" },
    { name: "Spinach", price: 2.99, image: "img/imgSpinach.jpg" },
    { name: "Bat Guano", price: 2.99, image: "img/imgBat Guano.png" },
    { name: "Green Manure", price: 1.99, image: "img/imgGreen Manure.jpg" },
    { name: "Coriander", price: 3.49, image: "img/imgCoriander.jpg" },
    { name: "Carrots", price: 2.99, image: "img/imgCarrots.jpg" },
    { name: "Bananas", price: 2.99, image: "img/imgBananas.jpg" },
    { name: "Mint", price: 2.99, image: "img/imgMint.jpg" },
    { name: "Blood Meal", price: 2.99, image: "img/imgBlood Meal.jpg" },
    { name: "Zucchini Seeds", price: 2.99, image: "img/imgZucchini Seeds.jpg" },
    { name: "Mulch Layers", price: 1.99, image: "img/imgMulch Layers.jpg" },
    { name: "Cover Crop Rollers", price: 3.49, image: "img/imgCover Crop Rollers.jpg" },
    { name: "Lettuce Seeds", price: 2.99, image: "img/imgLettuce Seeds.jpg" },
    { name: "Tomato Seeds", price: 2.99, image: "img/imgTomato Seeds.jpg" },
    { name: "Grapes", price: 2.99, image: "img/imgGrapes.jpg" },
    { name: "Peaches", price: 2.99, image: "img/imgPeaches.jpg" },
    { name: "Harvesting Equipment", price: 1.99, image: "img/imgHarvesting Equipment.jpg" },
    { name: "Drip Irrigation Systems", price: 3.49, image: "img/imgDrip Irrigation Systems.jpg" },
    { name: "Turmeric", price: 2.99, image: "img/imgTurmeric.jpg" },
    { name: "Seaweed Fertilizer", price: 2.99, image: "img/imgSeaweed Fertilizer.jpg" },
    { name: "Pears", price: 2.99, image: "img/imgPears.png" },
    { name: "Cherries", price: 2.99, image: "img/imgCherries.jpg" },
    { name: "Broccoli", price: 1.99, image: "img/imgBroccoli.jpg" },
    { name: "Bell Peppers", price: 3.49, image: "img/imgBell Peppers.jpg" },
    { name: "Pepper Seeds", price: 2.99, image: "img/imgPepper Seeds.jpg" },
    { name: "Bone Meal", price: 2.99, image: "img/imgBone Meal.jpg" },
    { name: "Fish Emulsion", price: 2.99, image: "img/imgFish Emulsion.jpg" },
    { name: "Ginger", price: 2.99, image: "img/imgGinger.jpeg" },
    { name: "Cinnamon", price: 1.99, image: "img/imgCinnamon.jpg" },
    { name: "Seeders", price: 3.49, image: "img/imgSeeders.jpg" },
    { name: "Manure", price: 2.99, image: "img/imgManure.jpg" },
    { name: "Strawberrie", price: 1.99, image: "img/imgStrawberries.jpg" },
    { name: "Cucumbers", price: 3.49, image: "img/imgCucumbers.jpg" },
    { name: "Potatoes", price: 2.99, image: "img/imgPotatoes.jpg" },
    { name: "Wood Ash", price: 2.99, image: "img/imgWood Ash.jpg" }
];

const productContainer = document.getElementById("productContainer");
const cartItems = document.getElementById("cartItems");
const totalPriceElement = document.getElementById("totalPrice");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const buyButton = document.getElementById("buyButton");
const purchaseMessage = document.getElementById("purchaseMessage");

let isPurchaseMessageDisplayed = false;

searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
    displayProducts(filteredProducts);
});

// Initial display of products
displayProducts(products);

function displayProducts(products) {
    productContainer.innerHTML = "";
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `<img src="${product.image}" alt="${product.name}">
                                <h3>${product.name}</h3>
                                <p>Rs.${product.price.toFixed(2)}</p>
                                <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>`;
        productContainer.appendChild(productDiv);
    });
}

function addToCart(productName, price) {
    const cartItem = document.createElement("li");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `${productName}: Rs.${price.toFixed(2)} <button onclick="removeFromCart(this, ${price})">Remove</button>`;
    cartItems.appendChild(cartItem);
    updateTotal(price);

    // Check if the purchase message has been displayed already
    if (!isPurchaseMessageDisplayed) {
        purchaseMessage.style.display = "block"; // Display the message
        isPurchaseMessageDisplayed = true; // Set the flag to true
        setTimeout(() => {
            purchaseMessage.style.display = "none"; // Hide the message after a delay
        }, 2000); // Adjust the delay (in milliseconds) as needed
    }
}

function removeFromCart(item, price) {
    item.parentElement.remove();
    updateTotal(-price);
}

function updateTotal(price) {
    const currentTotal = parseFloat(totalPriceElement.textContent);
    totalPriceElement.textContent = (currentTotal + price).toFixed(2);
}

// Add the Buy button functionality
buyButton.addEventListener("click", () => {
    // Display the purchase message when Buy button is clicked
    purchaseMessage.style.display = "block"; 
    setTimeout(() => {
        purchaseMessage.style.display = "none"; // Hide the message after a delay
    }, 2000); // Adjust the delay (in milliseconds) as needed

    // Clear the cart and update the total price to zero
    cartItems.innerHTML = "";
    totalPriceElement.textContent = "0.00";
});
