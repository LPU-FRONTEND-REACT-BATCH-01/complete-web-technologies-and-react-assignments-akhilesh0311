let cartData = [
    { id: 1, name: "Watch", price: 1000, quantity: 1 },
    { id: 2, name: "Phone", price: 5000, quantity: 1 },
    { id: 3, name: "Laptop", price: 10000, quantity: 1 }
];

// Sort by name
cartData.sort(function(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
});
console.log("Sort by Name:", cartData);


// Sort by price (ascending)
cartData.sort(function(a, b) {
    return a.price - b.price;
});
console.log("Price Ascending:", cartData);


// Sort by price (descending)
cartData.sort(function(a, b) {
    return b.price - a.price;
});
console.log("Price Descending:", cartData);


// Filter price > 1000
let filtered = cartData.filter(function(item) {
    return item.price > 1000;
});
console.log("Filtered Data:", filtered);