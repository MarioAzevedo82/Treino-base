
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
    const codigoPais = data.country_code?.toLowerCase(); 

    if (cidade && codigoPais) {
      const bandeiraURL = `https://flagcdn.com/16x12/${codigoPais}.png`;
      const mapsURL = `https://www.google.com/maps/search/${encodeURIComponent(cidade)}`;

      document.getElementById('cidade').innerHTML = `
        <span>${cidade}</span>
        <a href="${mapsURL}" target="_blank" title="Ver no Google Maps">
          <img src="${bandeiraURL}" alt="Bandeira de ${codigoPais}">
        </a>`;
    } else {
      document.getElementById('cidade').textContent = 'Cidade não encontrada';
    }
  })
  .catch(error => {
    console.error('Erro ao buscar cidade:', error);
    document.getElementById('cidade').textContent = 'Erro ao detectar cidade';
  });
