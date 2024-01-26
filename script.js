let num = prompt("Digite um numero");
num = Number(num)
let numeroTitulo = document.getElementById('numero-titulo');
let texto = document.getElementById ('texto');

numeroTitulo.innerHTML = num;
texto.innerHTML = `Seu numero + 2 é igual a ${num + 2} <br>`;
texto.innerHTML += (`A raiz quadrada do seu numero é ${Math.sqrt(num)} <br>`);
texto.innerHTML += (`O ${num} é inteiro? ${Number.isInteger(num)} <br>`)
texto.innerHTML += (`O ${num} é NaN? ${isNaN(num)} <br>`)
texto.innerHTML += (`Arredondando para baixo ${Math.floor(num)} <br>`)
texto.innerHTML += (`Arredondando para cima ${Math.ceil(num)} <br>`)
texto.innerHTML += (`Com duas casas decimais ${num.toFixed(2)}`)









