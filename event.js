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
