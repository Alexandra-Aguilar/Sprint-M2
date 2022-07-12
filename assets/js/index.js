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

function contadorSale() {
    var countDownDate = new Date("Jul 31, 2022 23:59:59").getTime();
    
    var x = setInterval(function() {
    
      var now = new Date().getTime();
    
      var distance = countDownDate - now;
    
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
      document.getElementById("saleend").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
    
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("saleend").innerHTML = "¡Promoción agotada!";
      }
    }, 1000);}

    contadorSale();
