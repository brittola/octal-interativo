const quiz = [
    {
        "pergunta": "Qual é a base do sistema numérico octal?",
        "alternativas": ["2", "8", "10", "16", "4"],
        "resposta": "8",
        "feedback": "A base do sistema numérico octal é 8, pois ele utiliza dígitos de 0 a 7."
    },
    {
        "pergunta": "O que o número octal 10 representa no sistema decimal?",
        "alternativas": ["8", "10", "16", "18", "12"],
        "resposta": "8",
        "feedback": "Lembre-se de que o sistema octal é baseado em potências de 8."
    },
    {
        "pergunta": "Qual é a representação octal do número decimal 15?",
        "alternativas": ["15", "17", "16", "14", "13"],
        "resposta": "17",
        "feedback": "Converta o número decimal 15 dividindo-o por 8 e usando o resto como dígito."
    },
    {
        "pergunta": "Como se escreve o número decimal 64 no sistema octal?",
        "alternativas": ["64", "80", "100", "144", "120"],
        "resposta": "100",
        "feedback": "Divida o número decimal 64 por 8 repetidamente para obter os dígitos octais."
    },
    {
        "pergunta": "Qual é a vantagem de usar o sistema octal em relação ao binário para representar números?",
        "alternativas": ["Reduz a quantidade de dígitos necessários para representar um número", "Aumenta a complexidade dos cálculos", "Facilita a conversão para o sistema hexadecimal", "Elimina a necessidade de usar zero", "Permite representar números negativos com mais facilidade"],
        "resposta": "Reduz a quantidade de dígitos necessários para representar um número",
        "feedback": "O sistema octal agrupa três bits binários em um único dígito octal, reduzindo o número de dígitos."
    },
    {
        "pergunta": "Qual é a diferença fundamental entre os sistemas octal e hexadecimal?",
        "alternativas": ["O octal é baseado em 8 e o hexadecimal em 16", "O octal usa letras e números, enquanto o hexadecimal usa apenas números", "O hexadecimal é mais usado em computação do que o octal", "O octal é mais difícil de aprender do que o hexadecimal", "O hexadecimal usa apenas letras"],
        "resposta": "O octal é baseado em 8 e o hexadecimal em 16",
        "feedback": "A principal diferença é a base de cada sistema: 8 para octal e 16 para hexadecimal."
    },
    {
        "pergunta": "Para qual propósito específico o sistema octal foi amplamente utilizado no passado?",
        "alternativas": ["Programação de computadores modernos", "Representação de endereços de memória em sistemas antigos", "Criptografia e segurança de dados", "Codificação de caracteres em linguagens de programação", "Análise de redes de computadores"],
        "resposta": "Representação de endereços de memória em sistemas antigos",
        "feedback": "Sistemas antigos usavam octal para simplificar a leitura de endereços de memória."
    },
    {
        "pergunta": "Qual é uma limitação do sistema numérico octal?",
        "alternativas": ["Não pode representar grandes números com eficiência", "Não é intuitivo para conversões de e para binário", "Não é amplamente utilizado em computação moderna", "Requer mais dígitos para representar números do que o sistema hexadecimal", "É difícil de aprender"],
        "resposta": "Não é amplamente utilizado em computação moderna",
        "feedback": "Embora tenha sido útil no passado, o sistema octal é menos comum hoje em dia."
    },
    {
        "pergunta": "Como você converte um número decimal para o sistema octal?",
        "alternativas": ["Dividindo o número por 8 e usando o resto como dígito", "Agrupando quatro bits do número binário", "Usando diretamente os dígitos decimais equivalentes", "Convertendo diretamente para binário e depois agrupando em três bits", "Subtraindo repetidamente 8 do número"],
        "resposta": "Dividindo o número por 8 e usando o resto como dígito",
        "feedback": "O método mais direto é dividir repetidamente por 8 e registrar os restos."
    },
    {
        "pergunta": "Qual é a principal característica do sistema numérico octal?",
        "alternativas": ["Utiliza 10 dígitos, de 0 a 9", "É baseado em potências de 2", "Utiliza 8 dígitos, de 0 a 7", "É amplamente utilizado na programação moderna", "Usa letras e números"],
        "resposta": "Utiliza 8 dígitos, de 0 a 7",
        "feedback": "O sistema octal usa exclusivamente os dígitos de 0 a 7."
    }
];

const formQuiz = document.querySelector("form.quiz");
const outNota = document.getElementById('outNota');
const btVerificar = document.getElementById('btVerificar');
const btReiniciar = document.getElementById('btReiniciar');

function montarPerguntas() {
    formQuiz.innerHTML = "";
    btReiniciar.classList.add('hide');
    btVerificar.classList.remove('hide');
    outNota.classList.add('hide');

    for (let i = 0; i < quiz.length; i++) {
        const divQuestao = document.createElement('div');
        divQuestao.classList.add('questao');

        const enunciado = document.createElement('h4');
        enunciado.innerHTML = `${i + 1}. ${quiz[i].pergunta}`;

        divQuestao.appendChild(enunciado);

        for (alternativa of quiz[i].alternativas) {
            const alternativaLabel = document.createElement('label');
            const alternativaInput = document.createElement('input');
            const alternativaTexto = document.createElement('span');

            alternativaInput.type = "radio";
            alternativaInput.name = `questao${i + 1}`;

            alternativaTexto.innerHTML = alternativa;

            alternativaLabel.appendChild(alternativaInput);
            alternativaLabel.appendChild(alternativaTexto);
            divQuestao.appendChild(alternativaLabel);
        }

        const feedback = document.createElement('p');
        feedback.classList.add('feedback');
        feedback.innerHTML = '💡 <strong>Dica:</strong> ' + quiz[i].feedback;

        divQuestao.appendChild(feedback);

        formQuiz.appendChild(divQuestao);
    }
}

function todasRespondidas() {
    const alternativas = formQuiz.querySelectorAll('input[type="radio"]:checked');
    
    return alternativas.length == 10;
}

function verificarRespostas() {
    if (!todasRespondidas()) {
        alert("Responda todas as alternativas antes de verificar seu desempenho.");
        return;
    }
    
    const questoes = document.querySelectorAll('div.questao');
    const alternativasMarcadas = formQuiz.querySelectorAll('input[type="radio"]:checked');
    let nota = 0;

    for (let i = 0; i < alternativasMarcadas.length; i++) {
        // seleciona o pai da alternativa e dele, seleciona o texto do segundo filho
        // input -> label -> span -> texto
        const textoResposta = alternativasMarcadas[i].parentElement.children[1].innerHTML;

        if (textoResposta == quiz[i].resposta) {
            questoes[i].classList.add('certa');
            nota++;
        } else {
            questoes[i].classList.add('errada');
        }
    }
    
    outNota.classList.remove('hide');
    outNota.innerHTML = `Nota: ${nota}/10`;

    btVerificar.classList.add('hide');
    btReiniciar.classList.remove('hide');
}

btVerificar.addEventListener('click', verificarRespostas);

btReiniciar.addEventListener('click', montarPerguntas);

montarPerguntas();