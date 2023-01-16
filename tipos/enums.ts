(()=>{

    //Ayudan a trabajar con valores que tengan un sentido semántico fáciles de entender, por ejemplo: un valor que puede ser de uno de los siguientes estados: 'pendiente', 'en progreso', 'completado'

    //Las enumeraciones nos permiten manejar números como si fueran strings, es decir, podemos asignarles un nombre a cada uno de los valores que pueden tomar

    enum AudioLevel{
        min = 1,
        medium, //Si no agregamos un valor, por defecto toma el valor del anterior + 1
        max = 10
    }

    let currentAudio:AudioLevel = AudioLevel.max;

    console.log(currentAudio); //1
    console.log(AudioLevel); //medium
})()