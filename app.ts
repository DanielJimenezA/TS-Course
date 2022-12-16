
// let msg:string = 'Hola mundo';
// console.log(msg);

// const hero = {
//     name: 'Batman',
//     age:45
// }

// //hero.age = '50'; No es posible asignar un string a un number, 
// //error que si marca TS

// hero.age = 50;

// console.log(hero.age+1);
const a = 10; // es un tipo número que no puede cambiar
let b = 10; // es un tipo número que puede cambiar

const c:number = 10; // es un tipo numérico
let d:number = 10; // es un tipo numérico

b = 3.1416;
// b={};       //No se pueden asignar valores diferentes ya que el tipo de 
// b=[];    //variable es un número
// b=true;

function sayHello(msg: string){ // Al darle el tipo string vamos a tener los métodos del tipo string
    console.log(msg + '' + 'Daniel');
    msg.charAt(0);
}

//Función anónima
(()=>{
    const e:number = 19;
    console.log(a);
})()
