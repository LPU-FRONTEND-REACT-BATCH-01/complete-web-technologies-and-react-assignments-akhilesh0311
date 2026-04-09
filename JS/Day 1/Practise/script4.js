function price(amount) {
  if (amount > 6000) {
	let total_amount = amount - (amount * 0.25); // Apply 25% discount
	return total_amount;
  } else if (amount > 2000) {
	let total_amount = amount * 0.15; // Apply 15% discount
	return total_amount;
  } else {
	let total_amount = amount; // Apply no discount
	return total_amount;
  }
}

let amount = Number(prompt("Enter the amount: "));
let final_price = price(amount);
console.log("The final price after discount is: " + final_price);	