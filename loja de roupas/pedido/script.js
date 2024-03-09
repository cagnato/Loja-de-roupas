var totalGlobal;

function comecar(){
    var nome = document.getElementById("exampleFormControlInput1").value;
    show(nome);
}

function show(nome){
    document.getElementById("nomePrint").textContent = nome;
    var div = document.getElementById("select-div");
    if(nome && nome.trim() !== ""){
        div.style.display = "flex"
        document.getElementById("exampleFormControlInput1").style.background = "none"
    }else{
        document.getElementById("error").style.display = "block"
    }
}

function fechar(){
    document.getElementById("error").style.display = "none"
    document.getElementById("exampleFormControlInput1").style.background = "lightpink";
}

function calcularTotal(){
    var selectFrio = document.getElementById("selectFrios");
    var selectCamiseta = document.getElementById("selectCamisetas");
    var selectSapato = document.getElementById("selectSapatos");
    var selectCalca = document.getElementById("selectCalcas");
    var selectEsporte = document.getElementById("selectEsportes");
    var resultadoSpan = document.getElementById("resultado");

    var total = 0;
    var frio = 0;
    var camiseta = 0;
    var sapato = 0;
    var calca = 0;
    var esporte = 0;

    switch (selectFrio.value) {
        case "Blusa de gomo Nike":
            total += 129.99;
            frio = 129.99;
            break;
        case "Luva de lã":
            total += 29.90;
            frio = 29.90;
            break;
        case "Touca de lã":
            total += 54.90;
            frio = 54.90;
            break;
        case "Cachecol":
            total += 19.90;
            frio = 19.90;
            break;
        case "Meia de lã":
            total += 5.90;
            frio = 5.90;
            break;        
    }
    switch (selectCamiseta.value) {
        case "Camiseta coxa":
            total += 129.90;
            camiseta = 129.90;
            break;
        case "Camiseta preta":
            total += 34.90;
            camiseta = 34.90;
            break;
        case "Camiseta branca":
            total += 29.90;
            camiseta = 29.90;
            break;
        case "Camiseta estampada bear villand":
            total += 54.90;
            camiseta = 54.90;
            break;
        case "Camiseta de compressão Nike":
            total += 74.90;
            camiseta = 74.90;
            break;      
    }
    switch (selectSapato.value) {
        case "Sapato de couro marrom":
            total += 399.90;
            sapato = 10.90;
            break;
        case "Jordan 1 mid panda low":
            total += 929.90;
            sapato = 929.90;
            break;
        case "Yeezy preto adidas":
            total += 1540.90;
            sapato = 1540.90;
            break;
        case "Adidas samba azul/branco":
            total += 699.90;
            sapato = 699.90;
            break;
        case "New balance 9060 vermelho/branco":
            total += 599.90;
            sapato = 599.90;
            break;
    }
    switch (selectCalca.value) {
        case "Calça jeans azul":
            total += 79.90;
            calca = 79.90;
            break;
        case "Calça cargo preta":
            total += 169.90;
            calca = 169.90;
            break;
        case "Calça legging preta":
            total += 159.90;
            calca = 159.90;
            break;
        case "Calça jogger cinza":
            total += 169.90;
            calca = 169.90;
            break;
        case "Calça social preta":
            total += 179.90;
            calca = 179.90;
            break;
    }
    switch (selectEsporte.value) {
        case "Kimono branco":
            total += 324.90;
            esporte = 324.90;
            break;
        case "shorts muay thay":
            total += 129.90;
            esporte = 129.90;
            break;
        case "Luva de goleiro profissional":
            total += 329.90;
            esporte = 329.90;
            break;
        case "Caneleiras":
            total += 59.90;
            esporte = 59.90;
            break;
        case "Luva de boxe":
            total += 139.90;
            esporte = 139.90;
            break;    
    }
    document.getElementById("pedido-pronto").style.display = "block"
    document.getElementById("frio-pronto").textContent = selectFrio.value + " - R$ " + frio.toFixed(2);
    document.getElementById("camiseta-pronto").textContent = selectCamiseta.value + " - R$ " + camiseta.toFixed(2);
    document.getElementById("sapato-pronto").textContent = selectSapato.value + " - R$ " + sapato.toFixed(2);
    document.getElementById("calca-pronto").textContent = selectCalca.value + " - R$ " + calca.toFixed(2);
    document.getElementById("esporte-pronto").textContent = selectEsporte.value + " - R$ " + esporte.toFixed(2);
    resultadoSpan.textContent = "R$ " + total.toFixed(2);
    console.log(total, frio, camiseta, sapato, calca, esporte)

    totalGlobal = total;
}

const limpar = () => {
    // document.getElementById("pedido-pronto").style.display = "none";
    // document.getElementById("select-div").style.display = "none";
    document.getElementById("exampleFormControlInput1").value = "";
    document.getElementById("resultado").value = "";
    document.getElementById("selectFrios").value = "Selecione sua roupa de frio";
    document.getElementById("selectCamisetas").value = "Selecione sua camiseta";
    document.getElementById("selectSapatos").value = "Selecione seu sapato";
    document.getElementById("selectCalcas").value = "Selecione sua calça";
    document.getElementById("selectEsportes").value = "Selecione seu artigo esportivo";
    document.getElementById("frio-pronto").textContent = "";
    document.getElementById("camiseta-pronto").textContent = "";
    document.getElementById("sapato-pronto").textContent = "";
    document.getElementById("calca-pronto").textContent = "";
    document.getElementById("esporte-pronto").textContent = "";
}

// Função para enviar o total via WhatsApp
function enviarWhatsApp() {
    var numeroTelefone = "5541991792406";
    var mensagem = "O total do pedido é: R$ " + totalGlobal.toFixed(2); // Mensagem com o total do pedido

    // Encode da mensagem para URL
    var mensagemEncoded = encodeURIComponent(mensagem);

    // Cria o link do WhatsApp com a mensagem
    var linkWhatsApp = `https://wa.me/${numeroTelefone}?text=${mensagemEncoded}`;

    // Abre o link em uma nova aba
    window.open(linkWhatsApp, "_blank");
}

document.getElementById("enviarWhatsApp").addEventListener("click", enviarWhatsApp);
