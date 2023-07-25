let alturaPedro = 1.50;
let alturaLucas = 1.10;
let ano = 0;

while (alturaLucas <= alturaPedro) {
  alturaPedro += 0.02; 
  alturaLucas += 0.03;
  ano++;
}

document.write(`Irá levar ${ano} anos para terem a mesma altura.<br>`);

alturaPedro = 1.50;
alturaLucas = 1.10;
ano = 0;

while (alturaLucas <= alturaPedro) {
  alturaPedro += 0.02; 
  alturaLucas += 0.03; 
  ano++;
}

document.write(`Irá levar ${ano} anos para Lucas ultrapassar Pedro em altura.`);
