"use strict";
(() => {
    //En ES6, se puede definir el tipo de retorno de una función en la misma declaración de la función
    const addNumbers = (a, b) => a + b;
    const greet = (name) => 'Hola ' + name;
    const saveTheWorld = () => 'El mundo está salvado';
    //let myFunction;//myFunction es de tipo any
    let myFunction; //myFunction es una función de tipo number
    //Esta código comentado corresponde a una función que retorna un número
    //de la variable let myFunction de tipo any	 comentada más arriba
    //*myFunction = 10; //por lo que myFunction puede ser un número
    //*console.log({myFunction});
    //Es posible referenciar una función a una variable de tipo any como en el siguiente ejemplo:
    myFunction = addNumbers; //por lo que myFunction puede ser una función ya que es un tipo de dato any
    console.log(myFunction(5, 9));
    //En este ejemplo estamos referenciando a la función greet a la variable myFunction
    //myFunction = greet; 
    //console.log(myFunction('Daniel'));
    //myFunction = greet; 
    //console.log(myFunction('Daniel'));
})();
//# sourceMappingURL=function-type.js.map