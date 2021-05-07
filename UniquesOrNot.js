let array = [1, 2, 3, 4, 5, 6];
function Foo(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) return false;
    }
  }
  return true;
}
console.log(Foo(array));
