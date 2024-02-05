// AREA ONDE EU APLICO OS CONHECIMENTOS BÁSICOS QUE TO APRENDO, SEPARADO DOS CODIGOS ABAIXO! //


/*--------------------------------------------------------------------------------------------*/ 

//CONFIGURAÇÕES DOS BOTÕES DE SUBIR E DESCER  LATERAL (TIVE AJUDA DO CHATGPT!//

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