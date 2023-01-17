"use strict";
(() => {
    function callBatman() {
        //si no tiene un return implícito, el tipo de retorno es undefined
        //return;
    }
    const callSuperman = () => {
        //devuelve una función que no devuelve nada
    };
    const a = callBatman();
    console.log(a); //undefined
})();
