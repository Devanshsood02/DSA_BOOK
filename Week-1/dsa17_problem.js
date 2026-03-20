
const DayNo=Number(prompt("Enter the Day No from 1 To 7"))
const Days=["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
const checker=(DayNo)=>{
if(isNaN(DayNo)){
    console.log("Please Enter a Valid Number");
}
else if(DayNo<1 || DayNo>7){
    console.log("Enter Number between 1 and 7")
}

else{
 let finalDay=DayNo-1;
    console.log(`${Days[finalDay]}`)
}


}

checker(DayNo)