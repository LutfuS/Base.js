obj = [
  {
    firstName: "edouard",
    lastName: "Bernier",
    yearBorn: 1998,
  },
  {
    firstName: "jean",
    lastName: "Luck",
    yearBorn: 1958,
    hobit: "sport",
    profession: "leprechaune",
    yeardead: 1978,
  },
];

for (var i = 0; i < obj.length; i++) {
  var keys = Object.keys(obj[i]);
  console.log("");
  for (var key_number = 0; key_number < keys.length; key_number++) {
    console.log(keys[key_number], ":", obj[i][keys[key_number]]);
  }
}

function getPropretyObject(object) {
  var objectKey = Object.keys(object);
  return objectKey.join(", ");
}

function printProprety(keys) {
  console.log("Porpriétés sont : ", keys);
}

printProprety(getPropretyObject(obj));

obj.age = 2024 - obj.yearBorn;
obj.job = "Dev";

printProprety(getPropretyObject(obj));

var keys_existant = Object.keys(obj);

for (let i = 0; i < keys_existant.length; i++) {
  console.log(
    "Propriétés : ",
    keys_existant[i],
    "/valeur :",
    obj[keys_existant[i]]
  );
}
