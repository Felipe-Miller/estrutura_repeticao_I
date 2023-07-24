let menorAltura = Number.MAX_VALUE;
let maiorAltura = Number.MIN_VALUE;

for (let i = 1; i <= 15; i++) {
  let altura;
  do {
    altura = parseFloat(prompt(`Insira a altura da pessoa em ${i} (em metros):`));
    if (isNaN(altura)) {
      alert('Valor inválido, insira um número!');
    }
  } while (isNaN(altura));

  if (altura < menorAltura) {
    menorAltura = altura;
  }

  if (altura > maiorAltura) {
    maiorAltura = altura;
  }
}

console.log(`A menor altura é: ${menorAltura}m.`);
console.log(`A maior altura é: ${maiorAltura}m.`);