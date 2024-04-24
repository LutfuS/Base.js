var data = {
    music: [] ,
    video: [],
    podcast: [],
}

for (var i = 0; i < 500; i++) {

    var minLength = 7;
    var maxLength = 14;

    var length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;

    for (var j = 0; j < length; j++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    var langage = "FR"; // Initialisation de la variable langage à "FR"
    if (i % 2 !== 0) {
        langage = "EN"; // Changement à "EN" si le nombre est impair
    }

    var min = 1451;
    var max = 54580;
    var time = Math.random() * (max - min) + min;

    // Ajout de l'objet à data.music
    data.music.push({
        Titre: result,
        artist: "Mathis" + i,
        daterelease: "10/14/200" + i,
        album: "MathisLaStreet" + i,
        time: time,
        langage: langage // Ajout de la propriété langage à l'objet
    });
}

// Boucle pour afficher les données
for (var i = 0; i < data.music.length; i++) {
    console.log(`Titre: ${data.music[i].Titre}, Artist: ${data.music[i].artist}, Langage: ${data.music[i].langage}, daterelease: ${data.music[i].daterelease} , Album: ${data.music[i].album} , Time: ${data.music[i].time}`);
}




console.log(result);






