function updateTime(){
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    //const ampm = hours >= 24 ? 'PM' : 'AM';


    // Converter formato de 24 horas para 12 horas
    //hours = hours % 12;
    //hours = hours ? hours : 12; // Se a hora for 0 (meia-noite), transforme em 12


    // Adicionar zero à esquerda para minutos e segundos menores que 10
    const hoursString = hours < 10 ? '0' + hours : hours;
    const minutesString = minutes < 10 ? '0' + minutes : minutes;
    const secondsString = seconds < 10 ? '0' + seconds : seconds;


    // Atualizar a hora no HTML
    const timeString = `${hoursString} : ${minutesString}`;
    document.getElementById('time').textContent = timeString;

    // Atualizar os segundos
    const secondsAmPmString = `${secondsString}`;
    document.getElementById('seconds').textContent = secondsAmPmString;

}

// Atualiza o relógio a cada segundo
setInterval(updateTime, 1000);

// Chama a função para mostrar o relógio imediatamente ao carregar a página
updateTime();