const { faker } = require("@faker-js/faker/locale/fr");

var people = [];
let ageMin = 18;
let ageMax = 65;

for (var i = 0; i < 25; i++) {
  let age = Math.floor(Math.random() * (ageMax - ageMin + 1)) + ageMin;

  const genderRandom = Math.round(Math.random());
  let gender = genderRandom === 0 ? "male" : "female";

  let firstName = faker.person.firstName(gender);
  let lastName = faker.person.lastName(gender);

  people.push({
    firstName: firstName,
    lastName: lastName,
    age: age,
    gender: gender,
  });
}

console.log(people);

