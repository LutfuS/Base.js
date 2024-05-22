const prompt = require("prompt");

prompt.start();

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

var findRecursivityPeople = function (lastName, tab, path) {
  var results = [];
  for (var i = 0; i < tab.length; i++) {
    var element = tab[i];
    if (element.lastName === lastName) {
      results.push({
        ...element,
        parent: path + element.firstName + "" + element.lastName,
      });
    }
    if (element.children) {
      var childResults = findRecursivityPeople(
        lastName,
        element.children,
        path + element.firstName + "" + element.lastName + "/"
      );
      results = results.concat(childResults);
    }
  }
  return results;
};

var findPeople = function (lastName) {
  return new Promise((resolve, reject) => {
    var results = findRecursivityPeople(lastName, people, "");
    if (results.length > 0) {
      resolve(results);
    } else {
      reject("Not Found");
    }
  });
};

prompt.get(["lastName"], function (err, result) {
  findPeople(result.lastName)
    .then((values) => {
      console.log(
        "Personnes trouvées avec le nom de famille",
        result.lastName + ":"
      );
      values.forEach((value) => {
        console.log(value.firstName, value.lastName);
      });
    })
    .catch((err) => {
      console.log(
        "Aucune personne trouvée avec le nom de famille",
        result.lastName
      );
    });
});
