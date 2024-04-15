var my_object = {
    firstName: "Jean",
    lastName: "Dupont",
    options: {
        name: "option 1",
        testing: true
    }
}

var my_tree = {
    firstName: "Jean",
    lastName : "Dupont",
    datestart: 1918,
    DateEnd: 1943,
    children : [
    

    { firstName: "Jean junior",
    lastName : "Dupont",
    datestart: 1930,
    dateEnd: 1976,
    children :[

    ] 
}
    ]
}

console.log(my_object.options.name)

var tab = ["lastName", "firstName", "options"]

console.log(my_object[tab[0]])

//console.log(my_tree.children [0]["firstName"] )
my_tree.children.push({
firstName:"Jean junior",
lastName: "Junior 2",
datestart: 1935,
dateEnd: 1979,
children:[]
})

console.log( my_tree.children)