let Num= Number(prompt("Enter the no you want sum upto"))

const summ=(Num)=>{
if(isNaN(Num)|| Num<0){
    console.log("not a valid no")
    return
}
 let sum = (Num * (Num + 1)) / 2;

    console.log("Sum =", sum);

}


summ(Num)