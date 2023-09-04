// input is array or not

var is_array = function (input) {
  if (toString.call(input) === "[object Array]") return true;
  return false;
};
console.log(is_array("Google"));
console.log(is_array([1, 2, 4, 0]));
