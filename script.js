document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. SISTEMA DE INTERAÇÃO (CURTIDAS E COMPARTILHAR)
    // ==========================================
    let likes = 0;
    const likeBtn = document.getElementById('like-btn');
    const likeCount = document.getElementById('like-count');
    const shareBtn = document.getElementById('share-btn');

    likeBtn.addEventListener('click', () => {
        likes++;
        likeCount.innerText = likes;
    });

    shareBtn.addEventListener('click', () => {
        // Simulação elegante de cópia de link operacional
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('PORTAL TECH: Link de transmissão do artigo copiado com sucesso para a área de transferência.');
        }).catch(() => {
            alert('PORTAL TECH: Link encriptado gerado: ' + window.location.href);
        });
    });


    // ==========================================
    // 2. ASSISTENTE VIRTUAL OMNI_IA
    // ==========================================
    const askBtn = document.getElementById('ask-btn');
    const userQuestionInput = document.getElementById('user-question');
    const answerSpace = document.getElementById('answer-space');

    askBtn.addEventListener('click', askQuestion);
    
    // Permitir consulta pressionando "Enter" no input
    userQuestionInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') askQuestion();
    });

    function askQuestion() {
        const question = userQuestionInput.value.toLowerCase().trim();
        
        if (question === "") {
            alert("SISTEMA: Entrada vazia. Digite um termo de consulta para busca de dados.");
            return;
        }

        answerSpace.style.display = "block";
        
        if (question.includes("computação quântica") || question.includes("quantica")) {
            answerSpace.innerHTML = "<strong>[OMNI_IA]:</strong> A Computação Quântica rompe as limitações binárias por meio de superposição lógica. O maior impacto imediato está na quebra de algoritmos assimétricos e no desenvolvimento acelerado de novos materiais biotecnológicos.";
        } else if (question.includes("biohacking") || question.includes("biocibernetica")) {
            answerSpace.innerHTML = "<strong>[OMNI_IA]:</strong> Biohacking engloba a modificação molecular artificial do genoma humano e a fusão de circuitos eletrônicos integrados para expandir os limites sensoriais nativos da biologia.";
        } else if (question.includes("ia") || question.includes("inteligência artificial")) {
            answerSpace.innerHTML = "<strong>[OMNI_IA]:</strong> Modelos de inteligência artificial avançados operam em redes neurais de larga escala, distribuindo inferências matemáticas automatizadas por meio de clusters hiperdimensionados integrados à web.";
        } else {
            answerSpace.innerHTML = "<strong>[OMNI_IA]:</strong> Termo não indexado na memória cache central. Tente pesquisar os vetores mapeados: 'computação quântica', 'biohacking' ou 'IA'.";
        }
    }


    // ==========================================
    // 3. DESAFIO TECNOLÓGICO (MINI-GAME)
    // ==========================================
    const gameBtn = document.getElementById('game-btn');
    const guessInput = document.getElementById('guess-input');
    const gameHint = document.getElementById('game-hint');
    const gameMessage = document.getElementById('game-message');

    const games = [
        { hint: "DIRETRIZ: Decodifique o protocolo padrão de criptografia segura para web (5 letras):", answer: "https", tip: "Começa com 'ht' e o 's' final indica Segurança." },
        { hint: "DIRETRIZ: Identifique o elemento tecnológico conhecido como o cérebro do computador (3 letras):", answer: "cpu", tip: "Sigla para Unidade Central de Processamento em inglês." },
        { hint: "DIRETRIZ: Qual a sigla da inteligência artificial avançada que opera este blog? (4 letras):", answer: "omni", tip: "Dica interna: É o nome da inteligência virtual descrita acima." }
    ];

    let currentGameIndex = 0;

    gameBtn.addEventListener('click', checkGuess);
    
    guessInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkGuess();
    });

    function checkGuess() {
        const userGuess = guessInput.value.trim().toLowerCase();
        
        if (userGuess === games[currentGameIndex].answer) {
            gameMessage.style.color = "var(--success)";
            gameMessage.innerText = ">> ACESSO CONCEDIDO: Protocolo descriptografado e superado.";
            
            setTimeout(() => {
                currentGameIndex = (currentGameIndex + 1) % games.length;
                gameHint.innerText = games[currentGameIndex].hint;
                guessInput.value = "";
                gameMessage.innerText = "";
            }, 2000);
        } else {
            gameMessage.style.color = "var(--error)";
            gameMessage.innerText = ">> FALHA: Detecção de intruso ativa. Entrada incorreta.";
        }
    }


    // ==========================================
    // 4. INTERFACE DE SUPORTE (LADO ESQUERDO)
    // ==========================================
    const helpBtn = document.getElementById('help-btn');
    const helpPanel = document.getElementById('help-panel');
    const cheatBtn = document.getElementById('cheat-btn');

    helpBtn.addEventListener('click', () => {
        if (helpPanel.style.display === 'block') {
            helpPanel.style.display = 'none';
        } else {
            helpPanel.style.display = 'block';
        }
    });

    // Função de Ajuda Direta / Cheat para o Mini-game solicitado
    cheatBtn.addEventListener('click', () => {
        alert("CENTRO DE SUPORTE // Dica do Desafio Atual:\n" + games[currentGameIndex].tip);
    });

    // Fechar painel de ajuda se clicar fora dele
    document.addEventListener('click', (e) => {
        if (!helpPanel.contains(e.target) && !helpBtn.contains(e.target)) {
            helpPanel.style.display = 'none';
        }
    });


    // ==========================================
    // 5. FEEDBACK WIDGET (AVALIAÇÃO INTERATIVA - LADO DIREITO)
    // ==========================================
    const widgetToggle = document.getElementById('widget-toggle');
    const widgetContent = document.getElementById('widget-content');
    const widgetSendBtn = document.getElementById('widget-send-btn');
    const widgetComment = document.getElementById('widget-comment');
    const stars = document.querySelectorAll('#stars-container span');

    let selectedRating = 0;

    widgetToggle.addEventListener('click', () => {
        if (widgetContent.style.display === 'block') {
            widgetContent.style.display = 'none';
        } else {
            widgetContent.style.display = 'block';
        }
    });

    stars.forEach(star => {
        star.addEventListener('click', (e) => {
            selectedRating = parseInt(e.target.getAttribute('data-value'));
            updateStars(selectedRating);
        });
    });

    function updateStars(rating) {
        stars.forEach(star => {
            const starValue = parseInt(star.getAttribute('data-value'));
            if (starValue <= rating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }

    widgetSendBtn.addEventListener('click', () => {
        const commentText = widgetComment.value.trim();
        
        if (commentText === "" && selectedRating === 0) {
            alert("ERRO OPERACIONAL: Insira uma avaliação ou comentário antes de transmitir.");
            return;
        }
        
        alert(`RELATÓRIO TRANSMITIDO:\nSincronização: ${selectedRating}/5 Estrelas\nSua análise técnica foi enviada com sucesso para o banco de dados.`);
        
        // Limpeza dos buffers de entrada e fechamento do widget
        widgetComment.value = "";
        selectedRating = 0;
        updateStars(0);
        widgetContent.style.display = 'none';
    });
});
