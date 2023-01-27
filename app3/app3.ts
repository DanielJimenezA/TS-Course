
// Objetos
//Hacemos un tipo objeto tomando en cuenta la vaiable con más propiedades, en este caso
// const bumblebee
type superCoches = {
    carroceria: string;
    modelo: string;
    antibalas: boolean;
    pasajeros: number;
    disparar?: () => void
}

//a la variable batimovil y bumblebee le asignamos el tipo superCoches declarado arriba
const batimovil: superCoches = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};

const bumblebee: superCoches | Function = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() { // El metodo disparar es opcional
        console.log("Disparando");
    }
};


// Villanos debe de ser un arreglo de objetos personalizados
type villano = {
    nombre: string,
    edad: number,
    mutante: boolean
}
const villanos: villano[] = [{
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

type xMen = {
    poder: string;
    estatura: number;
}

type mutantes = {
    lider: boolean;
    miembros: string[];
}

const charles: xMen = {
    poder: "psiquico",
    estatura: 1.78
};

const apocalipsis: mutantes = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: xMen | mutantes;

mystique = charles;
console.log(mystique);

mystique = apocalipsis;
console.log(mystique);


