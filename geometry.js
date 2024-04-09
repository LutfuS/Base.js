
let rectangle = {
    x : 50 ,
    y : 120 ,
    Largeur: 30 ,
    Longueur: 70 ,
    unite : "cm"

}
rectangle.Perimetre = rectangle.Largeur + rectangle.Longueur + rectangle.Largeur + rectangle.Longueur; 
rectangle.area = rectangle.Longueur * rectangle.Largeur                                                                     // console.log(area)
rectangle.diagonale = (rectangle.Largeur*rectangle.Largeur) + (rectangle.Longueur**2)                                       // console.log(diagonale)
rectangle.rc_diagonale = Math.sqrt(rectangle.diagonale);                                                                  // console.log(rc_diagonale)
rectangle.rc_diagonale_fixed = rectangle.rc_diagonale.toFixed(2);                                                         // console.log(rc_diagonale_fixed);


console.log( "X :" ,rectangle.x + rectangle.unite) ;
console.log("Y :" , rectangle.y, rectangle.unite );
console.log("Perimetre :" , rectangle.Perimetre, rectangle.unite);
console.log("Aire :" , rectangle.area,rectangle.unite+ "²");
console.log("Diagonale :" , rectangle.diagonale, rectangle.unite);
console.log("Hypoténuse au carré :" , rectangle.rc_diagonale_fixed, rectangle.unite +"²");