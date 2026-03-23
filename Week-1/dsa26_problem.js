let table=Number(prompt("Enter the table You want"))

const Table=(table)=>{
if(isNaN(table) || table<0){
    console.log("Plz enter a valid no or greater than 0")
    return
}

for(let i=1;i<=10;i++){
    console.log(`${table} * ${i} = ${table*i}`)
}

}


Table(table)