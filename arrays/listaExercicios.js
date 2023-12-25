// 1) Crie um programa que dado um número imprima a sua tabuada.

let numero = 5;

for (let i = 0; i < 11; i++) {
  console.log(numero + " x " + i + " = " + numero * i);
}

// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    console.log(numeros[i]);
  }
}

// 3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

let nomes = [
  "Leandro",
  "Maria",
  "Vanessa",
  "Nicolas",
  "vitória",
  "marcos",
  "pedro",
];

for (let i = 0; i < nomes.length; i++) {
  if (nomes[i].charAt(0).toLowerCase() === "v") {
    console.log(nomes[i]);
  }
}

// 4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;

let listaPares = [];

for (let i = 10; i < 51; i++) {
  if (i % 2 === 0) {
    listaPares.push(i);
  }
}

console.log(listaPares);

// 5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
//    Ex de lista = [2, 7, 3, 8, 10, 4]

let medias = [2, 7, 3, 8, 10, 4];

for (let i = 0; i < medias.length; i++) {
  if (medias[i] < 5) {
    console.log(medias[i]);
  }
}

// 6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
//    Ex de lista de notas = [2, 7, 3, 8, 10, 4]

let notasAluno = [2, 7, 3, 8, 10, 4];

let maior = 0;

for (let i = 0; i < notasAluno.length; i++) {
  if (notasAluno[i] > maior) {
    maior = notasAluno[i];
  }
}

console.log(maior);
