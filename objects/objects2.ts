(()=>{
    //Este es un objeto al cual se le pueden agregar propiedades con diferentes tipos de datos
    //y TS lo infiere

    //En los objetos en TS, no importa el orden en el que se escriban las propiedades aún
    //cuando sean de tipo opcional, p.ej. name?:string
    let flash: {name:string, age:number, powers:string[]} = {
        name: "Barry Allen",
        age: 24,
        powers: ["Speed", "Time Travel", "Dimensional Travel"]
    };

    flash = {
        name: "Clark Kent",
        age: 500,
        powers: ["Super Strength", "Super Speed", "Flight", "Heat Vision", "Freeze Breath"]
        // getNombre((){
        //     return this.name;
        // }))
    }

    

})();