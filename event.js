const { resolve } = require("path");

console.log("Bienvenue");
var calcul = (12 / 2) * 4;

console.log(calcul);

{
  setTimeout(function () {
    calcul = 4;
    console.log(calcul), 3000;
  });

  try {
    calcul = 4;
    console.log(calcul);
    ds;
  } catch (err) {
    console.log("err.name");
  }
  console.log("FIN"), 1000;
}

function waiting(time) {
  return new Promise((resolve, reject) => {
    if (time > 100)
      setTimeout(() => {
        console.log("OK");
        resolve({ sucess: true });
      }, time);
    else reject({ sucess: false });
  });
}

waiting(101)
  .then((value) => {
    console.log("Promise reussi :", value);
  })
  .catch((err) => {
    console.log("Promise échoue :", err);
  });
