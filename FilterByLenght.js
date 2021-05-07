function FilterByLength(array) {
  let filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 3) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
}
console.log(FilterByLength(["kia", "tesla", "bmw", "mercedes"]));
