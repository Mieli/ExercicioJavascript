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
    if (numero2 === 0 ){
        return "Divisão por Zero";
    }else {
        return numero1 / numero2;
    }
}

function calularMedia(valor1, valor2, valor3){
    return dividir((valor1 + valor2 + valor3), 3);
}

function calcularResto(valor1, valor2){
    return valor1 % valor2;
}

function calcularPotencia(valor1, valor2){
    return valor1 ** valor2;
}

function calcularPerimetroRetangulo(largura, altura){
    return (largura + altura) * 2;
}

module.exports ={
    somar,
    subtrair,
    multiplicar,
    dividir,
    calularMedia,
    calcularResto, 
    calcularPotencia,
    calcularPerimetroRetangulo
}