let x = 1;
x = -x;
console.log(x); // Unary means single operand

let y = 4;
x = x + y;
console.log(x); // Binary means 2 operands

/*
Addition +,
Subtraction -,
Multiplication *,
Division /,
Remainder %,
Exponentiation **.
*/


// Remainder
x = 6;
console.log(x%4); // Remainder when 6 is divided by 4 is 2

// Exponentiation
x = 5;
console.log(x ** 3); // 5 * 5 * 5 = 125
console.log(5 ** (1/3)); // To find cube root


// String Concatenation
x = 'hello'
y = "world";
console.log(x + y); // helloworld
console.log(x, y); // hello world

// If any of the operand is string, then other is converted to string too

x = '1';
y = 2;
console.log(x + y); // 12
console.log('1' + 2 + 2); // 122 (2 convert to string and then 2 added to 12)
console.log(1 + 2 + '3') // 33 (1 + 2 is 3 and 3 is added to string 3)

// Unary +
// If the operand is number it has no effect, but if not then it converts the datatype into number

x = 1;
console.log(+x);
y = '1';
console.log(+y);

