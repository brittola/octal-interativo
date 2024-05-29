const conversor = document.querySelector('form.conversor');
const opcoesDeConversao = conversor.querySelectorAll('input[type="radio"');
const inNumero = document.getElementById('inNumero');
const outResultado = document.getElementById('outResultado');
const btConverter = document.getElementById('btConverter');

opcoesDeConversao.forEach(opcao => {
    opcao.addEventListener('change', e => {
        inNumero.value = "";
        outResultado.value = "";

        if (e.target.value == 'octal') {
            inNumero.placeholder = 'Digite o número decimal';
        } else {
            inNumero.placeholder = 'Digite o número octal';
        }
    })
});

function decimalParaOctal(numero) {
    let decimal = parseInt(numero);
    let octal = "";

    while (decimal >= 8) {
        octal = (decimal % 8) + octal
        decimal = parseInt(decimal / 8)
    }
    octal = (decimal % 8) + octal

    return octal;
}

function octalParaDecimal(numero) {
    let octal = numero;
    let octalRevertido = "";
    let decimal = 0;

    for (i = octal.length - 1; i >= 0 ; i--) {
        octalRevertido += octal[i];
    }
    
    for (i = 0; i < octalRevertido.length; i++) {
        decimal += parseInt(octalRevertido[i]) * Math.pow(8, i);
    }

    return decimal
}

btConverter.addEventListener('click', () => {
    // decimal para octal
    if (opcoesDeConversao[0].checked) {
        outResultado.value = decimalParaOctal(inNumero.value);
    } else { // octal para decimal
        outResultado.value = octalParaDecimal(inNumero.value);
    }
})