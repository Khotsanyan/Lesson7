function AddSuffix(string) {
  function Add(str) {
    return str + string;
  }
  return Add;
}
console.log(AddSuffix("ly")("hard"));

add_ly = AddSuffix("ly");
add_less = AddSuffix("less");
console.log(add_ly("hard"));
console.log(add_less("fear"));
