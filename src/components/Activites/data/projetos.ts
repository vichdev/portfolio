export enum Tecnologias {
  React = 0,
  ReactNative,
  Vue,
  NodeJS,
  Javascript,
}

import pokemon_img from "../../../assets/pokemon.svg";
import tictactoe_img from "../../../assets/tictactoe.png";
import dtmoney_img from "../../../assets/logo.svg";
import timer_img from "../../../assets/timer.svg";
import todolist_img from "../../../assets/todolist.svg";
import clingest from "../../../assets/clingest.svg";
import node from "../../../assets/node.jpg";

export const projetos = [
  {
    name: "PokeStats",
    descricao:
      "Desenvolvido com intuito de praticar e aplicar: context API e consumo de APIs (PokeAPI).",
    descricao_data: "Website | 2021",
    tecnologia: Tecnologias.React,
    img_path: `${pokemon_img}`,
    cor: "#04A5CF",
    url: "https://pokestats-vich.netlify.app/",
  },
  {
    name: "DtMoney",
    descricao:
      "Projeto desenvolvido no curso de ReactJS pela rocketseat, utilizando mirageJS como MockAPI, simulando uma planilha de gastos.",
    descricao_data: "Website | 2022",
    tecnologia: Tecnologias.React,
    img_path: `${dtmoney_img}`,
    cor: "#5429cc",
    observacao:
      "Obs: API funciona apenas localmente, para rodar, baixar pelo GitHub.",
    url: "https://dt-money-vh.netlify.app",
  },
  {
    name: "TicTacToe",
    descricao: "Jogo da velha desenvolvido em JavaScript.",
    descricao_data: "Website | 2021",
    tecnologia: Tecnologias.React,
    img_path: `${tictactoe_img}`,
    cor: "#e64c65",
    url: "https://tictactoe-vich.netlify.app/ ",
  },
  {
    name: "Timer",
    descricao: "Timer desenvolvido utilizando HTML, CSS E Javascript puro.",
    tecnologia: Tecnologias.Javascript,
    img_path: `${timer_img}`,
    cor: "#fff",
    url: "https://github.com/vichdev/javascript-timer",
  },
  {
    name: "Lista de Tarefas",
    descricao:
      "Lista de tarefas. Primeiro projeto em react native, utilizando ContextAPI como estado global.",
    tecnologia: Tecnologias.ReactNative,
    img_path: `${todolist_img}`,
    cor: "#e64c65",
    url: "https://github.com/vichdev/ToDoListNative",
  },
  {
    name: "ClinGest",
    descricao:
      "Aplicação com formulário para agendamento de consultas e interação com Whatsapp. Utilizando Next/JS",
    tecnologia: Tecnologias.React,
    img_path: `${clingest}`,
    cor: "#fff",
    url: "https://tamara-agendamento.netlify.app/",
  },
  {
    name: "NodeEJS (SSR)",
    descricao:
      "Aplicação feita para estudo da renderização server-side de um HTML utilizando apenas NodeJS com Express, mudando todos os metadados de acordo com a chamada da API.",
    tecnologia: Tecnologias.NodeJS,
    img_path: `${node}`,
    cor: "#85be49",
    url: "https://github.com/vichdev/node-ejs",
  },
  {
    name: "CRUD Backend",
    descricao:
      "Criação de uma API para utilizar em um CRUD que foi feito em ReactJS, utilizando NodeJS, Typescript, Express.",
    tecnologia: Tecnologias.NodeJS,
    img_path: `${todolist_img}`,
    cor: "#e64c65",
    url: "https://github.com/vichdev/nodejs-todolist-backend",
  },
  {
    name: "Nuxt SSR Pokemon",
    descricao:
      "Criação de aplicação em NuxtJS com intuito de estudar o server side rendering para rendenrizar pokemons. Foi consumido a api PokeAPI",
    tecnologia: Tecnologias.Vue,
    img_path: `${pokemon_img}`,
    cor: "#85be49",
    url: "https://github.com/vichdev/NuxtSSRPokemon",
  },

  {
    name: "CRUD de tarefas",
    descricao:
      "CRUD de criação de tarefas, utilizando ReactJS, consumindo minha própria API construida em NODEJS com Express.",
    tecnologia: Tecnologias.React,
    img_path: `${todolist_img}`,
    cor: "#e64c65",
    url: "https://github.com/vichdev/todolist",
  },
];
