// DARK MODE
const btn = document.getElementById("themeBtn");
btn.onclick = () => {
document.body.classList.toggle("dark");
localStorage.setItem("theme", document.body.classList.contains("dark"));
};

if(localStorage.getItem("theme")==="true"){
document.body.classList.add("dark");
}

// MENU MOBILE
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.onclick = () => {
nav.classList.toggle("active");
};

// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
reveals.forEach(el => {
const top = el.getBoundingClientRect().top;
if(top < window.innerHeight - 100){
el.classList.add("active");
}
});
});

// ANO
document.getElementById("year").textContent = new Date().getFullYear();
