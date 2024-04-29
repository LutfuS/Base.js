const { table } = require("console");

var people = [
  {
    // Recursivité en Javascript "parent-enfant"
    firstName: "Edouard",
    lastName: "Bernier",
    children: [
      {
        firstName: "Jean",
        lastName: "Bernier",
        children: [
          {
            firstName: "Junior",
            lastName: "Bernier",
            children: [
              {
                firstName: "Jordan",
                lastName: "Bernier",
              },
              {
                firstName: "Luc",
                lastName: "Bernier",
              },
            ],
          },
        ],
      },
      {
        firstName: "Sacha",
        lastName: "Bernier",
      },
      {
        firstName: "Laurent",
        lastName: "Bernier",
      },
      {
        firstName: "Raphael",
        lastName: "Bernier",
      },
    ],
  },
  {
    firstName: "Jean",
    lastName: "Luc",
    children: [
      {
        firstName: "Richard",
        lastName: "Luc",
        children: [
          {
            firstName: "Roméo",
            lastName: "Luc",
          },
        ],
      },
    ],
  },
];

function recursiveLoopChildren(tab) {
  //Nommer la fonction
  for (var i = 0; i < tab.length; i++) {
    // intialiser la fonction pour var i = 0  si la longueur de i est supérieur à 0 alors ajouter +1 à i
    console.log(tab[i].firstName + tab[i].lastName); // apercu de l'argument de la fonction  et des propriétés nom et prénom
    if (tab[i].children && tab[i].children.length > 0)
      // Si children est plus grand que 0 alors affichés la longeur

      recursiveLoopChildren(tab[i].children); //modifcation de la fonction et ajouter de a propriété children
  }
}

recursiveLoopChildren(people);

function affichageFamille(tab, indent, origin) {
  let tabulation = "";
  for (y = 0; y < indent; y++) {
    for (let i = 0; i < tab.length; i++) {
      console.log(
        `${tabulation}nom : ${tab[i]} / prénom : ${tab[i].firstName} / origin : ${origin}`
      );
      if (tab[i].children && tab[i].children.length > 0) {
        affichageFamille(
          tab[i].children,
          indent + 1,
          origin + `${tab[i].firstName} ${tab[i].lastName}-`
        );
      }
    }
  }
}

affichageFamille(people, 0, "-");
