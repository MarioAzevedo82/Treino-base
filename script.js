
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

fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
        const cidade = data.city;
        document.getElementById('cidade').textContent = cidade ? cidade: 'Cidade não encontrada'
    })

    .catch(error => {
        console.error('Erro ao buscar a cidade:', error)
        document.getElementById('cidade').textContent = 'Erro ao detectar cidade'
    })