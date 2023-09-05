document.addEventListener("DOMContentLoaded", function () {
    // Selecionar elementos
    const valorInput = document.getElementById("valor");
    const pixPanel = document.getElementById("pixPanel");
    const cartaoPanel = document.getElementById("cartaoPanel");
    const cpfField = document.getElementById("cpfField");
    const cpfInput = document.getElementById("cpf");
    const bandeira = document.getElementById("bandeira");
    const cartaoMensagem = document.getElementById("cartaoMensagem");
    const parcelasSelect = document.getElementById("parcelas");
    const pagarButton = document.getElementById("pagar");

    // Adicionar ouvintes de eventos
    document.getElementById("informarDados").addEventListener("click", informarDados);
    document.getElementById("numero").addEventListener("keyup", validarCartao);
    parcelasSelect.addEventListener("change", atualizarTotal);
    pagarButton.addEventListener("click", realizarPagamento);

    // Função para exibir o campo CPF quando a opção Pix é selecionada
    function informarDados() {
        const selectedItem = document.querySelector('input[name="pagamento"]:checked').value;

        pixPanel.classList.add("hidden");
        cartaoPanel.classList.add("hidden");
        cpfField.classList.add("hidden");

        if (selectedItem === "pix") {
            pixPanel.classList.remove("hidden");
            const valorComDesconto = parseFloat(valorInput.value) * 0.9;
            document.getElementById("pixTotal").textContent = valorComDesconto.toFixed(2);
            cpfField.classList.remove("hidden"); // Mostrar campo CPF apenas para Pix
        } else if (selectedItem === "cartao") {
            cartaoPanel.classList.remove("hidden");
        }

        pagarButton.classList.remove("hidden");
    }

    // Função para validar o número do cartão e exibir a bandeira
    function validarCartao() {
        // Restante do código de validação do cartão aqui
    }

    // Função para validar o CPF
    function validarCPF() {
        const cpfInput = document.getElementById("cpf");
        const cpf = cpfInput.value.replace(/[^\d]/g, ''); // Remove caracteres não numéricos

        // Validação do CPF aqui
    }

    // Função para atualizar o valor total com base no parcelamento
    function atualizarTotal() {
        // Restante do código de atualização do total aqui
    }

    // Função para realizar o pagamento (exibir mensagem de sucesso)
    function realizarPagamento() {
        alert("Pagamento realizado com sucesso!");
    }
});
