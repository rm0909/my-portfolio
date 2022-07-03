import flaUrl from "./images/flaimg.png"
import quizAppUrl from "./images/quizimg.png"
import listaUrl from "./images/listaimg.png"
import memoriaUrl from "./images/memoriaimg.png"
import calculadoraUrl from "./images/calculadoraimg.png"
import tictacUrl from "./images/ticimg.png"
import pptUrl from "./images/pptimg.png"
import chuckUrl from "./images/chuckimg.png"
import countUrl from "./images/countdownimg.png"

export const projects = [
  {
    name: "Flamengo Cards",
    description: "App que mostra informações sobre o elenco do Flamengo.",
    buildWith:"Grid, Flex, Array map, reduce, filter, sort, Express, Async functions.",
    page: "https://rm0909.github.io/Flamengo-cards/",
    img: flaUrl,
    githublink: "https://github.com/rm0909/Flamengo-cards",
  },
  {
    name: "Perguntas e Respostas",
    description: "Um app de Quiz",
    buildWith: "React Hooks, axios, Open Trivia API",
    page: "https://rm0909.github.io/perguntas-e-respostas/",
    img: quizAppUrl,
    githublink: "https://github.com/rm0909/perguntas-e-respostas",
  },
  {
    name: "Lista de Compras",
    description: "Crie uma lista compras",
    buildWith: "CRUD, REST API, React hooks, routers - Node Express, Mongodb mongoose models, JWT, dotenv",
    page: "https://rm0909.github.io/grocery-list-react/",
    img: listaUrl,
    githublink: "https://github.com/rm0909/grocery-list-react",
  },
  {
    name: "Fatos do Chuck Norris",
    description: "Fatos sobre a lenda Chuck Norris", 
    buildWith: "Chuck Norris jokes API",
    page: "https://rm0909.github.io/Chuck-Norris-facts/",
    img: chuckUrl,
    githublink: "https://github.com/rm0909/Chuck-Norris-facts",
  },
  {
    name: "Jogo da Memória",
    description: "Jogo da memória com escudos dos principais times do Brasil",
    buildWith: "CSS transitions, Grid - Javascript",
    page: "https://rm0909.github.io/memory-game/",
    img: memoriaUrl,
    githublink: "https://github.com/rm0909/memory-game",
  },
  {
    name: "Calculadora",
    description: "Calculadora simples com as 4 principais operações matemáticas",
    buildWith: "HTML, CSS Grid, Javascript",
    page: "https://rm0909.github.io/calculator/",
    img: calculadoraUrl,
    githublink: "https://github.com/rm0909/calculator",
  },
  {
    name: "Contagem Regressiva",
    description: "Contagem regressiva para o fim do contrato do Diego Ribas um jogador que nós flamenguistas amamos muito.",
    buildWith: "Javascript Date",
    page: "https://rm0909.github.io/countdown-app/",
    img: countUrl,
    githublink: "https://github.com/rm0909/countdown-app",
  },
  {
    name: "Jogo da Velha (React)",
    description:"Jogo da velha, primeiro app em react",
    buildWith: "React: Hooks",
    page: "https://rm0909.github.io/react-tic-tac-toe/",
    img: tictacUrl,
    githublink: "https://github.com/rm0909/react-tic-tac-toe",
  },  

  {
    name: "Pedra Papel e Tesoura",
    description: "Pedra Papel e Tesoura. Meu primeiro app que fiz a maior parte por conta própria",
    buildWith: "HTML, CSS, Javascript",
    page: "https://rm0909.github.io/Rock-paper-scissors/",
    img: pptUrl,
    githublink: "https://github.com/rm0909/Rock-paper-scissors",
  }
];
