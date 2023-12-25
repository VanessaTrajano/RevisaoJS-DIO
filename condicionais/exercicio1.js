
// Faça um programa para calcular o valor de uma viagem.

// Você terá 5 variáveis. Sendo elas:
//  1 - Preço do etanol;
//  2 - Preço do gasolina;
//  3 - O tipo de combustível que está no seu carro;
//  4 - Gasto médio de combustível do carro por KM;
//  5 - Distância em KM da viagem;

// Imprima no console o valor que será gasto para realizar esta viagem.

const precoGasolina = 6.66;
const precoEtanol = 5.79;
let gastoCombustivel_KmPorLitro, distanciaViagemEmKM;
gastoCombustivel_KmPorLitro = 10;
distanciaViagemEmKM = 100;
let combustivelUsado = "etanol";

let litrosGastos = distanciaViagemEmKM / gastoCombustivel_KmPorLitro;

let valorGasto;

if (combustivelUsado === "etanol") {
  valorGasto = litrosGastos * precoEtanol;
} else {
  valorGasto = litrosGastos * precoGasolina;
}

console.log(valorGasto.toFixed(2));