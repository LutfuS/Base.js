var age = 16;
var authorized = false
if (age>= 18) {
    console.log("Tu es majeur !")
}

else{
    console.log("Tu es mineur !")
}

console.log(`Autorisé: ${authorized}`)

var authorized2 = age >= 18 ? true : false
console.log(`Autorisé: ${authorized2}`)   