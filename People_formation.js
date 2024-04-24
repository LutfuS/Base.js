my_tableau = [
    {
        FirstName: "Mathis",
        LastName: 'Jsaipo',
        Age: 74,
        DateStart: 1919,
        LieuDeNaissance: "Afrique",

    },

    {
        FirstName: "Alexandre",
        LastName: 'Ballchaser',
        Age: 412,
        DateStart: 1919,
        LieuDeNaissance: "Colombie",

    }
]

for(var i= 0; i <100; i++) {

    my_tableau.push({
        FirstName: "Louis" +i,
        LastName: 'ButContreSonCamp',
        Age: 20 +i,
        DateStart: 1930,
        LieuDeNaissance: "But",

})
}

for (var i = 0; i < my_tableau.length; i++){
    if(my_tableau[i].FirstName ==="Louis55") {
        console.log("Prenom:", my_tableau[i].FirstName, "Nom:", my_tableau[i].LastName, "Age:", my_tableau[i].Age,
        "Date de naissance:", my_tableau[i].DateStart, "Lieu de naissance:", my_tableau[i].LieuDeNaissance
        + "\n" +
        "Il y a", my_tableau.length, "personnes dans le tableau")
        console.log(`Il est à la ${i} position dans le tableau.`)
        
    }

   
    
}

var tableauAge = []
for (var i = 0; i < my_tableau.length; i++) {
    if(my_tableau[i].Age >50){
        tableauAge.push(my_tableau[i]) 
    }
}

console.log(`j'ai ${tableauAge.length} "personnes qui ont plus de 50 ans `)

//Stockage d'un élément unique avec 0bj
var obj_people = {}

for (var i= 0; < my_tableau.length; i ++) {
    obj_people[my_tableau[i].FirstName]=my_tableau
}

console.log(obj_people[`Louis55`])
