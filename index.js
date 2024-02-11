const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação para design gráfico",
        "Uma linguagem de marcação para documentos web",
        "Uma linguagem de programação para o desenvolvimento web",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "v = 10;",
        "var x = 10;",
        "variavel = 10;",
      ],
      correta: 1
    },
    {
      pergunta: "Como se refere a um bloco de código em JavaScript?",
      respostas: [
        "Conjunto",
        "Grupo",
        "Escopo",
      ],
      correta: 2
    },
    {
      pergunta: "Qual função é usada para imprimir no console em JavaScript?",
      respostas: [
        "print()",
        "log()",
        "console.log()",
      ],
      correta: 2
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um tipo de dado",
        "Um bloco de código reutilizável",
        "Um operador lógico",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Data Object Model",
        "Document Object Model",
        "Dynamic Operation Module",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de comentar uma linha em JavaScript?",
      respostas: [
        "// Comentário",
        "/* Comentário */",
        "' Comentário",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma string em JavaScript?",
      respostas: [
        "Um número inteiro",
        "Um tipo de dado para armazenar texto",
        "Um operador de comparação",
      ],
      correta: 1
    },
    {
      pergunta: "Como você declara um loop 'for' em JavaScript?",
      respostas: [
        "para (i = 0; i < 10; i++)",
        "loop (i = 0; i < 10; i++)",
        "for (i = 0; i < 10)",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
      respostas: [
        "Ambos são iguais em comparação",
        "'===' compara apenas valores, '==' compara valores e tipos",
        "'==' compara apenas valores, '===' compara valores e tipos",
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
  