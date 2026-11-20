

const redacoes = [
  { titulo: "Redação 01", texto: "As mudanças do ciclo da água são influenciadas pelo efeito estufa, que causam ondas de calor excessivas, podendo ser motivo de muitos desastres naturais, como que ocorreu rompimento da barragem de Brumadinho, quando a barragem da mina Córrego do Feijão se rompeu, ocasionando muitas mortes é a destruição do rio Paraopeba. A lama se espalhou por quilômetros, destruindo tudo por onde passou
                Além, o agravamento do efeito estufa intensifica fenômenos climáticos extremos, como chuvas fortes e secas prolongadas, afetando diretamente o equilíbrio natural do ciclo da água afetando tanto o meio ambiente quanto as pessoas, especialmente em regiões mais vulneráveis, onde a falta de fiscalização e planejamento aumentam esses riscos. Assim é essencial enfatizar o papel das empresas e do governo na prevenção de catástrofes, as faltas de fiscalização e segurança contribuem para incidentes como esse, destacando a urgência de medidas mais rigorosas e sustentáveis
                Desse modo, é essencial implementar medidas que reduza o efeito do aquecimento global e preservem o ciclo da água. Para prevenir futuras tragédias e assegurar uma vida mais sustentável e com menos preocupações, realizar uma fiscalização eficaz e promover a conscientização da população." },
  { titulo: "Redação 02", texto: "É fundamental respeitar as diferenças das pessoas ao tentar diminuir os conflitos que surgem hoje em dia devido à diversidade de culturas, sociedades e opiniões. A intolerância para com o que é diferente cria as bases para preconceitos, discriminação e violência, e impede relações pacíficas entre os indivíduos.
A educação serve como base para a formação de cidadãos conscientes de seus direitos e empáticos com os outros. Ela promove o diálogo, conectando as pessoas com aqueles que são diferentes encontrando pontos em comum por meio do respeito mútuo, fomentando assim um ambiente livre de discriminação contra pessoas em razão de suas diferenças
                A diversidade é essencial para a democracia, pois cria espaço para que inúmeras ideias e perspectivas coexistam sem perder sua identidade. Portanto, para promover a justiça social, a paz e a equidade na sociedade, devemos reconhecer que a valorização e a compreensão das diferenças são componentes essenciais para o desenvolvimento de uma sociedade." },
  { titulo: "Redação 03", texto: "Hoje em dia, a inteligência artificial está cada vez mais presente no cotidiano das pessoas, principalmente no ambiente online. Ela pode ser vista nas redes sociais, nos aplicativos de compras, nos estudos e até no atendimento de empresas. Apesar de trazer mais facilidade e rapidez para a rotina, seu uso também pode gerar problemas quando não existe controle. Por isso, é importante refletir sobre os benefícios e também sobre os riscos dessa tecnologia.
                Em primeiro lugar, a inteligência artificial ajuda bastante no dia a dia. Ela contribui para a organização de tarefas, indica conteúdos de interesse e ainda auxilia os estudantes nos estudos, com ferramentas que explicam assuntos e tiram dúvidas de forma rápida. Além disso, muitas empresas utilizam a IA para melhorar o atendimento ao cliente, deixando os serviços mais práticos e eficientes.
                Por outro lado, o uso exagerado e sem fiscalização pode causar consequências negativas. A propagação de fake news, a falta de privacidade e a dependência tecnológica são problemas que preocupam bastante. Muitas pessoas acabam acreditando em informações falsas criadas ou espalhadas pela inteligência artificial e isso pode gerar sérios prejuízos. ." },
  { titulo: "Redação 04", texto: "A sociedade contemporânea é muito preocupada com a sua imagem corporal, fazendo com que toda gente procure o emagrecimento acima de tudo para se adequar a determinados padrões de beleza. Neste cenário, o consumo de as chamadas “canetas emagrecedoras”, indicadas para o tratamento de doenças como o diabetes tipo 2, vem ganhando popularidade entre pessoas que não necessitam de uso médico. É um caso que demonstra como a estética já não é apenas uma opção, mas uma exigência, sobretudo para jovens que são expostos constantemente a corpos “perfeitos” nas redes sociais.
                Mas o abuso desses remédios pode trazer uma série de riscos à saúde. Sem monitoramento médico, as pessoas podem experimentar reações adversas, como náuseas, fraqueza e até mais complicações de saúde. Além disso, esse excesso de busca do corpo perfeito pode afetar a saúde mental provocando insegurança e insatisfação constante. Um exemplo disto pode ser feito com o filme Cisne Negro, que demonstra que a busca pela perfeição pode levar uma pessoa a ultrapassar seus próprios limites e fazer mal a si mesma.
Por isso, faz-se necessária uma maior conscientização em relação à forma adequada de utilização desses medicamentos e o risco de seguir ." },
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



