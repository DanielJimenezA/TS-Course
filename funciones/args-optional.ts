(()=>{
        //El símbolo de interrogación ? nos permite que el parámetro sea opcional   
        const fullName=(firstName:string, lastName?:string|boolean):string=>{
            
        if(!firstName){ 
            throw new Error('firstName is required');
        }   
        //Con el operador || podemos asignar un valor por defecto a un parámetro opcional
        return `${firstName} ${lastName || 'Valor_indefinido'}`;
    }
    const name = fullName('Bruce');
        console.log({name});

})()