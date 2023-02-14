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
    //Con la palabra reservada extends podemos heredar de una clase
    class FlyingAvenger extends Avenger {
        flying; //No sabemos el tipo, sólo podemos especificarlo en el constructor
        constructor(name, power) {
            super(name, power); //Llamamos al constructor de la clase padre
            this.flying = true; //Es un ejemplo en el que podemos establecer el tipo
        }
    }
    const hulk = new Avenger('Hulk', 1500);
    const falcon = new FlyingAvenger('Falcon', 500);
    
    console.log(hulk);
    console.log(falcon);

    //El super constructor es el constructor de la clase padre

    //Nota: En JS no tenemos control sobre las propiedades de una clase ya que se
    //pueden agregar indiscriminadamente sin ser utilizadas realmente, en TS sí

})();