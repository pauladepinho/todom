let tarefas = [
  { id: 1, texto: "Escovar os dentes", prioridade: "3", feito: true },
  { id: 2, texto: "Arrumar a cama", prioridade: "1", feito: false },
  { id: 3, texto: "Tomar banho", prioridade: "2", feito: true },
  { id: 4, texto: "Tomar café da manhã", prioridade: "3", feito: true },
  { id: 5, texto: "Fazer exercício físico", prioridade: "2", feito: true },
  {
    id: 6,
    texto: "Trabalhar no projeto integrador",
    prioridade: "3",
    feito: false,
  },
];

// console.log(tarefas);

const render = (tarefas) => {
  // Capturar o elemento que contém a lista de tarefas
  let table = document.getElementById("table");
  // Outra alternativa
  table = document.querySelector("#table");
  // Limpar lista
  table.innerHTML = "";

  for (const tarefa of tarefas) {
    let { id, texto, prioridade, feito } = tarefa;

    // Criando uma linha de tabela
    let row = document.createElement("tr");

    //Criar a célula que vai conter o checkbox
    let tdCheck = document.createElement("td");
    // Criar o input checkbox
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    // Adicionar checkbox ao td
    tdCheck.appendChild(checkbox);
    // Adicionar esse tdCheck à row
    row.appendChild(tdCheck);

    // Criar td de texto
    let tdTexto = document.createElement("td");
    tdTexto.innerText = texto;
    row.appendChild(tdTexto);

    // Criar td de ações
    let tdAcoes = document.createElement("td");
    let i = document.createElement("i");
    i.className = "material-icons";
    i.innerText = "delete";
    tdAcoes.appendChild(i);
    row.appendChild(tdAcoes);

    // Adicionar a linha à tabela
    table.appendChild(row);
  }
};

// Criar função create(texto, prioridade) que recebe um texto e prioridade como parãmetros
// Essa função deve retornar um objeto literal com os seguintes campos
// texto: com o texto passado por parâmetro
// prioridade: com o texto passado por parâmetro
// feito: false

const create = (texto, prioridade) => {
  return {
    id: tarefas[tarefas.length - 1].id + 1,
    texto,
    prioridade,
    feito: false,
  };
};

// Capturar o form
let form = document.getElementById("form");

// FORMA 1 de adicionar listener
// form.onsubmit = (evt) => {
//   evt.preventDefault();
// };

// FORMA 2 = BOA PRÁTICA (permite chamar várias funções)
form.addEventListener("submit", (evt) => {
  // Evitar o comportamento padrão de um form
  evt.preventDefault(); // previne o default, nesse caso, enviar o formulário
  // Capturar texto digitado pelo usuário
  let texto = document.getElementById("tf_2do").value;

  if (texto != "") {
    // Verificar se existe prioridade setada nesse texto
    let strInicio = texto.substr(0, 3);

    let prioridade;
    switch (strInicio) {
      case "#1":
        prioridade = 1;
        texto = texto.slice(3);
        break;

      case "#2":
        prioridade = 2;
        texto = texto.slice(3);
        break;

      case "#3":
        prioridade = 3;
        texto = texto.slice(3);
        break;

      default:
        prioridade = 1;
    }

    // Criar o objeto de tarefa com o texto e a prioridade
    let tarefa = create(texto, prioridade);

    // Adicionar o objeto tarefas ao array de tarefas
    tarefas.push(tarefa);

    // Renderizar a minha lista novamente
    render(tarefas);

    // Limpar o campo do texto
    document.getElementById("tf_2do").value = "";
  }
});

// FORMA 3: colocar no HTML

render(tarefas);

// Possible workflow:
// Bloco só para capturar elementos importantes
// Bloco só para associar eventos
