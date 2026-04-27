function mostrarMensagem() {
  const mensagem = document.getElementById("mensagem");

  mensagem.innerText =
    "O futuro do agro depende da união entre tecnologia, produtividade e preservação ambiental! 🌱";
}

/* Efeito extra: destacar menu ao rolar */
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");

  if (window.scrollY > 50) {
    nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
  } else {
    nav.style.boxShadow = "none";
  }
});
