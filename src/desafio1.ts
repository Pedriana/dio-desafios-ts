/**
* >>> Desafios sobre Typescript no bootcamp DIO-santarder
* Desafio 01:
* > Como podemos rodar isso em um arquivo .ts sem causar erros?
*
*   let employee = {};
*   employee.code = 10;
*   employee.name = "John";
*/

// Solução 1
const funcionario = {
  codigo: 10,
  nome: 'João'
};

console.log(`Código: ${funcionario.codigo} | Nome:${funcionario.nome}`);

// Solução 2
const funcionario2: {codigo: number, nome: string} = {
    codigo: 11,
    nome: 'Maria'
  }
console.log(`Código: ${funcionario2.codigo} | Nome:${funcionario2.nome}`);

// Solução 3
interface Funcionario {  
    codigo: number,
    nome: string
};
const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 12;
funcionarioObj.nome = 'Pedro Yuri';

console.log(`Código: ${funcionarioObj.codigo} | Nome:${funcionarioObj.nome}`);

// Solução 4
const funcionarioObj2: Funcionario = {
  codigo: 13,
  nome: 'Emily Ketery'
} 
console.log(`Código: ${funcionarioObj2.codigo} | Nome:${funcionarioObj2.nome}`);