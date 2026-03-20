const gender=prompt("Enter Gender").trim().toLowerCase()
// trim is use for removing the trailing spaces 
if(["male","ma","m"].includes(gender)){
console.log("Good Morning Sir")
}

else if(["female","fe","f"].includes(gender)){
    console.log("Good morning Mam")
}
else{
    console.log("Please Enter the Valid Gender")
}