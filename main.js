const form = document.getElementById('form-valid');
const limparButton = document.getElementById('limparButton');

let numeroA = parseFloat(document.getElementById('campoA').value);
let numeroB = parseFloat(document.getElementById('campoB').value);


let formValido = true;

function campoValido(campoB, campoA) {
    return campoB > campoA;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const mensagemSucesso = `O valor do Campo B: ${campoB.value} é maior que o numero do Campo A: ${campoA.value} `;
    const mensagemErro = `Resultado Inválido o valor de B: ${campoB.value} é menor que o valor de A: ${campoA.value}`;

    formValido = campoValido(campoA.value, campoB.value);
    if (!formValido) {
        const containerMenssagemSucesso = document.querySelector('.success-message');
        containerMenssagemSucesso.innerHTML = mensagemSucesso;
        containerMenssagemSucesso.style.display = 'block';

        /*const cssMensagemSucesso = document.querySelector('.success-messagem');
        cssMensagemSucesso.innerHTML = '';
        cssMensagemSucesso.style.display = 'none';*/

        campoA.value = '';
        campoB.value = '';

    } else {
        const containerMenssagemErro = document.querySelector('.message-error');
        containerMenssagemErro.innerHTML = mensagemErro;
        containerMenssagemErro.style.display = 'block';

        const cssMensagemErro = document.querySelector('.message-error');
        cssMensagemErro.innerHTML = '';
        cssMensagemErro.style.display = 'none';

        document.getElementById('campoA').value = '';
        document.getElementById('campoB').value = '';
    }

});
/*limparButton.addEventListener('click', function () {
    const cssMensagemSucesso = document.querySelector('.success-messagem');
    cssMensagemSucesso.innerHTML = '';
    cssMensagemSucesso.style.display = 'none';

    const cssMensagemErro = document.querySelector('.message-error');
    cssMensagemErro.innerHTML = '';
    cssMensagemErro.style.display = 'none';

    document.getElementById('campoA').value = '';
    document.getElementById('campoB').value = '';

});*/