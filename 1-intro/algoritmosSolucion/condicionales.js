
// control de flujo

/* let nombre = "Jonathan Yair";
let edad = 20; */


let nombre = prompt("Escribe tu nombre");
console.log(nombre);


// casteo - convertir un tipo de dato
let edad = parseInt( prompt("Escribe tu edad") );
console.log(typeof edad);



if(nombre === "Jonathan Yair" && edad === 23){
    // scope - contexto
    console.log("Eres un ");
    console.log("ADMIN 😎😉");
   
} else if (nombre === "Maria") {

    console.log("Eres una mentora");

} else if (nombre === "Marina"){

    console.log("Eres la jefa 😜");

}else {

    console.log("Eres alumno");

};

console.log("Fin del programa");