let input;

do {
  console.log("hello");

  input = prompt("Enter 'yes' to continue:");

  if (input === null) break; // cancel handle

} while (input.toLowerCase() === "yes");