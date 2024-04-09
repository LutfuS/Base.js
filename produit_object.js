    let produit = {                         //Objet produit
        Nom: "carotte",             
        prix: 10,
        stock: 5,
        nombre_vendu: 6
    }
    console.log(produit)                                // Consulter l'objet du produit
    let gain = produit.prix * produit.nombre_vendu;     // création de la variable à partir des propriétés du produit
    let valeur_stock =  produit.stock * produit.prix;   

    console.log("La valeur de notre de stock est de :" , valeur_stock)   // consulter la valeur du stock

    console.log("Nous allons faire un gain de :" , gain)                 // consulter le gain du produit


