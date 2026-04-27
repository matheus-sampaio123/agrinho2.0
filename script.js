
// ===== VARIÁVEIS =====
let contador = 0;

// ===== INTRO =====
document.getElementById("btnIntro").onclick = () => {
  alert("Tema: Agro forte, futuro sustentável 🌱");
};

// ===== PRODUÇÃO =====
document.getElementById("btnProducao").onclick = () => {
  document.getElementById("textoProducao").textContent =
    "A produção agrícola utiliza tecnologia para aumentar a eficiência e reduzir impactos ambientais.";
};

// ===== MEIO AMBIENTE =====
document.getElementById("btnAmbiente").onclick = () => {
  document.getElementById("textoAmbiente").textContent =
    "O desmatamento e uso consciente da água são desafios importantes para o futuro.";
};

// ===== OPINIÃO USUÁRIO =====
document.getElementById("btnOpniao").onclick = () => {
  let texto = document.getElementById("opniao").value;
  document.getElementById("saida").textContent = "Sua opinião: " + texto;
};

// ===== CONTADOR =====
const contadorEl = document.getElementById("contador");

document.getElementById("mais").onclick = () => {
  contador++;
  contadorEl.textContent = contador;
};

document.getElementById("menos").onclick = () => {
  contador--;
  contadorEl.textContent = contador;
};

// ===== MODO ESCURO =====
document.getElementById("themeBtn").onclick = () => {
  document.body.classList.toggle("dark");
};
