document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('validaForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const campoA = parseFloat(document.getElementById('campoA').value);
        const campoB = parseFloat(document.getElementById('campoB').value);

        function validacaoFormulario(campoA, campoB) {
            return campoB >= campoA;
        }

        const mensagemSucesso = `Positivo, o valor de B: ${campoB} é maior que o Valor de A: ${campoA}`;
        const mensagemErro = `Inválido, o valor de B: ${campoB} é inferior que o Valor de A: ${campoA}`;

        if (validacaoFormulario(campoA, campoB)) {
            const cssMensagemSucesso = document.querySelector('.success-message');
            cssMensagemSucesso.innerHTML = mensagemSucesso;
            cssMensagemSucesso.style.display = 'block';
        } else {
            const cssMensagemErro = document.querySelector('.error-message');
            cssMensagemErro.innerHTML = mensagemErro;
            cssMensagemErro.style.display = 'block';
        }
    });

    const limparButton = document.getElementById('limparButton');

    limparButton.addEventListener('click', function() {
        const cssMensagemSucesso = document.querySelector('.success-message');
        cssMensagemSucesso.innerHTML = '';
        cssMensagemSucesso.style.display = 'none';

        const cssMensagemErro = document.querySelector('.error-message');
        cssMensagemErro.innerHTML = '';
        cssMensagemErro.style.display = 'none';

        document.getElementById('campoA').value = '';
        document.getElementById('campoB').value = '';
    });
});