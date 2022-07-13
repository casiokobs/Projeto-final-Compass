function PegaData(){
    var now = new Date
    var dayName = new Array ("domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado");
    var monName = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Agosto", "Outubro", "Novembro", "Dezembro");
    return dayName[now.getDay()] + ", " + now.getDate () + " de " + monName [now.getMonth()]   +  " de "  +     now.getFullYear ();    
  }
  export default PegaData;