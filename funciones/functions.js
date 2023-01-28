"use strict";
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatisignal = () => {
        //Aún sin asignar el tipo de dato, 
        //TS infiere que es una función que retorna un string
        return 'Batiseñal activada';
    };
    console.log(typeof activateBatisignal);
    const heroName = returnName();
})();
//# sourceMappingURL=functions.js.map