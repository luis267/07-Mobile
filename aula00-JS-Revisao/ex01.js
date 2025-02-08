//Exemplo 1: Variaveis(var, let e const)

//usando var(escopo global/função)

let nome = "Luis";

if (true){
    let nome = "Maria";
    console.log(nome);//Maria
}

console.log(nome);

