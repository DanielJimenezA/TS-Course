"use strict";
(() => {
    //No es posible enviar un argumento opcional antes de uno obligatorio
    //En el caso de upperCase, si no enviamos un valor, el valor por defecto será false, en otras 
    //palabras, el es un argumento opcional pero tiene un valor por defecto  que es "false"
    const fullName = (firstName, lastName, upperCase = false) => {
        if (upperCase) {
            return `${firstName} ${lastName || 'Valor_indefinido'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || 'Valor_indefinido'}`;
        }
    };
    const name = fullName('Bruce', 'Wayne', true);
    console.log({ name });
})();
//# sourceMappingURL=args-default.js.map