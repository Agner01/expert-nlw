const perguntas = [
  {
    pergunta: "O que é a estética?",
    respostas: [
      "O estudo dos números",
      "A filosofia da beleza e da arte",
      "A análise de dados estatísticos",
    ],
    correta: 1
  },
  {
    pergunta: "Quem é considerado o pai da estética moderna?",
    respostas: [
      "Platão",
      "Immanuel Kant",
      "Aristóteles",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a definição correta de 'bela' na estética?",
    respostas: [
      "Subjetiva e variável de pessoa para pessoa",
      "Universal e imutável",
      "Relacionada apenas à arte visual",
    ],
    correta: 0
  },
  {
    pergunta: "O que é o sublime na estética?",
    respostas: [
      "Beleza simples e clássica",
      "Qualidade estética que inspira admiração e temor",
      "Estilo artístico do Renascimento",
    ],
    correta: 1
  },
  {
    pergunta: "Quem escreveu a obra 'Crítica da Faculdade do Juízo', que trata da estética?",
    respostas: [
      "Friedrich Nietzsche",
      "Arthur Schopenhauer",
      "Immanuel Kant",
    ],
    correta: 2
  },
  {
    pergunta: "O que é minimalismo na estética?",
    respostas: [
      "Um movimento artístico que utiliza muitas cores e formas",
      "Uma abordagem que busca a simplicidade e a redução ao essencial",
      "Um estilo barroco e ornamentado",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o significado de 'arte contemporânea' na estética?",
    respostas: [
      "Arte criada no passado",
      "Arte produzida no presente",
      "Arte clássica e tradicional",
    ],
    correta: 1
  },
  {
    pergunta: "O que é a teoria do formalismo na estética?",
    respostas: [
      "Enfatiza a importância do conteúdo emocional na arte",
      "Foca na estrutura formal e técnica da obra de arte",
      "Promove a expressão pessoal sem regras formais",
    ],
    correta: 1
  },
  {
    pergunta: "O que é o cubismo na estética?",
    respostas: [
      "Um estilo artístico do Renascimento",
      "Uma abordagem que retrata objetos tridimensionais de forma plana",
      "Uma técnica de escultura em argila",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a relação entre estética e ética?",
    respostas: [
      "Não têm relação",
      "São áreas completamente distintas",
      "A estética está relacionada à percepção sensorial, enquanto a ética trata do comportamento moral",
    ],
    correta: 2
  },
];

const quiz = document.querySelector('#quiz')
//Selecionar a tag Template no html e "transformar-lo em uma const"
const template = document.querySelector('template')

const correct = new Set()
const totalOfQuestions = perguntas.length
const showTotal = document.querySelector('#hits span')
showTotal.textContent = correct.size + ' de ' + totalOfQuestions

// loop ou laço de repetição
// for = loop item of agiliza o precessode selecionar dentro item
for (const item of perguntas) {
  // seleciona const quizItem = ao clone do template
  const quizItem = template.content.cloneNode(true)
  // quizItem = template -> seleciona h3 e modifica pergunta 
  quizItem.querySelector('h3').textContent = item.pergunta

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const isCorrect = event.target.value == item.correta

      correct.delete(item)
      if (isCorrect) {
        correct.add(item)
      }

      showTotal.textContent = correct.size + ' de ' + totalOfQuestions
    }

    quizItem.querySelector('dl').appendChild(dt)
  }

  quizItem.querySelector('dl dt').remove()


  quiz.appendChild(quizItem)
}
