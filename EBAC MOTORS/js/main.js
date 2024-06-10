$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    });

    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoDeInteresse: {
                required: false
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            email: {
                required: 'Por favor, insira o seu e-mail',
                email: 'Por favor, insira um e-mail válido'
            },
            telefone: 'Por favor, insira o seu telefone',
            mensagem: 'Por favor, insira a sua mensagem'
        },
        submitHandler: function(form) {
            console.log(form);
            alert('Formulário enviado com sucesso!');
            form.submit();
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    });

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html, body').animate({
            scrollTop: destino.offset().top
        }, 1000);
    });
});