function defaultDiscount() {
	return .15
}

function applyDiscount(cost, discount = defaultDiscount()) { //We can fix like PHP or call another function that returns default value

	return cost - (cost * discount);

}

//alert(applyDiscount(100, .10));
// alert(applyDiscount(100));

function sum(...numbers) {

	// return numbers.reduce(function(prev, current) {

	// 	return prev + current;

	// });

	return numbers.reduce((prev, current) => prev + current);
}

console.log(sum(1,2,3,4));