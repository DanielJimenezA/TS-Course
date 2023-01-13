(()=>{
    const batman:string = 'Batman';
    const linternaVerde:string = 'Linterna Verde'; //Podemos usar comilla doble para agregar apostrofes dentro de estos
    const volcanPopocatepetl:string = `Héroe: Popocatepetl`; //Back ticks
    const abc = 123;

    console.log(`I'm ${batman}, ${abc}`); //Interpolaciòn de strings ES6
    //En el caso de la variable abc, TS automáticamente lo convierte a string
    console.log(batman.toUpperCase());
    console.log(batman[10]?.toUpperCase() || 'No está presente');//A pesar de que Batman no tiene más de 10 caracteres, TS no marca error

    //El null check operator es una característica de TS que permite verificar si un valor es null o undefined antes de acceder a sus propiedades o métodos '?'  

    //batman[10]? depende de la posición en la que es colocado el operador null check operator '?' y en el caso de este ejemplo es en la posición 10, si la posición es mayor a 10, TS marca error undefined
})();