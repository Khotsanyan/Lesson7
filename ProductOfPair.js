let arrayIntegers = [1, 7, 8, 2];

function Product(array) {
  let arrayProducts = [];
  for (let i = 0; i < array.length - 1; i++) {
    arrayProducts.push(array[i] * array[i + 1]);
  }
  let max = 0;
  for (let i = 0; i < arrayProducts.length; i++) {
    if (max < arrayProducts[i]) max = arrayProducts[i];
  }
  console.log(max);
}
Product(arrayIntegers);
