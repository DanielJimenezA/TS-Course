(()=>{
    //La variable heroe es de tipo object
    type Heroe = {
        name:string,
        age?: number,
        powers:number[],
        getName?:()=>string
    }

    //MyCustomVariable puede ser de tipo string, number o Heroe que es de un tipo personalizado
    let myCustmVariable: string | number | Heroe = 'Namor';
    myCustmVariable = 123;
    console.log(typeof myCustmVariable);

    myCustmVariable = {
        name: 'Tony Stark',
        age: 50,
        powers: [1]
    }
    console.log(typeof myCustmVariable);

})()