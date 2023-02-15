(()=>{

    class Avenger {
        nombre:string;
        equipo:string;
        nombreReal:string;
        puedePelear:boolean;
        peleasGanadas:number;

        constructor(nombre:string, equipo:string, nombreReal:string){
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
        }
    }

    const antman:Avenger = new Avenger('Antman', 'Cap', 'Scott Lang');

    console.log(antman);

})()
