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

for (i = 0; i < obj.length; i++) {
  var keys = Object.keys(obj[i]);
  console.log("");
  var text = "";
  for (var key_number = 0; key_number < keys.length; key_number++) {
    // console.log(keys[key_number], ":", obj[i][keys[key_number]])
    text += $;
    {
      keys[key_number];
    }
    $;
    {
      obj[i][keys[key_number]];
    }
    if (key_number + 1 != keys.length) text += " / ";
  }
  console.log(text);
}
