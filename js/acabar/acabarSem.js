let day = document.querySelector('#day');


function acabarSem() {
    let data = new Date();
    let horasAt = data.getHours();
    let minutosAt = data.getMinutes();
    let segundosAt = data.getSeconds();
    let dayAt = data.getDay();

    let semanas = ['1','2','3','4','5','6','7'];
    let correct_day = semanas[dayAt];


    // Colocar o 0 na frente
    if(horasAt<10){
        horasAt = "0"+horasAt;
    }
    if(minutosAt<10){
        minutosAt = "0"+minutosAt;
    }

    if(segundosAt<10){
        segundosAt = "0"+segundosAt;
    }

    // Usando a lógica não optei por 24 horas e 60 minutos em algumas
    day.textContent = 7 - correct_day;
    hours.textContent = 23 - horasAt;
    minutes.textContent = 59 - minutosAt;
    seconds.textContent = 60 - segundosAt;

}

// Atualize as informações a cada segundo
setInterval(acabarSem,1000);