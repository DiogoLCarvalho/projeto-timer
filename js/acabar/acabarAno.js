let day = document.querySelector('#day');


function acabarSem() {
    let data = new Date();
    let horasAt = data.getHours();
    let minutosAt = data.getMinutes();
    let segundosAt = data.getSeconds();
    let ano = data.getFullYear();

    // Data 
    let dataformatada = data.toLocaleDateString();
    let dataAno = `12/31/${ano}`

    // Comandos da biblioteca
    let diff = moment(dataAno, "MM/DD/YYYY").diff(moment(dataformatada, "MM/DD/YYYY"))
    let diasFaltantes = moment.duration(diff).asDays();


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

    // O método Number.isInteger() determina se o valor passado é um inteiro.
    let verificaAno = Number.isInteger(ano/4);
    
    if(verificaAno){
        day.textContent = 1 + diasFaltantes

    }else{
        day.textContent = diasFaltantes
    }

    hours.textContent = 23 - horasAt;
    minutes.textContent = 59 - minutosAt;
    seconds.textContent = 60 - segundosAt;

}

// Atualize as informações a cada segundo
setInterval(acabarSem,1000);