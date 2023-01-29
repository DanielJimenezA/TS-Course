"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        if (!firstName) {
            throw new Error('firstName is required');
        }
        return `${firstName} ${lastName || 'Valor_indefinido'}`;
    };
    const name = fullName('Bruce');
    console.log({ name });
})();
//# sourceMappingURL=args-optional.js.map