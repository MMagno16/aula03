var numeroSecreto = parseInt(Math.random() * 10 + 1);
var tentativas = 0;
console.log(tentativas);
function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (tentativas == 3) {
    elementoResultado.innerHTML =
      "Você tentou 3 vezes e não acertou! Mas tente novamente! O número era " +
      numeroSecreto;
  } else {
    if (chute == numeroSecreto) {
      tentativas += 1;
      elementoResultado.innerHTML =
        "Você acertou com " + tentativas + " tentativas.";
    } else if (chute > 10 || chute < 0) {
      elementoResultado.innerHTML = "Tentativas inválidas!";
    } else {
      if (numeroSecreto > chute && tentativas < 3) {
        elementoResultado.innerHTML =
          "Você errou. O número secreto é MAIOR que o número que você digitou! Tente mais uma vez!";
      } else if (numeroSecreto < chute && tentativas < 3) {
        elementoResultado.innerHTML =
          "Você errou. O número secreto é MENOR que o número que você digitou!";
      }
      tentativas += 1;
      if (tentativas >= 3) {
        elementoResultado.innerHTML =
          "Você errou 3 vezes. Que pena! O número era " +
          numeroSecreto;
      }
    }
  }
}

// diferença entre == e ===
//   == é usado para comparação entre duas variáveis, independentemente do TIPO de dados da variável.

//   ===  é usado para a comparação entre duas variáveis, mas isso irá verificar o tipo estrito, o que significa que ele irá verificar o tipo de dados e comparar dois valores.
