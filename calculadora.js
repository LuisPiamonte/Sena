

const calculadora = (function(x,y) {
    const valor =x;
    const valor2 =y;
    function suma (valor,valor2){
        return valor + valor2;
    };
    function resta (valor,valor2){
        return valor - valor2;
    }
    function division (valor,valor2){
        return valor / valor2;
    }
    function multiplicacion (valor,valor2){
        return valor * valor2;
    }
    return {
        suma,
        resta,
        division,
        multiplicacion
    }
})();

console.log(calculadora.suma(4,3));

console.log(calculadora.resta(4,2));

console.log(calculadora.division(5,2));

console.log(calculadora.multiplicacion(5,2)); 