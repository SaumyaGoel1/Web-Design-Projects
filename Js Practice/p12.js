// function takes string and returns object

function countLetters(str) {
  return [...str].reduce((dict, letter, index) => {
    dict.hasOwnProperty(letter) ? dict[letter]++ : (dict[letter] = 1);
    return dict;
  }, {});
}
