"use strict";
const a = 10;
let b = 10;
const c = 10;
let d = 10;
b = 3.1416;
function sayHello(msg) {
    console.log(msg + '' + 'Daniel');
    msg.charAt(0);
}
(() => {
    const e = 19;
    console.log(a);
})();
(() => {
    console.log("let");
})();
function sumar(a, b) {
    return a + b;
}
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
const llamarBatman = (llamar = true) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
const unirheroes = (...personas) => {
    return personas.join(", ");
};
const noHaceNada = (numero, texto, booleano, arreglo) => { };
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
(() => {
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
    let mystique;
    mystique = charles;
    console.log(mystique);
    mystique = apocalipsis;
    console.log(mystique);
    console.log("Este es el final de mi programa");
})();
(() => {
    const fullName = (firstName, lastName, upperCase = false) => {
        if (upperCase) {
            return `${firstName} ${lastName || 'Valor_indefinido'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || 'Valor_indefinido'}`;
        }
    };
    const name = fullName('Bruce', 'Wayne', true);
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        if (!firstName) {
            throw new Error('firstName is required');
        }
        return `${firstName} ${lastName || 'Valor_indefinido'}`;
    };
    const name = fullName('Bruce');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        if (!firstName) {
            throw new Error('firstName is required');
        }
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Bruce', 'Wayne');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, ...restDeArgs) => {
        return `${firstName} ${restDeArgs.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent', 'Otro argumento');
    console.log({ superman });
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => 'Hola ' + name;
    const saveTheWorld = () => 'El mundo está salvado';
    let myFunction;
    myFunction = addNumbers;
    console.log(myFunction(5, 9));
})();
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatisignal = () => {
        return 'Batiseñal activada';
    };
    console.log(typeof activateBatisignal);
    const heroName = returnName();
})();
//# sourceMappingURL=main.js.map