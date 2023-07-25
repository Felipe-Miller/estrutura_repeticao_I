let soma = 0;
let positivos = 0;
let negativos = 0;


for (let i = 1; i <= 10; i++) {
  const numero = parseFloat(prompt(`Digite o número ${i}:`));
  soma += numero;

  if (numero > 0) {
    positivos++;
  } else if (numero < 0) {
    negativos++;
  }
}

const media = soma / 10;

const percentualPositivos = (positivos / 10) * 100;
const percentualNegativos = (negativos / 10) * 100;

document.write(`Média: ${media.toFixed(2)}<br>`);
document.write(`Quantidade de valores positivos: ${positivos}<br>`);
document.write(`Quantidade de valores negativos: ${negativos}<br>`);
document.write(`Percentual de valores positivos: ${percentualPositivos.toFixed(2)}%<br>`);
document.write(`Percentual de valores negativos: ${percentualNegativos.toFixed(2)}%<br>`);