    let produit = {                         //Objet produit
        Nom: "carotte",             
        prix: 10,
        stock: 8,
        nombre_vendu: 8
    }
    console.log(produit)                                // Consulter l'objet du produit
    let gain = produit.prix * produit.nombre_vendu;     // création de la variable à partir des propriétés du produit
    let valeur_stock =  produit.stock * produit.prix;   

    console.log("La valeur de notre de stock est de :" , valeur_stock)   // consulter la valeur du stock

    console.log("Nous allons faire un gain de :" , gain)                 // consulter le gain du produit


 produit.cost = 7;
 produit.total_cost = produit.cost *(produit.nombre_vendu + produit.stock);
console.log("Somme d'achat des produits :" , produit.total_cost)

let benefice_par_produit = produit.prix - produit.cost
console.log("bénéfice par produit :", benefice_par_produit)

let pourcentage_benefice = 100*(benefice_par_produit/produit.prix)

console.log("Pourcentage bénéfice par produit :", pourcentage_benefice +"%", Math.round(pourcentage_benefice)+"%")