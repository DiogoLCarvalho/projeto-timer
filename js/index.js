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
            minutes.textContent = intMinutos.value;
        }
    }

    if (intHora.value != '') {
        if (intHora.value > 24 || intHora.value < 0) {
            hours.textContent = '24';
        } else {
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
    var auxM = parseInt(intMinutos.value);

    var meuInterval = setInterval(function () {

        hora = parseInt(timer / 3600, 10);
        minutos = parseInt(timer / 60, 10);
        segundos = parseInt(timer % 60, 10);

        // Excluir
        if (segundos === 60) {
            segundos = 00
            minutos++
        }

        if (minutos > 60) {
            minutos = auxM;

            if (segundos === 0) {
                auxM--
                if (minutos === 0) {
                    auxM = 59;
                }
            }
            console.log(minutos);
        } else {
            minutos = minutos < 10 ? "0" + minutos : minutos;
        }

        // Excluir
        if (hora === 24) {
            hora = 00;
        }


        segundos = segundos < 10 ? "0" + segundos : segundos;

        console.log(hora + ":" + minutos + ' : ' + segundos);

        if (--timer < 0) {
            clearInterval(meuInterval);
        }


        // Resetar
        reset.addEventListener('click', () => {
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';

            clearInterval(meuInterval);
        });

    }, 1000);
}



// const countDown = () => {

//     const meses = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     let mesCorreto = meses[new Date().getMonth()];


//     const countDate = new Date(`${mesCorreto} ${new Date().getDate()}, ${new Date().getFullYear()} 00:00:00`).getTime();
//     // const countDate = new Date(`${mesCorreto} 31, 2022 00:00:00`).getTime();
//     const timenow = new Date().getTime();
//     const gap = 3600000;


//     const timeSecond = 1000;
//     const timeMinute = timeSecond * 60;
//     const timeHour = timeMinute * 60;
//     const timeDay = timeHour * 24;



//     const textDay = Math.floor(gap / timeDay);
//     const textHour = Math.floor((gap % timeDay) / timeHour);
//     const textminute = Math.floor((gap % timeHour) / timeMinute);
//     const textSecond = Math.floor((gap % timeMinute) / timeSecond);

//     console.log(textDay);
//     hours.textContent = textHour;
//     minutes.textContent = textminute;
//     seconds.textContent = textSecond;
// }

// // setInterval(countDown, 1000);    