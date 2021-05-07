let arrayNumbers = [2, 24, 36, 49];
function Sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (Math.sqrt(array[i]) % 2 === 0) sum = sum + array[i];
  }
  console.log(sum);
}
Sum(arrayNumbers);
