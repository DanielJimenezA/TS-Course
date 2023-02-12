"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.1215
    };
    console.log(avengers.nick, avengers.ironman, avengers.vision, avengers.activo, avengers.poder);
    const printAvenger = (_a) => {
        var { ironman } = _a, resto = __rest(_a, ["ironman"]);
        console.log(ironman, resto);
    };
    const avengersArr = ['Thor', 'Steve Rogers', 'Tony Stark'];
    const [, ironman,] = avengersArr;
    console.log(ironman);
})();
(() => {
    const ironman = {
        nombre: 'Ironman',
        weapon: 'Mark 50'
    };
    const capitan = {
        nombre: 'Capitan America',
        weapon: 'Escudo'
    };
    const spiderman = {
        nombre: 'Spiderman',
        weapon: 'Telaraña'
    };
    const avengers = [ironman, capitan, spiderman];
    for (const Avengers of avengers) {
        console.log(Avengers.nombre, Avengers.weapon);
    }
})();
(() => {
    const nombre = 'Peter';
    const getNombre = () => {
        console.log('Viejo getNombre');
    };
})();
//# sourceMappingURL=main.js.map