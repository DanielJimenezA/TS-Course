(()=>{
    //Este es un objeto al cual se le pueden agregar propiedades con diferentes tipos de datos
    //y TS lo infiere
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Speed", "Time Travel", "Dimensional Travel"]
    };

    //Al utilizar nuestros objetos en funciones, podemos definir el tipo de dato que reciben
    flash= {
        name: "Clark Kent",
        age: 500,
        powers: ["Super Strength", "Super Speed", "Flight", "Heat Vision", "Freeze Breath"]
        // getNombre(){
        //     return this.name;
        }

    console.log(flash);
    

})();