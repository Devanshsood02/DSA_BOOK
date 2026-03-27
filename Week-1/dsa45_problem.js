let totalBill = 0;
let choice;

do {
  console.log("\n---- MENU ----");
  console.log("1. Pizza - ₹200");
  console.log("2. Burger - ₹100");
  console.log("3. Pasta - ₹150");
  console.log("4. Exit");

  choice = Number(prompt("Enter your choice:"));

  let qty, price = 0;

  switch (choice) {
    case 1:
      qty = Number(prompt("Enter quantity:"));
      price = 200 * qty;
      totalBill += price;
      console.log("Added Pizza x" + qty);
      break;

    case 2:
      qty = Number(prompt("Enter quantity:"));
      price = 100 * qty;
      totalBill += price;
      console.log("Added Burger x" + qty);
      break;

    case 3:
      qty = Number(prompt("Enter quantity:"));
      price = 150 * qty;
      totalBill += price;
      console.log("Added Pasta x" + qty);
      break;

    case 4:
      console.log("Exiting...");
      break;

    default:
      console.log("Invalid choice");
  }

} while (choice !== 4);

console.log("\n🧾 Total Bill = ₹" + totalBill);