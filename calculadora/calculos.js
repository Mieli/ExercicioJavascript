function somar(numero1, numero2){
    return numero1 + numero2;
}
function subtrair(numero1, numero2){
    return numero1 - numero2;
}
function multiplicar(numero1, numero2){
    return numero1 * numero2;
}

function dividir(numero1, numero2){
    if (numero1 === 0 ){
        return "Divisão por Zero";
    }else {
        return numero1 / numero2;
    }
}

function calularMedia(valor1, valor2, valor3){
    //return ( valor1 + valor2 + valor3 ) / 3;
    return dividir((valor1 + valor2 + valor3), 3);
}

module.exports ={
    somar,
    subtrair,
    multiplicar,
    dividir,
    calularMedia
}