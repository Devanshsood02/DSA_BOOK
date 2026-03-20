const Integer = Number(prompt("Enter the Integer"));

if (isNaN(Integer)) {
  console.log("Please Enter a Valid Number");
} else if (Integer % 2 === 0) {
  console.log(`${Integer} is Even Number`);
} else {
  console.log(`${Integer} is Odd Number`);
}
