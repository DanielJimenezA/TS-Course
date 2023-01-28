"use strict";
(() => {
    //Ayudan a trabajar con valores que tengan un sentido semántico fáciles de entender, por ejemplo: un valor que puede ser de uno de los siguientes estados: 'pendiente', 'en progreso', 'completado'
    //Las enumeraciones nos permiten manejar números como si fueran strings, es decir, podemos asignarles un nombre a cada uno de los valores que pueden tomar
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.max;
    console.log(currentAudio); //1
    console.log(AudioLevel); //medium
})();
//# sourceMappingURL=enums.js.map