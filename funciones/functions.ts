(()=>{

    const hero: string = 'Flash';

    function returnName():string{ //La función retorna un string
        return hero;
    }

    const activateBatisignal = ():string => {
        //Aún sin asignar el tipo de dato, 
        //TS infiere que es una función que retorna un string
        return 'Batiseñal activada';
    }

    console.log(typeof activateBatisignal);

    const heroName = returnName();



})()