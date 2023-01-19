(() => {

  // Tipos
  const batman: string = 'Bruce';
  const superman: string = 'Clark';

  const existe: boolean = false;

  // Tuplas
  const parejaHeroes: [string, string] = [batman, superman];
  const villano: [string, number, boolean] = ['Lex Lutor', 5, true];

  // Arreglos
  const aliados: string[] = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
  aliados.push('Spiderman');

  //Enumeraciones
  enum powerHero{
    aquaman =0,
    Batman = 1,
    Flash = 5,
    Superman = 100
  }
  //La variable es igual a la enumeración y el valor que tiene respectivamente
  const fuerzaFlash = powerHero.Flash;
  const fuerzaSuperman = powerHero.Superman;
  const fuerzaBatman = powerHero.Batman;
  const fuerzaAcuaman = powerHero.aquaman;

  // Retorno de funciones
  function activar_batiseñal(): string {
    return 'activada'; //Es una función con tipo 
    //string ya que retorna un string
  }

  function pedir_ayuda(): void {
    console.log('Auxilio!!!');
  }// es una finción que no retorna nada

  // Aserciones de Tipos
  const poder: any = '100';
  const largoDelPoder: number = (poder as string).length;
  console.log(largoDelPoder);
 //Haciendo el casteo de tipo any a string, podemos acceder a las propiedades de string

})()

