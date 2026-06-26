document.getElementById('form-meta').addEventListener('submit', function(event) {
    // Evita que a página recarregue ao enviar o formulário
    event.preventDefault();

    // Captura os valores digitados pelo usuário
    const nomeMeta = document.getElementById('nome-meta').value;
    const valorTotal = parseFloat(document.getElementById('valor-total').value);
    const tempoMeses = parseInt(document.getElementById('tempo-meses').value);

    // Matemática Aplicada: Cálculo da parcela mensal necessária
    const poupancaMensal = valorTotal / tempoMeses;

    // Determina a classificação do horizonte temporal (Matemática descritiva)
    let classificacaoTempo = "";
    if (tempoMeses <= 12) {
        classificacaoTempo = "Meta de Curto Prazo (até 1 ano)";
    } else if (tempoMeses <= 36) {
        classificacaoTempo = "Meta de Médio Prazo (1 a 3 anos)";
    } else {
        classificacaoTempo = "Meta de Longo Prazo (mais de 3 anos)";
    }

    // Exibe e atualiza a interface com os resultados formatados
    document.getElementById('res-introducao').innerHTML = `Para atingir o seu objetivo de <strong>${nomeMeta}</strong> no valor total de R$ ${valorTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}, seu cronograma foi calculado com base em divisões mensais fixas de tempo.`;
    
    document.getElementById('res-parcela').textContent = `R$ ${poupancaMensal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} / mês`;
    
    document.getElementById('res-classificacao').textContent = classificacaoTempo;

    // Revela o bloco de resultado removendo a classe 'hidden'
    document.getElementById('resultado').classList.remove('hidden');
});