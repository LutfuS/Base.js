
var data= [
    {
        type: "Santé",
        descriptions: ["Problème AVC", "RDV Scanner", ],
        price_max: 1000,
        price_min: 300
    },
    {
        type: "Loisir",
        descriptions : ["Sortie cinéma", "sortie bowling"],
        price_min: 10,
        price_max:100,
    },
    {
        type : "Loyer",
        descriptions: ["facture edf","facture d'eau "],
        price_min:100,
        price_max: 1000,
    },
    {
        type : "Voiture",
        descriptions: ["Essence", "Réparation", "Pneu"],
        price_min: 50,
        price_max: 500
    },
    {
        type: "Frais",
        descriptions: ["test", 'test2'],
        price_min: 30,
        price_max: 1000
    }
]
var wallet = {
    depenses: [
    
    ] 
}

var max= 17132251378 
var min= 7132251378


for (var i = 0; i < 1000; i++) {

    var object_type= data[Math.round(Math.random()* ((data.length-1)-0)+0)]; // Math.round: arrondir - Math.random: génerer un nombre au hasard
    var object_description= object_type.descriptions[Math.round(Math.random() * (object_type.descriptions.length - 1))]; // création d'un objet description random parmi les données dans l'object type
    
    wallet.depenses.push({
        date: Math.round (Math.random() * (max-min) + min) , // création d'un objet date qui sera random et compris entre une valeur max et min
        type: object_type.type, // objet type qui selectionnera un type 
        price: Math.round(Math.random() * (object_type.price_max-object_type.price_min)+object_type.price_min), // prix choisis arrondi, chois aléatoirement en fonction de la valeur max et
        descriptions : object_description
    })
    console.log(wallet.depenses[i])
}

console.log(wallet.depenses)

// console.log("Taille tableau", wallet.depenses.length)
