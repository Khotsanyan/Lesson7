function PartialSum(count) {
  function Sum(otherCount = 0) {
    return count + otherCount;
  }
  return Sum;
}

console.log(PartialSum(1)(2));
console.log(PartialSum(1)());

let addOne = PartialSum(1);
let addTen = PartialSum(10);

console.log(addOne(7));
console.log(addTen(15));
