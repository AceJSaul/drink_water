const agua_streak = document.getElementsByClassName("agua_circle");
const litros = document.getElementById("litros");
const botao = document.getElementById("drink");
const painel = document.getElementById("painel");
const dia_hoje = document.getElementById("d6")

for (let i = 0; i < agua_streak.length; i++) {
  agua_streak[i].onclick = function () {
    if (this.style.backgroundColor === "grey") {
      // Verifique se é cinza
      this.style.backgroundColor = "#0b93f2"; // Mude a cor para azul
      console.log("oi");
    } else {
      this.style.backgroundColor = "grey"; // Volte para a cor cinza se não for cinza
    }
  };
}

botao.onclick = function () {
  if (Number(litros.textContent) < 2) {
    let novo_litro = Number(litros.textContent) + 0.2;

    if (novo_litro == 2.0) {
      painel.textContent = `You drank your daily goal!`;
      dia_hoje.style.backgroundColor = "#0b93f2"
    } else {
      novo_litro = novo_litro.toFixed(1);
      litros.textContent = `${novo_litro}`;
    }
  }
};
