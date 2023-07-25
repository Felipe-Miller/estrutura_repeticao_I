const numero = parseInt(prompt("Insira um número:"));
const multiplicador = parseInt(prompt("Gostaria de multiplicá-lo em quantas vezes?"));

for (let vezes = 1; vezes <= multiplicador; vezes++) {
  const resultado = numero * vezes;

  document.write(`${vezes} x ${numero} = ${resultado}<br>`);
}