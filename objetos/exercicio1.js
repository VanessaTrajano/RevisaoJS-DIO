// 1) Crie uma classe para representar carros.
// Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
// Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor
// gasto em reais para realizar este percurso.

class Carro {
  constructor(marca, cor, gastoMedio__Km_L) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedio__Km_L = gastoMedio__Km_L;
  }

  calculaPrecoPercurso(quantKm, precoCombustivel) {
    let litrosGastos = quantKm / this.gastoMedio__Km_L;
    let precoPercurso = litrosGastos * precoCombustivel;
    return precoPercurso;
  }
}

const car = new Carro("fiat", "azul", 10);

console.log(car.calculaPrecoPercurso(100, 5.99).toFixed(2));
