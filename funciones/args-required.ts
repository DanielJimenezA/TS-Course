(()=>{

    //Definimos una función flecha que recibe dos parámetros de tipo string y retorna un string
    //Debemos evitar que los parámetros de la función sean opcionales, es decir, que no tengan un valor por defecto tipo any'
    const fullName=(firstName:string, lastName:string|boolean):string=>{
        if(!firstName){ 
            throw new Error('firstName is required');
        }   
        //retornmamos un string concatenando los parámetros para nombre y apellido
        return `${firstName} ${lastName}`;
    }
    const name = fullName('Bruce', 'Wayne');
    //Las llaves nos permiten ver el nombre de la propiedad y su valor en la consola
    console.log({name});

})()