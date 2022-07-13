function PegaHora(){
    var data = new Date();
    var hora    = data.getHours();
    var min     = data.getMinutes();
    var datainteira;
    if (min<'10' ) {
      datainteira = hora+':0'+min;  
    }else{
      datainteira = hora+':'+min;  
    }
    return datainteira;    
}
export default PegaHora;