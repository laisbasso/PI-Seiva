// Botão subir LOGIN
$(document).ready(function() {
    $('#subir').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });
});

// Botão descer pro SOBRE
$(document).ready(function() {
    $('#sobre').click(function() {
        $('html, body').animate({ scrollTop: 650 }, 'slow');
        return false;
    });
});

// Botão descer CADASTRO
$(document).ready(function() {
    $('#cadastro').click(function() {
        $('html, body').animate({ scrollTop: 2890 }, 'slow');
        return false;
    });
});
