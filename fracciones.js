const fracciones = (function(x,y,z,a) {
    const valor =x;
    const valor2 =y;
    const valor3 =z;
    const valor4 =a;
    function suma (valor,valor2,valor3,valor4){
        if(valor2==valor4){
            return valor+valor3 + "/" + valor2;
        }else{
            return (valor*valor4)+(valor3*valor2) +"/" + valor2*valor4
        };
    };
    function resta (valor,valor2,valor3,valor4){
        if(valor2==valor4){
            return valor-valor3 + "/" + valor2;
        }else{
            return (valor*valor4)-(valor3*valor2) +"/" + valor2*valor4
        };
    }
    function division (valor,valor2,valor3,valor4){
        return (valor*valor4)+"/"+(valor3*valor2);
    }
    function multiplicacion (valor,valor2,valor3,valor4){
        return (valor*valor3) + "/" + (valor2*valor4);
    }
    return {
        suma,
        resta,
        division,
        multiplicacion
    }
})();



console.log(fracciones.suma(1,2,3,2));

console.log(fracciones.resta(3,2,3,3));

console.log(fracciones.division(3,4,5,6));

console.log(fracciones.multiplicacion(4,12,4,53)); 