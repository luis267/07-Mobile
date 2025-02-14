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
const numeros = [1,2,3,4,5,6,7,8,9,10];
numeros.forEach(num => {
    console.log(`Numero: ${num}`);
});


const dobrado = numeros.map(num => num*2);
console.log(dobrado);
console.log(numeros);
