// Multiple if can be replaced by 'switch' statement

/* Structure

switch(x) {
  case 'value1':
    ....
    break;
  case 'value2':
    ....
    break;
  .
  .
  .
  default:
    ...
    break;
}
*/

let a = 3;
switch (a) {
  case 1:
    console.log('Value is 1');
    break;
  case 4:
    console.log('Value is 4');
    break;
  default:
    console.log('Value is neither 1 nor 4');
    break;
}

// WE can group two cases together

a = 6;
switch (a) {
  case 4:
  case 8:
    console.log('Value is divisible by 2 and 4')
    break;
  case 2:
  case 6:
    console.log('Value is divisible by 2');
    break;
  default:
    console.log('It is not a even number');
    break;
}