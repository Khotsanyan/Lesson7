function PrintAfter(string) {
  function Print(str = "hello, world") {
    console.log(str);
    console.log(string);
  }
  return Print;
}
PrintAfter("Elon Musk")();
