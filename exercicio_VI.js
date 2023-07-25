let contagem = "";
for (let i = 30; i >= 1; i--) {
  let validaPrimo = true;

  if (i > 1) {
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        validaPrimo = false;
        break;
      }
    }
  } else {
    validaPrimo = false;
  }

  contagem += validaPrimo ? `[${i}] ` : `${i} `;
}

document.write(contagem);