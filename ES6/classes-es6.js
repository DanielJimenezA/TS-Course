(() => {

    class Avenger {
        //Las propiedades de una clase en js se declaran en el constructor
        //además de ser publicas, se pueden declarar como privadas o protegidas
        name;
        power;
        //No podemos saber los tipos de las propiedades de una clase

        constructor(name = 'No name', power = 0) {
            //Establecemos los valores de las propiedades
            this.name = name;
            this.power = power;
        }    
}

const hulk = new Avenger('Hulk', 1500);
console.log(hulk);

}) ();