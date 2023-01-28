"use strict";
(() => {
    const error = (message) => {
        //never significa que nunca va a terminar de ejecutarse exitosamente
        //regresa un never o un number
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error('Auxilio!');
    console.log('Hola Mundo!');
})();
//# sourceMappingURL=never.js.map