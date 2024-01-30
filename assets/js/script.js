
//JS DE INTERATIVIDADE DOS BOTÕES DO NAV ----------------------//

// Adicione o seguinte código ao final do seu script.js
var dateFilter = document.getElementById("dateFilter");

function applyDateFilter() {
    var startDate = document.getElementById("startDate").value;
    var endDate = document.getElementById("endDate").value;

    // Implemente a lógica de filtragem por datas conforme necessário
    // Por exemplo, você pode ocultar/mostrar as postagens com base nas datas selecionadas

    // Exemplo de console.log:
    console.log("Filtrar postagens de", startDate, "até", endDate);
}


//-----------------------------------------------------//


//CONFIGURAÇÕES DOS BOTÕES DE SUBIR E DESCER  LATERAL (TIVE AJUDA DO CHATGPT!//

// Adicione o seguinte código ao final do seu script.js
var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
var scrollTopButton = document.querySelector(".scroll-button.scroll-top");
var scrollBottomButton = document.querySelector(".scroll-button.scroll-bottom");

// Verifica a posição de rolagem inicial
if (lastScrollTop === 0) {
    scrollTopButton.style.display = "none"; // Oculta o botão de subir
    scrollBottomButton.style.display = "none"; // Oculta o botão de descer
}

window.addEventListener("scroll", function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;

    // Verificamos se a rolagem é para baixo
    if (st > lastScrollTop) {
        scrollTopButton.style.display = "none"; // Oculta o botão de subir
        scrollBottomButton.style.display = "none"; // Oculta o botão de descer
    } else {
        // Verificamos se a rolagem é para cima
        scrollTopButton.style.display = "block"; // Mostra o botão de subir
        scrollBottomButton.style.display = "block"; // Mostra o botão de descer
    }

    // Atualiza a última posição de rolagem
    lastScrollTop = st;
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}

//-----------------------------------------------------------------------------------//