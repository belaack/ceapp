document.getElementById("chatbotBtn").addEventListener("click", function() {
    // Pegando o contêiner onde o chatbot será inserido
    var chatContainer = document.getElementById("chatContainer");

    // Verificando se o chatbot já está inserido, para não adicionar múltiplas vezes
    if (!chatContainer.innerHTML) {
      chatContainer.innerHTML = '<iframe allow="microphone;" width="350" height="430" src="https://console.dialogflow.com/api-client/demo/embedded/YOUR_AGENT_ID"></iframe>';
    }

    // Exibindo o contêiner
    chatContainer.style.display = "block";
  });
