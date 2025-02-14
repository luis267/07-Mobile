//Exemplo 1: Variaveis(var, let e const)

//usando var(escopo global/função)

var nome = "Luis";
console.log(nome);

if (true){
    var nome = "Maria";
    console.log(nome);//Maria
}

console.log(nome);

let idade = 34;
console.log(idade);
if(true){
    let idade = 10;
    console.log(idade);
}
console.log(idade);

//const
const PI = 3.14;
console.log(PI)
if(true){
    const PI = 3.14159;
    console.log(PI);
}
console.log(PI);
