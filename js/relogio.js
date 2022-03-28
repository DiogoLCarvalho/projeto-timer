function relogio() {
    var data = new Date();
    var horasAt = data.getHours();
    var minutosAt = data.getMinutes();
    var segundosAt = data.getSeconds();

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

    hours.textContent = horasAt;
    minutes.textContent = minutosAt;
    seconds.textContent = segundosAt;

}

// Atualize as informações a cada segundo
setInterval(relogio,1000);