// Variável captura o botão de adicionar paciente do DOM.
const botaoAdicionar = document.getElementById('adicionar-paciente');
// Da uma nova funcionalidade ao botão adicionar paciente e coloca um eventListener no click desse botão.
botaoAdicionar.addEventListener("click", event => {

    // Interrompe a função automática do botão
    event.preventDefault();
    // Localiza e captura o formulário no DOM
    let formulario = document.getElementById('form-adiciona');
    // Cria o Array com os dados do paciente
    let paciente = obtemInformacoesDoPaciente(formulario);
    // Valida se os dados do paciente são válidos.
    let pacienteValidado = validaPaciente(paciente);
    //Cria a estrutura HTML de novo paciente
    let montaElemHTML = montaHTML(paciente);
    // Adiciona o código HTML criado dentro da tabela do index.html .
    const tabela = document.getElementById('tabela-pacientes');
    if (pacienteValidado) {
        tabela.appendChild(montaElemHTML);
        // Reseta os valores dos campos de preenchimento.
        formulario.reset();
    }

});


//
function obtemInformacoesDoPaciente(formulario) {
    let paciente = {
        nome: formulario.nome.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        imc: calculaIMC(formulario.peso.value, formulario.altura.value)
    }
    return paciente; // Aqui vira um objeto.
}


// Função responsável de criar a tag <tr> e inserir as tags <td> dentro dela.
function montaHTML(paciente) {
    // Cria o a tag <tr>.
    let adicionaElementoPaciente = document.createElement('tr');
    // Adiciona a classe '.paciente' na tag <tr>
    adicionaElementoPaciente.classList.add('paciente');

    // Insere a tag <td> dentro da tag <tr> através da função 'montaTd' e coloca como atributo da função, o dado do paciente e a classe correspondente ao tipo de informação.
    adicionaElementoPaciente.appendChild(montaTd(paciente.nome, 'info-nome'));
    adicionaElementoPaciente.appendChild(montaTd(paciente.peso, 'info-peso'));
    adicionaElementoPaciente.appendChild(montaTd(paciente.altura, 'info-altura'));
    adicionaElementoPaciente.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    adicionaElementoPaciente.appendChild(montaTd(paciente.imc, 'info-imc'));

    return adicionaElementoPaciente; // Retorna a estrutura HTML pronta.
}


// Função responsável por montar a tag <td>, inserir a classe correspondente a ela e inserir os dados do paciente.
function montaTd(dado, classe) {
    // Cria tag <td>
    let td = document.createElement('td');
    // Adiciona uma classe a ela (deverá ser informada quando for chamar a função).
    td.classList.add(classe);
    // Adiciona o conteúdo na tag <td> (deverá ser informada quando for chamar a função).
    td.innerHTML = dado;

    return td; // Retorna a estrutura da tag <td> montada.
}

// Função responsável por verificar se os dados de peso e altura do paciente são válidos.
function validaPaciente(novoPaciente) {
    let pesoValidado = validaPeso(novoPaciente);
    let alturaValidada = validaAltura(novoPaciente);
    return pesoValidado && alturaValidada;
}

function validaPeso(paciente) {
    let campoPeso = document.getElementById('peso');
    if (!testePeso(paciente.peso)) {
        campoPeso.textContent = 'Peso inválida';
        campoPeso.classList.add('erro');
        return false;
    };
    campoPeso.classList.remove('erro');
    return true;

}

function validaAltura(paciente) {
    let campoAltura =  document.getElementById('altura');
    if (!testeAltura(paciente.altura)) {
        campoAltura.textContent = 'Altura inválida';
        campoAltura.classList.add('erro');
        return false;
    };
    campoAltura.classList.remove('erro');
    return true;
}

function testePeso(peso) {
    if (peso >= 1 && peso < 500) {
        return true;
    } else {
        return false;
    }
}

function testeAltura(altura) {
    if (altura >= 0.50 && altura <= 2.80) {
        return true;
    } else {
        return false;
    }
}