(() => {

    type Avengers = {
        nombre: string,
        weapon: string,
    }

    const ironman: Avengers = {
        nombre: 'Ironman',
        weapon: 'Mark 50'
    }

    const capitan: Avengers = {
        nombre: 'Capitan America',
        weapon: 'Escudo'
    }

    const spiderman: Avengers = {
        nombre: 'Spiderman',
        weapon: 'Telaraña'
    }

    const avengers:Avengers[] = [ironman, capitan, spiderman];

    // for(let index = 0; index <Array.length; index++){
    //     const element = Array[index];
    // }

    //El ciclo for of nos permite recorrer un arreglo de manera más sencilla
    for(const Avengers of avengers){
        console.log(Avengers.nombre, Avengers.weapon);
    }

})()