const mensagem = require('./mensageiro');

describe('Suite de Teste Mensagens: ', () =>{
    
    it('Quando realizo a chamada da função criarMensagemPadrao devo receber uma mensagem "Esta é uma mensagem padrão"', () => {
        expect(mensagem.criarMensagemPadrao()).toBe("Esta é uma mensagem padrão");
    });

    it('Quando eu executo a funçao escreverBomdia passando como parâmetro o nome "José", então a função precisa retornar a mensagem "Bom dia José"', () => {
        expect(mensagem.escreverBomDia("José")).toBe("Bom dia José");
    });

    it('Quando eu executo a função "quemSouEu" passando como parâmetro o nome "Ana" e a profissão "Enfermeira" então a função precisa retornar a mensagem "Olá, meu nome é Ana e eu trabalho como Enfermeira"', () => {
        expect(mensagem.quemSouEu("Ana","Enfermeira")).toBe("Olá, meu nome é Ana e eu trabalho como Enfermeira");
    });

    it('Quando eu executo a função "quemSouEu" passando como parâmetro o nome "Joel" e a profissão "Programador Fullstack" então a função precisa retornas a mensagem "Olá, meu nome é Joel e eu trabalho como Programador Fullstack"', () => {
        expect(mensagem.quemSouEu("Joel", "Programador Fullstack")).toBe("Olá, meu nome é Joel e eu trabalho como Programador Fullstack");
    });

});