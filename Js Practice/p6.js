// Sum of multiples 3 and 5

sum(15);

function sum(limit) {
  i = 0;
  let sumMultipliedByThree = 0;
  let sumOfThree = 0;

  while (sumMultipliedByThree <= limit) {
    i++;
    sumOfThree += sumMultipliedByThree;
    sumMultipliedByThree = 3 * i;
  }

  i = 0;
  let sumMultipliedByFive = 0;
  let sumOfFive = 0;

  while (sumMultipliedByFive <= limit) {
    i++;
    sumOfFive += sumMultipliedByFive;
    sumMultipliedByFive = 5 * i;
  }
  console.log(sumOfThree + sumOfFive);
}
