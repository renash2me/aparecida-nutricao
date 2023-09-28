// Cria Array de pacientes.
let pacientes = document.querySelectorAll('.paciente');

// Seleciona o paciente da vez.
for (let i = 0; i < pacientes.length; i++) {
    let paciente = pacientes[i]; // 'paciente' é o paciente da vez.

    // insere o IMC do paciente da vez.
    insereIMC(paciente); // O atributo da função 'insereIMC' recebe a variável 'paciente', que é o paciente da vez (do loop).
};

function insereIMC(paciente) {
    // Seleciona o IMC do paciente na tabela.
    let pegaIMCnoDOM = paciente.querySelector('.info-imc');
    // Cria uma variável coletando o peso e a altura desse paciente na tabela.
    let peso = parseFloat(paciente.querySelector('.info-peso').textContent);
    let altura = parseFloat(paciente.querySelector('.info-altura').textContent);
    // Insere o valor do IMC calculado na tabela.
    pegaIMCnoDOM.textContent = calculaIMC(peso, altura);  // Insere na td que contém a classe='.info-imc' o resultado da função 'calculaIMC'.
};

function calculaIMC(peso, altura) { // A função 'calculaIMC' recebe os atributos peso e a altura vindos do paciente da vez, declarados e passados na função insereIMC.
    let imc = 0;
    imc = peso / (altura * altura)

    return imc.toFixed(2); // Retorna o valor calculado do IMC com os atributos do paciente da vez e exibe o resultado com duas casas decimais.
};
