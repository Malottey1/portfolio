const inventory = [
    { img: "apple.png", count: 8 },
    { img: "pear.png", count: 1 },
    { img: "grapes.png", count: 1 },
    { img: "cherry.png", count: 1 },
    { img: "lemon.png", count: 1 },
    { img: "plum.png", count: 1 },
    { img: "raspberry.png", count: 2 },
    { img: "blueberry.png", count: 1 },
    { img: "melon.png", count: 1 },
    { img: "peach.png", count: 4 },
    { img: "banana.png", count: 1 },
    { img: "kiwi.png", count: 1 },
    { img: "watermelon.png", count: 3 },
    { img: "blackberry.png", count: 3 },
    { img: "strawberry.png", count: 1 },
    { img: "orange.png", count: 2 },
    { img: "mango.png", count: 1 },
    { img: "coconut.png", count: 1 },
    { img: "pineapple.png", count: 1 },
    { img: "apricot.png", count: 2 },
];

function loadInventory() {
    const inventoryGrid = document.getElementById("inventory");
    inventoryGrid.innerHTML = "";

    inventory.forEach((item) => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("inventory-item");

        const img = document.createElement("img");
        img.src = `images/${item.img}`;
        img.alt = "Item";

        if (item.count > 1) {
            const countLabel = document.createElement("span");
            countLabel.classList.add("item-count");
            countLabel.innerText = item.count;
            itemDiv.appendChild(countLabel);
        }

        itemDiv.appendChild(img);
        inventoryGrid.appendChild(itemDiv);
    });
}

function sortInventory() {
    inventory.sort((a, b) => b.count - a.count);
    loadInventory();
}

// Load items on page load
document.addEventListener("DOMContentLoaded", loadInventory);
