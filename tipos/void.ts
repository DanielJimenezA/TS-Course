(()=> {

function callBatman():void{//Se devuelve un tipo void, que significa que no devuelve nada
//si no tiene un return implícito, el tipo de retorno es undefined
//return;
}
const callSuperman =():void=> {
    //devuelve una función que no devuelve nada
}
const a = callBatman();
console.log(a); //undefined
})()