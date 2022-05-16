function cambiarEndDate2(){

    //FORMULARIO3
    
    var inicio=document.getElementById("datepicker_3").value;
    //var fin=document.getElementById("datepicker2").value;
    
    var start=new Date(inicio);
    start.setFullYear(start.getFullYear()+5);
    var startf = start.toISOString().slice(0,10).replace(/-/g,"/");
    document.getElementById("datepicker2_3").value= startf;
    }