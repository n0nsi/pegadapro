const atletas = [
  {
    nome: "Vinicius Andrade",
    img: "assets/img/atletas/vinicius.jpg",
    instagram: "https://instagram.com/viniciusandradebjj/"
  },
];

// render automático
const container = document.getElementById("listaAtletas");

atletas.forEach(a => {
  container.innerHTML += `
    <div class="atleta">
      <img src="${a.img}" />
      <a href="${a.instagram}" target="_blank">${a.nome}</a>
    </div>
  `;
});
