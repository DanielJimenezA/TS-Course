(() => {

    let a = "Daniel";
    console.log(a);

function getName() {
    console.log('Viejo getName');
}

getName = () => {
    console.log('Nuevo getName')};
getName();
})()