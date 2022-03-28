let day = document.querySelector('#day');


function acabarSem() {
    let data = new Date();
    let horasAt = data.getHours();
    let minutosAt = data.getMinutes();
    let segundosAt = data.getSeconds();
    let dayMon = data.getDate();


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


    let meses=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
    let mesCorreto = meses[data.getMonth()]

    if(mesCorreto == 'Abril' || mesCorreto == 'Junho'|| mesCorreto == 'Setembro'|| mesCorreto == 'Novembro'){
        day.textContent = 30 - dayMon;
    }else if(mesCorreto == 'Fevereiro'){
        day.textContent = 28 - dayMon;
    }else{
        day.textContent = 31 - dayMon;
    }

    hours.textContent = 23 - horasAt;
    minutes.textContent = 59 - minutosAt;
    seconds.textContent = 60 - segundosAt;

}

// Atualize as informações a cada segundo
setInterval(acabarSem,1000);