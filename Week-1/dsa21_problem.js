const Units = Number(prompt("Enter the Units Consumed"));

const calculateBill = (Units) => {

  if (isNaN(Units) || Units < 0) {
    return "Please enter valid units";
  }

  let bill = 0;

  if (Units > 300) {
    bill += (Units - 300) * 15;
    Units = 300;
  }

  if (Units > 200) {
    bill += (Units - 200) * 10;
    Units = 200;
  }

  if (Units > 100) {
    bill += (Units - 100) * 7;
    Units = 100;
  }

  // remaining units (0–100)
  bill += Units * 5;

  return `Total Bill = ₹${bill}`;
};

console.log(calculateBill(Units));