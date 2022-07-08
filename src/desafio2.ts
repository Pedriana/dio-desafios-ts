/**
* >>> Desafios sobre Typescript no bootcamp DIO-santarder
* Desafio 02:
* > Como podemos melhorar o esse código usando TS? 
*/
/**
var pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

var pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

var pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};  
*/

enum Profissao {
  Atriz,
  Padeiro
}

type Pessoa = {
  nome: string,
  idade: number,
  trabalho: Profissao
}

let pessoa1: Pessoa = {
  nome: 'Maria Paula',
  idade: 34,
  trabalho: Profissao.Atriz
};

let pessoa2: Pessoa = {
  nome: 'Ayla Elisa',
  idade: 19,
  trabalho: Profissao.Atriz
};

let pessoa3: Pessoa = {
  nome: 'Pedro Yuri',
  idade: 22,
  trabalho: Profissao.Padeiro
};
console.log();
console.log('----------------- SAÍDA -------------------------')
console.log(`Nome: ${pessoa1.nome} | Idade:${pessoa1.idade} | Trabalho: ${pessoa1.trabalho === 0 ? 'Atriz': 'Padeiro'}`);
console.log(`Nome: ${pessoa2.nome} | Idade:${pessoa2.idade} | Trabalho: ${pessoa2.trabalho === 0 ? 'Atriz': 'Padeiro'}`);
console.log(`Nome: ${pessoa3.nome} | Idade:${pessoa3.idade} | Trabalho: ${pessoa3.trabalho === 0 ? 'Atriz': 'Padeiro'}`);
console.log('-------------------------------------------------')