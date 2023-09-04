// Moving an element of an array

function arrMove(arr, oldIndex, newIndex) {
  if (newIndex >= arr.length) {
    let i = newIndex - arr.length + 1;
    while (i--) {
      arr.push(undefined);
    }
  }
  arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
  return arr;
}
// returns [22, 11, 33]
console.log(arrMove([11, 22, 33], 0, 1));
