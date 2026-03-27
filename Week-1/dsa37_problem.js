function isPalindrome(num) {
  if (num < 0) return false;

  let original = num;
  let reverse = 0;

  while (num > 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
  }

  return original === reverse;
}

// Test
console.log(isPalindrome(121)); // true
console.log(isPalindrome(123)); // false