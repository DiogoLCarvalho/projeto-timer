let reset = document.querySelector('#resetar');
let btnHora = document.querySelector('#definirHora');
let intHora = document.querySelector('#input_Hora');
let intMinutos = document.querySelector('#input_Minutos');




reset.addEventListener('click', () => {
    hours.textContent = '00';
    minutes.textContent = '00';
    seconds.textContent = '00';
});

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
        }else{
            minutes.textContent = intMinutos.value;
        }
    }

    if (intHora.value != '') {
        if (intHora.value > 99 || intHora.value < 0) {
            hours.textContent = '99';
        }else{
            hours.textContent = intHora.value;
        }
    }



    seconds.textContent = '60';
    intMinutos.value = '';
    intHora.value = '';

});




