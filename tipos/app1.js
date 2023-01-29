"use strict";
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    aliados.push('Spiderman');
    let powerHero;
    (function (powerHero) {
        powerHero[powerHero["aquaman"] = 0] = "aquaman";
        powerHero[powerHero["Batman"] = 1] = "Batman";
        powerHero[powerHero["Flash"] = 5] = "Flash";
        powerHero[powerHero["Superman"] = 100] = "Superman";
    })(powerHero || (powerHero = {}));
    const fuerzaFlash = powerHero.Flash;
    const fuerzaSuperman = powerHero.Superman;
    const fuerzaBatman = powerHero.Batman;
    const fuerzaAcuaman = powerHero.aquaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
//# sourceMappingURL=app1.js.map