// Botão subir
$(document).ready(function() {
    $('#subir').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });
});

// Identificar o clique no menu

const menuItens = document.querySelectorAll(".menu a");

// Verificar a distância entre o alvo e o topo

function getScrollTopByHref(element) {
    const id = element.getAttribute("href")
    return document.querySelector(id).offsetTop
}

// Animação do scroll

function scrollToPosition(to) {
    /* window.scroll({
        top: to,
        behavior: "smooth"
    })*/
    smoothScrollTo(0, to)
}

// Verificar se o item foi clicado e fazer referência ao seu alvo

function scrollToIdOnClick(event) {
    event.preventDefault()
    const to = getScrollTopByHref(event.currentTarget) - 80
    scrollToPosition(to)
}

menuItens.forEach(item => {
    item.addEventListener("click", scrollToIdOnClick)
})