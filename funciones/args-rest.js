"use strict";
(() => {
    const fullName = (firstName, ...restDeArgs) => {
        return `${firstName} ${restDeArgs.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent', 'Otro argumento');
    console.log({ superman });
})();
//# sourceMappingURL=args-rest.js.map