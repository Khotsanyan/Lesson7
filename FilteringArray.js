const values = [null, true, {}, { name: "Elon" }, "", NaN, 0];
function FilterArray(values) {
  let array = [];
  for (let i of values) {
    if (i) {
      array.push(i);
    }
  }
  return array;
}
console.log(FilterArray(values));
