/*
Logica do Serviço:
[x] Carregar a Foto
[x] Falar qual a Foto está sendo carregada
[x] salvar a foto carregada
[x] Enviar para IA foto + orientação
[x] Receber a resposta da IA
[x] Formatar a resposta
[x] Colocar na tela 
[x] Estilizar a lista

document = HTML
querySelector = Selecionar um elemento do HTML
innerHTML = Colocar algo dentro do HML
*/

let pedido = 'Olhe a foto deste comprovante e responda em UMA linha, sem escrever mais nada, com 2 pedaços separados por |. Primeiro pedaço: o emoji da categoria, o nome do estabelecimento dentro de <strong>, e depois cada item comprado com seu valor, um por linha usando <br>. Segundo pedaço: o total pago, só o número, com ponto e sempre com duas casas decimais. As categorias são: 🛒 Mercado, 🚗 Transporte, 🍔 Comida, 💊 Saúde, 🎉 Lazer, 🏠 Casa, 💸 Outros. Exemplo de resposta: 🍔 <strong>Padaria Pão Quente</strong><br>Pão — R$ 5,00<br>Leite — R$ 4,50|9.50';

async function lerFoto() {
    // Pegar a foto do input
    let foto = document.querySelector(".foto").files[0]
    
    // Chamada Assincrona
    // Pegando as informações e enviando para IA
    let resposta = await puter.ai.chat(pedido, foto)

    // Coletando resposta da IA e filtrando para mostrar na tela.
    let texto = resposta.message.content

    // Colocar na tela
    document.querySelector(".lista").innerHTML = texto;
    
    console.log("Estou lendo a foto...")
}