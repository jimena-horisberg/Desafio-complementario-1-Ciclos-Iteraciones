
// WHILE

let edad = parseInt (prompt("Ingrese su edad para ver la película"));

while (edad <18) {
    alert ("los menores de 18 años no pueden ver esta pelicula");
    edad = parseInt (prompt("Ingrese su edad para ver la pelicula"));
}

alert ("Bienvenido/a, la película se dará en la Sala 5");  


//FOR
 console.log ("Tabla del 5");

for (let valor = 0 ; valor <= 50 ; valor= valor + 5){
    console.log (valor);
} 
