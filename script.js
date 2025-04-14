const inputMensagem = document.getElementById('inputMensagem');
const btnEnviar = document.getElementById('btnEnviar');
const mensagens = document.querySelector('.mensagens');

btnEnviar.addEventListener('click', () => {
    const texto = inputMensagem.value.trim();

    if (texto !== "") {
        const novaMensagem = document.createElement('div');
        novaMensagem.classList.add('mensagem', 'enviada');
        novaMensagem.textContent = texto;
        mensagens.appendChild(novaMensagem);
        inputMensagem.value = "";
        mensagens.scrollTop = mensagens.scrollHeight;
    }
});

inputMensagem.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        btnEnviar.click();
    }
});
