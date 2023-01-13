(()=>{
    let avenger:any = 123;
    let exists;
    let power;
    //Si establecemos una variable let sin especificar el tipo Ts la toma como any, si fuera una constante Ts la toma como un error, ya que debe estar inicializada.

    avenger = 'Doctor Strange';
    console.log(avenger.charAt(0)); //charAt es un método de tipo string con el cual podemos acceder a la posición de un string
    console.log((avenger as string).charAt(1)); //Otra forma de acceder a los métodos de tipo string es realizar un casting de tipo con la palabra reservada as
    

    avenger = 150.55555211;
    console.log(avenger.toFixed(2)); //toFixed es un método de tipo number con el cual podemos especificar la cantidad de decimales que queremos que nos muestre
    console.log((<number>avenger).toFixed(3)); //Otra forma

    
    console.log(exists); //undefined
    console.log(power); //undefined

})()