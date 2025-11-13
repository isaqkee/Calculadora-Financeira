// ------- Variáveis Iniciais/Globais ------- 
const investimentos = [
    ["CDB", 0.01, "Certificado de Depósito Bancário."],
    ["Tesouro Direto", 0.008, "Títulos públicos seguros."],
    ["LCI", 0.009, "Letra de Crédito Imobiliário."],
    ["LCA", 0.0085, "Letra de Crédito do Agronegócio."],
    ["Debêntures", 0.011, "Títulos de dívida privada."],
    ["Fundo Renda Fixa", 0.007, "Fundo diversificado."]
];

let nomeInvestimento = null;
let taxaInvestimento = null;

// ------- Construir investimentos ------- 
const divInvestimentos = document.getElementById('investimentos');
divInvestimentos.innerHTML = '';
for (const [nome, taxa, descricao] of investimentos) {
    divInvestimentos.innerHTML += `
        <div class="cartaoInvestimento" onclick="selecionarInvestimento('${nome}', ${taxa})">
        <h3>${nome}</h3>
        <p>Taxa: ${(taxa * 100).toFixed(2)}% a.m.</p>
        <p>${descricao}</p>
        </div>`;
}

// ------- Armazenar valores do investimento selecionado ------- 
function selecionarInvestimento(nome, taxa) {
    nomeInvestimento = nome;
    taxaInvestimento = taxa;
    document.getElementById('investimentoSelecionado').innerHTML = nome;
}

// ------- calcular valores do investimento baseado no período ------- 
function calcularInvestimento() {
    const valorInicial = Number(document.getElementById('valorInicial').value);
    const tempo = Number(document.getElementById('tempo').value);
    const divResultado = document.getElementById('resultado');

    if (!nomeInvestimento || !taxaInvestimento) {
        divResultado.innerHTML = '<p>Selecione um investimento.</p>';
        return;
    }

    if (isNaN(valorInicial) || isNaN(tempo) || valorInicial <= 0 || tempo <= 0) {
        divResultado.innerHTML = '<p>Preencha os campos corretamente.</p>';
        return;
    }

    const valorFinal = valorInicial * Math.pow(1 + taxaInvestimento, tempo);
    const lucro = valorFinal - valorInicial;

    divResultado.innerHTML = `
        <p>Investimento: ${nomeInvestimento}</p>
        <p>Valor Final: R$ ${valorFinal.toFixed(2)}</p>
        <p class="investimentoSelecionado">Rendimento: R$ ${lucro.toFixed(2)}</p>
    `;
}