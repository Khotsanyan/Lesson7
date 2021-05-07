let string = "apple";
function Redundant(string) {
  function Foo() {
    return string;
  }
  return Foo;
}
console.log(Redundant(string)());
