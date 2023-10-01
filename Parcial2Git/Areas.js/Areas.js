//Deje las operaciones de la clase para poder tener con que apoyarme
function areaCuadrado(lado) {
    return lado*lado;
}

function areaTriangulo(base,altura) {
    return ((base*altura)/2);
}

function LongitudCircunferencia(radio){
    return 2*3.1416*radio;
}

function FahrenheitACelsius(Fahrenheit){
    return (Fahrenheit - 32) * (5 / 9);
}

module.exports.areaCuadrado=areaCuadrado;
module.exports.areaTriangulo=areaTriangulo;
module.exports.LongitudCircunferencia=LongitudCircunferencia;
module.exports.FahrenheitACelsius=FahrenheitACelsius;
/*console.log(_dirname);
console.log(_filename);*/
console.log(module);