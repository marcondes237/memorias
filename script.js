
const redacoes = [
  { titulo: "Redação 01", texto: "Adicione aqui sua primeira redação." },
  { titulo: "Redação 02", texto: "Adicione aqui sua segunda redação." },
  { titulo: "Redação 03", texto: "Adicione aqui sua terceira redação." },
  { titulo: "Redação 04", texto: "Adicione aqui sua quarta redação." },
  { titulo: "Redação 05", texto: "Adicione aqui sua quinta redação." },
  { titulo: "Redação 06", texto: "Adicione aqui sua sexta redação." },
  { titulo: "Redação 07", texto: "Adicione aqui sua sétima redação." },
  { titulo: "Redação 08", texto: "Adicione aqui sua oitava redação." },
  { titulo: "Redação 09", texto: "Adicione aqui sua nona redação." },
  { titulo: "Redação 10", texto: "Adicione aqui sua décima redação." },
  { titulo: "Redação 11", texto: "Adicione aqui sua décima primeira redação." },
  { titulo: "Redação 12", texto: "Adicione aqui sua décima segunda redação." },
  { titulo: "Redação 13", texto: "Adicione aqui sua décima terceira redação." },
  { titulo: "Redação 14", texto: "Adicione aqui sua décima quarta redação." },
  { titulo: "Redação 15", texto: "Adicione aqui sua décima quinta redação." },
  { titulo: "Redação 16", texto: "Adicione aqui sua décima sexta redação." },
  { titulo: "Redação 17", texto: "Adicione aqui sua décima sétima redação." }
];

const lista = document.getElementById("listaRedacoes");
const modal = document.getElementById("modal");
const tituloModal = document.getElementById("tituloModal");
const textoModal = document.getElementById("textoModal");
const fechar = document.getElementById("fechar");

// Cria automaticamente os 17 cards
redacoes.forEach((redacao, indice) => {
  const card = document.createElement("button");

  card.className = "card-redacao";
  card.type = "button";

  const numero = document.createElement("span");
  numero.textContent = String(indice + 1).padStart(2, "0");

  const titulo = document.createElement("h3");
  titulo.textContent = redacao.titulo;

  const descricao = document.createElement("p");
  descricao.textContent = "Clique para ler a redação completa.";

  card.append(numero, titulo, descricao);

  card.addEventListener("click", () => {
    tituloModal.textContent = redacao.titulo;
    textoModal.textContent = redacao.texto;
    modal.classList.add("ativo");
  });

  lista.appendChild(card);
});

// Fecha a janela de leitura
fechar.addEventListener("click", () => {
  modal.classList.remove("ativo");
});

modal.addEventListener("click", (evento) => {
  if (evento.target === modal) {
    modal.classList.remove("ativo");
  }
});

document.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape") {
    modal.classList.remove("ativo");
  }
});

