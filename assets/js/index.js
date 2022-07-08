function showDateAndTime(){
    var today=new Date();  
    document.getElementById('fecha').innerHTML = today.toLocaleString(); 
    updateTime();
}

function updateTime(){
    var refresh = 1000;
    time = setTimeout('showDateAndTime()', refresh);
}



// jQuery para validacion de Email

$(document).ready(function() {
    $('#comprobar').click(function(){
        if($("#exampleFormControlInput1").val().indexOf('@', 0) == -1 || $("#exampleFormControlInput1").val().indexOf('.', 0) == -1) {
            alert('El correo electrónico introducido no es correcto.');
            return false;
        }

        alert('El email introducido es correcto.');
    });

  $("#btnfecha").click(function () {
    $("#fecha").toggle("slow", showDateAndTime());

  });
});

