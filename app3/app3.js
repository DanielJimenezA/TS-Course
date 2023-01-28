"use strict";
//a la variable batimovil y bumblebee le asignamos el tipo superCoches declarado arriba
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    }
};
const villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: 5,
        mutante: true
    }];
// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
console.log("Mi programa paso por aquí");
const charles = {
    poder: "psiquico",
    estatura: 1.78
};
console.log("Mi programa paso por acá");
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
console.log(apocalipsis);
// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique;
mystique = charles;
console.log(mystique);
mystique = apocalipsis;
console.log(mystique);
console.log("Este es el final de mi programa");
//SourceRoot en config.json nos ayuda a definir la ruta de los archivos	
// con el fin de que al depurar el código, se pueda en qué línea de 
//TS se encuentra el error mostrada en la consola del navegador
//Ya que de otro modo, solo se muestra la línea del archivo JS
//# sourceMappingURL=app3.js.map