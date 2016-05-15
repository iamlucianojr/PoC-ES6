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

let title = "Templates in ES6";
let template = `
	<div>
		<h1>${title}</h1>
	</div>
`;

console.log(template);



function getPerson() {

	let name = "Luciano";

	let age = 21;

	return {

		name, 

		age,

		greet: () => `Name: ${name}, Age: ${age}`

	};

}

alert(getPerson().greet());

let person = {

	name: "Foobar",

	age: 22

};

let {name, age} = person;

alert(age);

let data = {

	name: "LGJ",

	age: 24,

	results: ["Foo", "Bar"],

	count: 40

}

let {results, count} = data;

console.log(results, count);


function greet({name, age}) {

	console.log(`Hello ${name}. You are ${age}`);

}

greet({

	name: "Luciano",

	age: 22

})










































