const overlay = document.querySelector("#overlay");
const minhasRedes = document.querySelector(".minhas-redes");

function abrirModal() {
  overlay.classList.add("active");
  minhasRedes.classList.add("active");
}

function fecharModal() {
  overlay.classList.remove("active");
  minhasRedes.classList.remove("active");
}