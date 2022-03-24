let hours = document.querySelector('#hours');
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');


function acabarDia() {
    let data = new Date();
    let horasAt = data.getHours();
    let minutosAt = data.getMinutes();
    let segundosAt = data.getSeconds();


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
    hours.textContent = 23 - horasAt;
    minutes.textContent = 59 - minutosAt;
    seconds.textContent = 60 - segundosAt;

}

// Atualize as informações a cada segundo
setInterval(acabarDia,1000);