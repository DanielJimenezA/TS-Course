"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    aliados.push('Spiderman');
    //Enumeraciones
    let powerHero;
    (function (powerHero) {
        powerHero[powerHero["aquaman"] = 0] = "aquaman";
        powerHero[powerHero["Batman"] = 1] = "Batman";
        powerHero[powerHero["Flash"] = 5] = "Flash";
        powerHero[powerHero["Superman"] = 100] = "Superman";
    })(powerHero || (powerHero = {}));
    //La variable es igual a la enumeración y el valor que tiene respectivamente
    const fuerzaFlash = powerHero.Flash;
    const fuerzaSuperman = powerHero.Superman;
    const fuerzaBatman = powerHero.Batman;
    const fuerzaAcuaman = powerHero.aquaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada'; //Es una función con tipo 
        //string ya que retorna un string
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    } // es una finción que no retorna nada
    // Aserciones de Tipos
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
    //Haciendo el casteo de tipo any a string, podemos acceder a las propiedades de string
})();
