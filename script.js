body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f4f7f2;
  color: #2d3a2d;
}

/* Cabeçalho */
header {
  background: #2e7d32;
  color: white;
  text-align: center;
  padding: 25px;
}

/* Menu */
nav {
  background: #1b5e20;
  text-align: center;
  padding: 12px;
}

nav a {
  color: white;
  margin: 0 15px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;
}

nav a:hover {
  color: #a5d6a7;
}

/* Seções */
section {
  padding: 40px 20px;
  max-width: 1000px;
  margin: auto;
}

/* Cards */
.card {
  background: white;
  padding: 20px;
  margin: 20px 0;
  border-radius: 10px;
  box-shadow: 0 3px 12px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}

.card:hover {
  transform: scale(1.02);
}

/* Vídeos */
iframe {
  width: 100%;
  height: 400px;
  border-radius: 10px;
  border: none;
}

/* Botão */
button {
  background: #43a047;
  border: none;
  padding: 10px 20px;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background: #2e7d32;
}

/* Rodapé */
footer {
  background: #2e7d32;
  color: white;
  text-align: center;
  padding: 15px;
}

/* Responsivo */
@media (max-width: 600px) {
  iframe {
    height: 220px;
  }
}
