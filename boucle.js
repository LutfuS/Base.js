var table = [0, 1, 2, 3, 4, 5, 6];
function recursiveLoop(tab, index) {
  console.log(tab[index], "index =", index);
  if (index < tab.length - 1) recursiveLoop(tab, index + 1);
  else console.log("fin du tableau");
}

recursiveLoop(table, 0);

// //* for (var i = 0; 1 < table.length; i++){
//     console.log(table[i])
// } */
