
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
console.log("Mi programa paso por aquí");
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
console.log("Mi programa paso por acá");
const apocalipsis: mutantes = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
}

console.log(apocalipsis);

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: xMen | mutantes;

mystique = charles;
console.log(mystique);

mystique = apocalipsis;
console.log(mystique);

console.log("Este es el final de mi programa");
//SourceRoot en config.json nos ayuda a definir la ruta de los archivos	
// con el fin de que al depurar el código, se pueda en qué línea de 
//TS se encuentra el error mostrada en la consola del navegador
//Ya que de otro modo, solo se muestra la línea del archivo JS