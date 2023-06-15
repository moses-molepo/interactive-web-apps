// script.js

const add = (a, b) => console.log(a + b);

const multiply = (a, b, c) => console.log(a * (b + c));
let calculated = false;

function internal() {
  if (!calculated) {
    const added = add(4, 8);
    const multiplied = multiply(8, 4, 2);
    console.log(added);
    console.log(multiplied);
    calculated = true;
  }
}

internal();

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()