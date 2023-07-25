const multiplosTres = [];
const multiplosCinco = [];

for (let i = 1; i <= 250; i++) {

  if (i % 3 === 0) {
    multiplosTres.push(i);
  }

  if (i % 5 === 0) {
    multiplosCinco.push(i);
  }
}

document.write("<h3>Múltiplos de 3:</h3>");
document.write(multiplosTres.join(", "));

document.write("<h3>Múltiplos de 5:</h3>");
document.write(multiplosCinco.join(", "));