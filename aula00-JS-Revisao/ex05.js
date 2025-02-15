const cores = ['azul','verde','vermelho'];
for(const cor of cores){
    console.log(cor);
}

const pessoa = {
    nome: "Luis ",
    idade:22,
    usuario: "Aluno "
};

for(const chave in pessoa){
    console.log(`${chave}: ${pessoa[chave]}`);
};
//map
const mapa = new Map();
mapa.set('nome','Luis');
mapa.set('idade',22);
console.log(mapa.get('nome'));
console.log(mapa.get('idade'));

//weakMap

const obj = {id: 1};
const weakmap = new WeakMap();
weakmap.set(obj, 'aluno 1');
console.log(weakmap.get(obj));