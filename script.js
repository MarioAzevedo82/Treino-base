
function horaAtual(){

    var display = document.querySelector('.display')
    
    var agora = new Date()
    
    var horario = horaCerta(agora.getHours()) + ":" + horaCerta(agora.getMinutes()) + ":" + horaCerta(agora.getSeconds())
    
    display.textContent = horario

    function horaCerta(num) {
        if(num < 10){
            num = "0"+ num
        }
        return num
    }
}


horaAtual()
setInterval(horaAtual, 1000)