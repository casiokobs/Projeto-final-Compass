function PegaData(){
    var now = new Date
    var dayName = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado");
    var monName = new Array ("janeiro", "fevereiro", "março", "abril", "Maio", "junho", "agosto", "outubro", "novembro", "dezembro");
    return dayName[now.getDay() ] + ", " + now.getDate () + " de " + monName [now.getMonth() ]   +  " de "  +     now.getFullYear ();    
  }
  
  export default PegaData;