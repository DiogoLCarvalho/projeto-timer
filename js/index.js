let reset = document.querySelector('#resetar');
let btnHora = document.querySelector('#definirHora');
let btnPlay = document.querySelector('#play');

let intHora = document.querySelector('#input_Hora');
let intMinutos = document.querySelector('#input_Minutos');

let verificaDefinicao = false;

btnHora.addEventListener('click', () => {
    if (intHora.value === '') {
        hours.textContent = '00';
    }

    if (intMinutos.value === '') {
        minutes.textContent = '00';
    }

    if (intMinutos.value != '') {
        if (intMinutos.value > 60 || intMinutos.value < 0) {
            minutes.textContent = '60';
        } else {
            intMinutos.value = intMinutos.value < 10 ? "0" + intMinutos.value : intMinutos.value;
            minutes.textContent = intMinutos.value;
        }
    }

    if (intHora.value != '') {
        if (intHora.value > 24 || intHora.value < 0) {
            hours.textContent = '24';
        } else {
            intHora.value = intHora.value < 10 ? "0" + intHora.value : intHora.value;
            hours.textContent = intHora.value;
        }
    }

    seconds.textContent = '00';
    intMinutos.value = '';
    intHora.value = '';

    verificaDefinicao = true;
});


btnPlay.addEventListener('click', function () {

    if (verificaDefinicao) {
        var duration = (parseInt(hours.textContent) * 3600) + (parseInt(minutes.textContent) * 60);

        startTimer(duration);
    } else {
        alert('ERRO!\nDefina um tempo no botão vermelho! ')
    }
});

function startTimer(duration) {

    var timer = duration, hora, minutos, segundos;
    // Pegar o valor de minutos quanto ele é maior que 60
    var auxM = parseInt(minutes.textContent);

    var meuInterval = setInterval(function () {

        // Desabilitar botões
        btnHora.style.pointerEvents = "none";
        btnHora.style.background = "#505053";
        btnPlay.style.pointerEvents = "none";
        btnPlay.style.background = "#505053";


        // Converter segundos
        hora = parseInt(timer / 3600, 10);
        minutos = parseInt(timer / 60, 10);
        segundos = parseInt(timer % 60, 10);

        // Arrumar tempo em minutos
        if (minutos > 60) {
            minutos = auxM;

            if (segundos === 0) {
                auxM--
                if (minutos === 0) {
                    auxM = 59;
                }
            }
        }


        // Colocar o 0 na frente
        hora = hora < 10 ? "0" + hora : hora;
        minutos = minutos < 10 ? "0" + minutos : minutos;
        segundos = segundos < 10 ? "0" + segundos : segundos;

        // Colocar no display
        hours.textContent = hora;
        minutes.textContent = minutos;
        seconds.textContent = segundos;

        // Diminuir tempo
        if (--timer < 0) {
            clearInterval(meuInterval);

            // Habilitar botões
            btnHora.style.pointerEvents = "auto";
            btnHora.style.background = "#EF2F3C";

            btnPlay.style.pointerEvents = "auto";
            btnPlay.style.background = "#276FBF";

            verificaDefinicao = false;
        }


        // Resetar
        reset.addEventListener('click', () => {
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';

            // Habilitar botões
            btnHora.style.pointerEvents = "auto";
            btnHora.style.background = "#EF2F3C";


            btnPlay.style.pointerEvents = "auto";
            btnPlay.style.background = "#276FBF";


            clearInterval(meuInterval);
        });

    }, 1000);
}