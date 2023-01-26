(() => {
    //Type Heroe es de tipo personalizado y se puede usar para definir otros objetos con ese 
    //mismo tipo
    type Heroe = {
        name:string,
        age?: number,
        powers:string[],
        getName?:()=>string
    }

    let flash: Heroe = {
        name: "Barry Allen",
        age: 24,
        powers: ["1", "2"]
    };
    
    let superman: Heroe = {
        name: "Barry Allen",
        age: 24,
        powers: ["Speed"],
        getName(){
            return this.name;
        }
    };
})();

