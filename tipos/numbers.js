"use strict";
(() => {
    let avengers = 10;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log("Estamos en problemas");
    }
    else {
        console.log("Nos salvamos");
    }
    //La función Number regresa un tipo número 
    avengers = Number('123A'); //Esto da como resultado un NAN, que en JS es considerado un número
    console.log({ avengers });
})();
