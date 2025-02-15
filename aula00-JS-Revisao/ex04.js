function exibirDetalhesProduto(produto){
    return `Produto: ${produto.nome}, Preço: R$${produto.preco.toFixed(2)},
    Estoque: ${produto.estoque} unidades. `;
}

const produto = {
    nome: "Café",
    preco: 14.90,
    estoque: 100 
};

console.log(exibirDetalhesProduto(produto));

//ForEach
const numeros = [15,25,35,40,55,60];
numeros.forEach(num => {
    console.log(`Numero: ${num}`);
});


const dobrado = numeros.map(num => num*2);
console.log(dobrado);
console.log(numeros);


//filter

const maioresQue30 = numeros.filter(num => num > 30);
console.log(maioresQue30);


//find

const maiorQue40 = numeros.find(num => num > 40);
console.log(maiorQue40);


//every
const todosMaiores = numeros.every(num => 10);
console.log(todosMaiores);


//some
const existeMaior = numeros.some(num => num > 50);
console.log(existeMaior);