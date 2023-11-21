
// Obtendo a referência do elemento com id "cardContainer" do HTML
const cardContainer = document.getElementById("cardContainer");

// Array contendo objetos representando as cartas do jogo
const cards = [
  {
    image: "img/card1.jpeg",
    title: "Colisão Espacial",
    description:
      "Devido a uma colisão com um meteorito, sua nave precisara de manutenção.",
    action: "PERDE 30 PONTOS",
  },
  {
    image: "img/card2.jpeg",
    title: "Buraco Negro",
    description:
      "Você ficou preso na gravidade de um buraco negro por uma rodada.",
    action: "PERDE UMA RODADA",
  },
  {
    image: "img/card3.jpeg",
    title: "Exploração Estelar",
    description:
      "Você acabou de fazer uma descoberta científica em um sistema solar distante.",
    action: "GANHOU 30 PONTOS",
  },
  {
    image: "img/card4.jpeg",
    title: "Asteroides Perigosos",
    description:
      "Volte ao ponto de partida por ter sido pego em uma chuva de asteroides.",
    action: "PERDE 500 PONTOS",
  },
  {
    image: "img/card5.jpeg",
    title: "Cometa Veloz",
    description:
      "Você utilizou a força de um cometa para impulsionar sua nave.",
    action: "GANHOU 50 PONTOS",
  },
  {
    image: "img/card6.jpeg",
    title: "Anomalia Espacial",
    description:
      "Você ficou em órbita de uma estrela desconhecida por uma rodada.",
    action: "PERDE UMA RODADA",
  },
  {
    image: "img/card7.jpeg",
    title: "Interação Alienígena",
    description: "Você fez contato com uma civilização alienígena amigável.",
    action: "GANHOU 30 PONTOS",
  },
  {
    image: "img/card8.jpeg",
    title: "Falha no Motor",
    description:
      "Devido a uma falha no motor da nave, você irá ter que ficar parado durante 2 rodadas.",
    action: "PERDE DUAS RODADAS",
  },
  {
    image: "img/card9.jpeg",
    title: "Falta de oxigênio",
    description: "Você está sem oxigênio, deverá esperar por ajuda.",
    action: "PERDE 50 PONTOS",
  },
  {
    image: "img/card10.jpeg",
    title: "Mapeamento Astronômico",
    description:
      "Você descobriu, estudando as estrelas, um caminho mais rápido para chegar a lua.",
    action: "AVANCE 3 CASAS",
  },
];


// Função para sortear uma carta aleatória e exibi-la na página
function sortearCarta() {
  // Limpa o conteúdo do container antes de adicionar a nova carta
  cardContainer.innerHTML = "";

  // Gera um índice aleatório com base no tamanho do array de cartas
  const randomIndex = Math.floor(Math.random() * cards.length);

  // Cria um elemento <div> para representar a carta
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card"); // Adiciona a classe "card" ao elemento div

  // Seleciona aleatoriamente uma carta do array de cartas
  let card = cards[randomIndex];

  // Cria um elemento <img> para exibir a imagem da carta
  const img = document.createElement("img");
  img.src = card.image; // Define o atributo src da imagem com a URL da imagem
  img.alt = card.title; // Define o atributo alt da imagem com o título da carta

  // Cria um elemento <div> para exibir a descrição e a ação da carta
  const rule = document.createElement("div");
  rule.classList.add("rule"); // Adiciona a classe "rule" ao elemento div

  // Adiciona parágrafos com a descrição e a ação da carta ao elemento div
  rule.innerHTML += `<p>${card.description}</p>`; // Insere a descrição da carta
  rule.innerHTML += `<p>${card.action}</p>`; // Insere a ação da carta

  cardDiv.innerHTML += `<h1>${card.title}</h1>`; // Insere o nome da carta

  // Adiciona a imagem e as informações da carta ao elemento div da carta
  cardDiv.appendChild(img); // Adiciona a imagem como filho do elemento div da carta
  cardDiv.appendChild(rule); // Adiciona a descrição e a ação como filho do elemento div da carta

  // Adiciona o elemento div da carta ao container na página HTML
  cardContainer.appendChild(cardDiv);
}