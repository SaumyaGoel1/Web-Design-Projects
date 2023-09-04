//exceptiojn handling

var a = 1;
//var p = 2;

try {
  a = 1 / p;
  console.log(`New value of 'a' is ${a}`);
} catch (err) {
  console.log(err.message);
} finally {
  console.log(`Final value of 'a' is ${a}`);
}
