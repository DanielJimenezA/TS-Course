"use strict";
(() => {
    //MyCustomVariable puede ser de tipo string, number o Heroe que es de un tipo personalizado
    let myCustmVariable = 'Namor';
    myCustmVariable = 123;
    console.log(typeof myCustmVariable);
    myCustmVariable = {
        name: 'Tony Stark',
        age: 50,
        powers: [1]
    };
    console.log(typeof myCustmVariable);
})();
