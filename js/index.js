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

    seconds.textContent = '60';
    intMinutos.value = '';
    intHora.value = '';

    console.log(hours.textContent);
    console.log(minutes.textContent);
    console.log(seconds.textContent);

});



const countDown = () => {

    const meses=["January","February","March","April","May","June","July","August","September","October","November","December"];
    let mesCorreto = meses[new Date().getMonth()];


    const countDate = new Date(`${mesCorreto} ${new Date().getDate()}, ${new Date().getFullYear()} 00:00:00`).getTime();
    // const countDate = new Date(`${mesCorreto} 31, 2022 00:00:00`).getTime();
    const timenow = new Date().getTime();
    const gap = countDate - timenow;


    const timeSecond = 1000;
    const timeMinute = timeSecond * 60;
    const timeHour = timeMinute * 60;
    const timeDay = timeHour * 24;

    const textDay = Math.floor(gap / timeDay);
    const textHour = Math.floor((gap % timeDay) / timeHour);
    const textminute = Math.floor((gap % timeHour) / timeMinute);
    const textSecond = Math.floor((gap % timeMinute) / timeSecond);

    console.log(textDay);
    hours.textContent = textHour;
    minutes.textContent = textminute;
    seconds.textContent = textSecond;
}

setInterval(countDown, 1000);    
