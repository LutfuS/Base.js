const { faker } = require("@faker-js/faker/locale/fr");

var peoples = [
  {
    firstName: "Edouard",
    lastName: "BERNIER",
  },
];

for (var i = 0; i < 25; i++) {
  var firstName = faker.person.firstName("male");
  var lastName = faker.person.lastName("male");
  peoples.push({
    firstName: firstName,
    lastName: lastName,
    email: faker.internet.email({
      firstName: firstName,
      lastName: lastName,
    }),
  });
}

// console.log(peoples)

var users = [];
var status = [
  "Joueur profesionelle",
  "Joueur amateur",
  "Club",
  "Éducateur",
  "Coach",
];

function rdmNumberArray() {
  var tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let rdm_number = Math.round(Math.random() * (tab.length - 1) + 1);
  let new_array = [];

  for (let i = 0; i < rdm_number; i++) {
    let rdm_nbr = Math.round(Math.random() * (tab.length - 1) + 1);
    // console.log("nbr aléatoire : " + rdm_nbr)
    // console.log("élément a l'index du nombre aléatoire " + tab[rdm_nbr])
    // console.log("mon tab " + tab)
    // console.log("new array " + new_array)
    if (isNaN(tab[rdm_nbr])) {
    } else {
      new_array.push(tab[rdm_nbr]);
      tab.splice(rdm_nbr, 1);
    }
    // console.log("mon tab " + tab)
    // console.log("new array " + new_array)
    // console.log("  ")
  }
  // console.log("mon tab " + tab)
  // console.log("mon nouveau tableau : " + new_array)
  return new_array;
}

for (var i = 0; i < 10; i++) {
  var username = faker.person.firstName();
  var rdm_status = status[Math.round(Math.random() * status.length)];
  let supporter = rdmNumberArray();
  let follow = rdmNumberArray();
  // console.log(supporter)
  console.log(follow);
  users.push({
    id: i,
    username: username,
    email: faker.internet.email({
      firstName: username,
      lastName: faker.person.lastName(),
    }),
    img: ["src1", "src2"],
    intro: "",
    status: rdm_status,
    supporter: supporter,
    follow: follow,
  });
}

console.log(users);

// id: 1,
//         username: 'ribéry',
//         img: ribery,
//         bio: 'La roue tourne va tourner',
//         status: ['joueur'],
//         categorie: ['senior profésionelle'],
//         supporter: [

//         ],
//         follow: [

//         ]

faker.js;

const _ = require("loadsh");
var tab_element = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "D",
  "K",
];

var type = ["CA", "C", "P", "T"];

var pile_card = [];

for (var i = 0; i < tab_element.length; i++) {
  for (var j = 0; j < type.length; j++) {
    pile_card.push(tab_element[i] + "-" + type[j]);
  }
}

// function shuffleArray(array) {
//     array.sort(() => Math.random() - 0.5);
// }

// function fisherYatesShuffle(arr) {
//     for (var i = arr.length - 1; i > 0; i--) {
//       var j = Math.floor(Math.random() * (i + 1));  // prend une carte aléatoirement
//       [arr[i], arr[j]] = [arr[j], arr[i]];          // swap les cartes de place
//     }
// }

console.log(pile_card);
// shuffleArray(pile_card)
// fisherYatesShuffle(pile_card);
_.shuffle(pile_card);
console.log(pile_card);

function numberRamdom(max, min) {
  return Math.round(Math.random() * (max - min) + min);
}

var turn1 = numberRamdom(pile_card.length - 1, 0);
//console.log(turn1, pile_card[turn1])

var value_card = pile_card[turn1].split("-")[0];

if (isNaN(value_card)) value_card = 10;
else value_card = Number(value_card);
console.log(value_card);

pile_card.splice(turn1, 1); // on enleve la carte qui a été choisit
console.log(turn1, pile_card[turn1]);

pile_card = pile_card.map(function (cart) {
  console.log(cart);
  var value = cart.split("-")[0]; // on recupere la valeur
  var value_color = cart.split("-")[1];
  if (isNaN(value) && value != "A")
    // on test si c'est un nombre ET que sa valeur diffère de "A"
    value = 10;
  else if (isNaN(value) && value == "A") value = 11;
  else value = Number(value); // si c'est un nombre, alors sa valeur = le nombre
  if (value_color == "CA" || value_color == "C") value_color = "red";
  else value_color = "black";

  var obj = { name: cart, value: value, color: value_color };
  return obj;
});

console.log(pile_card);
