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
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Speed", "Time Travel", "Dimensional Travel"]
    };
    flash = {
        name: "Clark Kent",
        age: 500,
        powers: ["Super Strength", "Super Speed", "Flight", "Heat Vision", "Freeze Breath"]
    };
    console.log(flash);
})();
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Speed", "Time Travel", "Dimensional Travel"]
    };
    flash = {
        name: "Clark Kent",
        age: 500,
        powers: ["Super Strength", "Super Speed", "Flight", "Heat Vision", "Freeze Breath"],
        getNombre() {
            return this.name;
        }
    };
})();
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["1", "2"]
    };
    let superman = {
        name: "Barry Allen",
        age: 24,
        powers: ["Speed"],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    let myCustmVariable = 'Namor';
    myCustmVariable = 123;
    console.log(typeof myCustmVariable);
    myCustmVariable = {
        name: 'Tony Stark',
        age: 50,
        powers: [1]
    };
    console.log(typeof myCustmVariable);
})();
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = 'Doctor Strange';
    console.log(avenger.charAt(0));
    console.log(avenger.charAt(1));
    avenger = 150.55555211;
    console.log(avenger.toFixed(2));
    console.log(avenger.toFixed(3));
    console.log(exists);
    console.log(power);
})();
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    aliados.push('Spiderman');
    let powerHero;
    (function (powerHero) {
        powerHero[powerHero["aquaman"] = 0] = "aquaman";
        powerHero[powerHero["Batman"] = 1] = "Batman";
        powerHero[powerHero["Flash"] = 5] = "Flash";
        powerHero[powerHero["Superman"] = 100] = "Superman";
    })(powerHero || (powerHero = {}));
    const fuerzaFlash = powerHero.Flash;
    const fuerzaSuperman = powerHero.Superman;
    const fuerzaBatman = powerHero.Batman;
    const fuerzaAcuaman = powerHero.aquaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = true && false;
    console.log({ isSuperman });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.max;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(() => {
    const error = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error('Auxilio!');
    console.log('Hola Mundo!');
})();
(() => {
    let isActive = true;
    console.log(isActive);
})();
(() => {
    let avengers = 10;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log("Estamos en problemas");
    }
    else {
        console.log("Nos salvamos");
    }
    avengers = Number('123A');
    console.log({ avengers });
})();
(() => {
    var _a;
    const batman = 'Batman';
    const linternaVerde = 'Linterna Verde';
    const volcanPopocatepetl = `Héroe: Popocatepetl`;
    const abc = 123;
    console.log(`I'm ${batman}, ${abc}`);
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No está presente');
})();
(() => {
    const hero = ['Dr. Strange', 100, true];
    hero[0] = 'Ironman';
    hero[1] = 50;
    hero[2] = false;
})();
(() => {
    function callBatman() {
    }
    const callSuperman = () => {
    };
    const a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=.main.js.map