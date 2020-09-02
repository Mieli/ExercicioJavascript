const moduloCalculo = require('./calculos');

describe('Suit de Teste de Calculos', () => {

    it('Quando eu executo a função somar passando os valores 2 e 3, o resultado deve ser o valor de 5 ', () => {
       expect(moduloCalculo.somar(2, 3)).toBe(5);
    });

    it('Quando eu executo a função subtrair passando os valores 3 e 2, o resultado deve ser o valor de 1 ', () => {
       expect(moduloCalculo.subtrair(3, 2)).toBe(1);
    });

    it('Quando eu executo a função subtrair passando os valores 5 e 7, o resultado deve ser o valor de -2 ', () => {
        expect(moduloCalculo.subtrair(5, 7)).toBe(-2);
     });

    it('Quando eu executo a função multiplicar passando os valores 2 e 3, o resultado deve ser o valor de 6 ', () => {
       expect(moduloCalculo.multiplicar(2, 3)).toBe(6);
    });

    it('Quando eu executo a função dividir passando os valores 6 e 2, o resultado deve ser o valor de 3 ', () => {
        expect(moduloCalculo.dividir(6, 2)).toBe(3);
    });

    it('Quando eu executo a função dividir passando os valores 0 e 2, o resultado deve ser uma mesagem de "Divisão por Zero" ', () => {
        expect(moduloCalculo.dividir(0, 2)).toBe("Divisão por Zero");
    });

    it('Quando eu executo a função calcular média passando os valores 10, 8 e 9, o resultado deve ser o valor 9 ', () => {
        expect(moduloCalculo.calularMedia(10, 8, 9)).toBe(9);
    });

    it('Quando eu executo a função calcular resto passando os valores 5 e 2, o resultado deve ser o valor 1 ', () => {
        expect(moduloCalculo.calcularResto(5, 2)).toBe(1);
    });
})