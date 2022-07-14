/* To represent number greater than 2^53 - 1, bigint is used. We have to append 'n' at the end of the number to declare it as BigInt.
*/

let bignumber = 1234324242424454544n;
console.log(bignumber);
bignumber += BigInt(2);
console.log(bignumber);