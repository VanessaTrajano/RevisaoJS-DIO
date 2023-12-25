// 1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

// Média = (nota 1 + nota 2 + nota 3) / 3;

// Classificação:
// - Média menor que 5, reprovação;
// - Média entre 5 e 7, recuperação;
// - Média acima de 7, passou de semestre;

let notas = [];

notas[0] = 10;
notas[1] = 8;
notas[2] = 9;

soma = 0;

for (let i = 0; i < notas.length; i++) {
  soma += notas[i];
}

let media = soma / notas.length;

if (media < 5) {
  console.log("Reprovado");
} else if (media > 7) {
  console.log("Aprovado");
} else {
  console.log("Recuperação");
}

// 2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.
// Formula do IMC:
// IMC = peso / (altura * altura)
// Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.
// IMC em adultos Condição:
// - Abaixo de 18.5 Abaixo do peso;
// - Entre 18.5 e 25 Peso normal;
// - Entre 25 e 30 Acima do peso;
// - Entre 30 e 40 Obeso;
// - Acima de 40 Obsesidade Grave;

let peso = 53.9;
let altura = 1.82;

let imc = peso / (altura * altura);

if (imc < 18.5) {
  console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
  console.log("Peso normal");
} else if (imc >= 25 && imc < 30) {
  console.log("Acima do peso");
} else if (imc >= 30 && imc < 40) {
  console.log("Obeso");
} else {
  console.log("Obesidade grave");
}

// 3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
// Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
// Código Condição de pagamento:
// - À vista Débito, recebe 10% de desconto;
// - À vista no Dinheiro ou PIX, recebe 15% de desconto;
// - Em duas vezes, preço normal de etiqueta sem juros;
// - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

let preco = 100;
let pagamento = "2 vezes";
let precoFinal;

if (pagamento === "debito") {
  precoFinal = 100 - 100 * (10 / 100);
  console.log(`O pagamento foi de ${precoFinal}`);
} else if (pagamento === "dinheiro" || pagamento === "pix") {
  precoFinal = 100 - 100 * (15 / 100);
  console.log(`O pagamento foi de ${precoFinal}`);
} else if (pagamento === "2 vezes") {
  precoFinal = preco;
  console.log(`O pagamento foi de ${precoFinal}`);
} else {
  precoFinal = 100 + 100 * (10 / 100);
  console.log(`O pagamento foi de ${precoFinal}`);
}