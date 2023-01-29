"use strict";
(() => {
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