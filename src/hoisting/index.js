// El joisting solo funciona para variables var y funciones expecificamente con la palabra clave function


    // Asi funciona joisting con la variable var
//var nameOfCat; //undefined
console.log(nameOfCat); // undefined
var nameOfCat = 'lunae'
console.log(nameOfCat); // lunae


// Asi funciona en una funcion 
nameOfCat()

function nameOfCat() {
    console.log(`El mejor gato es ${lunae}`);
}
var lunae = 'lunaemita'