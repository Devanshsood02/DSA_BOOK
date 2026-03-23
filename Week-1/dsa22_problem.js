const consonant= prompt("Enter the alphabet").trim().toLowerCase()


if(consonant == "a" || consonant == "e" || consonant == "i" || consonant == "o" || consonant == "u"){
    console.log(`${consonant} is vowel `)
}
else{
    console.log(`${consonant} is consonant `)
}