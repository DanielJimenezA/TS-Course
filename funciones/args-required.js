"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        if (!firstName) {
            throw new Error('firstName is required');
        }
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Bruce', 'Wayne');
    console.log({ name });
})();
//# sourceMappingURL=args-required.js.map