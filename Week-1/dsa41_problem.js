let choice;

do {
  let num1 = Number(prompt("Enter first number:"));
  let num2 = Number(prompt("Enter second number:"));

  console.log("Choose operation:");
  console.log("1. Addition");
  console.log("2. Subtraction");
  console.log("3. Multiplication");
  console.log("4. Division");

  choice = Number(prompt("Enter your choice (1-4):"));

  let result;

  switch (choice) {
    case 1:
      result = num1 + num2;
      console.log("Result:", result);
      break;

    case 2:
      result = num1 - num2;
      console.log("Result:", result);
      break;

    case 3:
      result = num1 * num2;
      console.log("Result:", result);
      break;

    case 4:
      if (num2 === 0) {
        console.log("Cannot divide by zero");
      } else {
        result = num1 / num2;
        console.log("Result:", result);
      }
      break;

    default:
      console.log("Invalid choice");
  }

} while (prompt("Do you want to continue? (yes/no)") === "yes");