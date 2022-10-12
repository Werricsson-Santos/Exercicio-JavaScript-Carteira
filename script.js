let quantia = prompt("Qual valor em dinheiro você possui?")
quantia = parseFloat (quantia)

let carteira = ""


do {
    carteira = prompt(
        "Você possui: R$ " + quantia + 
        "\n1. Adicionar dinheiro" +
        "\n2. Remover dinheiro" +
        "\n3. Sair"
    )
    switch(carteira) {
        case "1":
            //Maneira de converter a string para float individualmente, mantive apenas para lembrete.
            quantia += parseFloat( prompt("Qual valor deseja adicionar?") )
            break
        case "2":
            quantia -= prompt("Quanto você deseja remover?")
            break
        case "3":
            alert("Saindo...")
            break
        default:
            alert("entrada invalida")
    }
} while (quantia >= 0 && carteira !== "3")