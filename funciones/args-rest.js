"use strict";
(() => {
    //Los argumentos rest son los argumentos que no se conocen de antemano
    //Estos argumentos se representan con tres puntos seguidos de un nombre de variable como un array
    //como se puede ver en el ejemplo, el argumento rest se representa con ...restDeArgs
    const fullName = (firstName, ...restDeArgs) => {
        return `${firstName} ${restDeArgs.join(' ')}`;
    };
    //debido a que el argumento rest es un array, podemos enviar un array como argumento
    //y será posible enviar un número indefinido de argumentos del tipo que se especificó en restDeArgs
    const superman = fullName('Clark', 'Joseph', 'Kent', 'Otro argumento');
    console.log({ superman });
})();
