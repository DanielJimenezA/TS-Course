(() => {

    type Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.1215
    }
    const avengers:Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.1215

    }

    //La destructuracion es extraer las propiedades de un objeto
    //const { nick, ironman, vision, activo, poder } = avengers;

    //const {poder, vision} = avengers;

    //Podemos usar las propiedades y métodos del tipo de dato
    //console.log(poder.toFixed(2), vision.toLocaleUpperCase());

    //Se pueden desestructurar los argumentos de una función Ej: {ironman, ...resto}
    //además de mandar a llamar a las propiedades restantes del objeto Ej: resto
    const printAvenger = ({ironman, ...resto}:Avengers) => {
        console.log(ironman, resto);

    }
    printAvenger(avengers);

})();