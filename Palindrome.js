let str = "anna";
function Palindrome(string) {
  let k = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = string.length - 1 - i; j >= 0; j--) {
      if (string[i] === string[j]) {
        k++;
        break;
      }
    }
  }
  if (k === string.length) {
    return true;
  } else return false;
}
Palindrome(str);
console.log(Palindrome(str));
