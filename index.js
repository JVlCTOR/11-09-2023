// const quantidadeVogal = (nome) => {
//   let soma = 0;

//   for (const letra of nome) {
//     if (
//       letra.toLowerCase() === "a" ||
//       letra.toLowerCase() === "e" ||
//       letra.toLowerCase() === "i" ||
//       letra.toLowerCase() === "o" ||
//       letra.toLowerCase() === "u"
//     ) {
//       soma += 1;
//     }
//   }
//   console.log(soma);
// };
// quantidadeVogal("Joao Victor");

// function mediaNota(){
//     let soma = 0
//     let notas = [10, 10 , 10 , 10 , 10, 10, 10 , 9 , 10, 10]
//     for(const nota of notas){
//         soma +=  nota
//     }
//     console.log(soma / notas.length);
// }
// mediaNota()
// let pessoa = { nome: "João", idade: 0, email: "joao@gmail.com" };

// function propriedadeDoObjeto(pessoa) {
//     for(const prop in pessoa)
//     console.log(pessoa[prop]);
// }
// propriedadeDoObjeto(pessoa)

// let alunos = [
//              {nome:'aluno1', idade: 19, nota: 10},
//              {nome:'aluno2', idade: 19, nota: 8},
//              {nome:'aluno3', idade: 19, nota: 7},
//              {nome:'aluno4', idade: 19, nota: 3},
//             ]

// function filtrarObjeto(alunos){
//     for(const aluno in alunos){
//         if(alunos[aluno].nota >= 7){
//             console.log(alunos[aluno].nome);
//         }
//     }
// }
// filtrarObjeto(alunos)
const vendas = [
    {
      id: 1,
      produto: "Computador",
      quantidade: 15,
      valor: 2900,
    },
    {
      id: 2,
      produto: "Monitor",
      quantidade: 10,
      valor: 400,
    },
    {
      id: 3,
      produto: "Cadeira",
      quantidade: 5,
      valor: 799,
    },
    {
      id: 4,
      produto: "Teclado",
      quantidade: 19,
      valor: 130,
    },
    {
      id: 5,
      produto: "Mouse",
      quantidade: 30,
      valor: 70,
    },
  ];
  
  /**
   * Função - parâmetro (array de objetos)
   * Calcular o valor total de vendas realizado de todos os protudos juntos
   * Calcular o valor total por produto
   * console.log(Valor de venda mensal: R$ VALOR TOTAL de todos os produtos)
   * console.log(Valor de venda PRODUTO: R$ VALOR TOTAL por PRODUTO)
   */
  function calcVendas(vendas){
    let total = 0
    for(const venda of vendas){
        let soma = venda.quantidade * venda.valor
        total += soma
    }
    console.log(`o total é de todos produtos é R$ :${total}`);
  }
  calcVendas(vendas)

