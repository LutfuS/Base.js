let TotalLivre = 600;                                           //Total des livrs avant ajout
let LivreAjouter = 50;                                          //Livre Ajouter
let LivreVenduParJour = (TotalLivre + LivreAjouter) /7;         //Livre vendu par jours
const message = "Le nombre de livres vendu par jour est:  "   // Const nombre de livre vendu
console.log(message + Math.round(LivreVenduParJour));                                 // Constater le resultat au bout de 7j
