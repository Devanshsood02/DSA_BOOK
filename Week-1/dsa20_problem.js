const Amount = Number(prompt("Please Enter the amount to check the discount"));

isNaN(Amount)
  ? console.log("plz Enter the valid Amount")
  : Amount < 1000
    ? console.log("No Discount Below 1000 purchase")
    : Amount < 4999
      ? console.log(
          `Original Amount = ${Amount} \n Discount = 20% \n Final Amount = ${Amount - (Amount * 20) / 100}`,
        )
      : console.log(
          `Original Amount = ${Amount} \n Discount is 30% \n Final Amount = ${Amount - (Amount * 30) / 100}`,
        );
