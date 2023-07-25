const inteiropositivo = parseInt(prompt("Insira um valor que seja inteiro positivo:"));

let conta = "";
for (let i = 0; i <= inteiropositivo; i++) {
  conta += i + (i < inteiropositivo ? ", " : ", fim.");
}

document.write("Contagem: " + conta);