function showDateAndTime() {
  var today = new Date();
  document.getElementById('fecha').innerHTML = today.toLocaleString();
  updateTime();
}

function updateTime() {
  var refresh = 1000;
  time = setTimeout('showDateAndTime()', refresh);
}



// jQuery para validacion de Email

$(document).ready(function () {
  $('#comprobar').click(function () {
    if ($("#exampleFormControlInput1").val().indexOf('@', 0) == -1 || $("#exampleFormControlInput1").val().indexOf('.', 0) == -1) {
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

  var x = setInterval(function () {

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
  }, 1000);
}

contadorSale();


// validacion de rut

function checkRut(rut) {
  // Despejar Puntos
  var valor = rut.value.replace('.', '');
  // Despejar Guión
  valor = valor.replace('-', '');

  // Aislar Cuerpo y Dígito Verificador
  cuerpo = valor.slice(0, -1);
  dv = valor.slice(-1).toUpperCase();

  // Formatear RUN
  rut.value = cuerpo + '-' + dv

  // Si no cumple con el mínimo ej. (n.nnn.nnn)
  if (cuerpo.length < 7) { rut.setCustomValidity("RUT Incompleto"); return false; }

  // Calcular Dígito Verificador
  suma = 0;
  multiplo = 2;

  // Para cada dígito del Cuerpo
  for (i = 1; i <= cuerpo.length; i++) {

    // Obtener su Producto con el Múltiplo Correspondiente
    index = multiplo * valor.charAt(cuerpo.length - i);


    // Sumar al Contador General
    suma = suma + index;

    // Consolidar Múltiplo dentro del rango [2,7]
    if (multiplo < 7) { multiplo = multiplo + 1; } else { multiplo = 2; }

  }

  // Calcular Dígito Verificador en base al Módulo 11
  dvEsperado = 11 - (suma % 11);

  // Casos Especiales (0 y K)
  dv = (dv == 'K') ? 10 : dv;
  dv = (dv == 0) ? 11 : dv;

  // Validar que el Cuerpo coincide con su Dígito Verificador
  if (dvEsperado != dv) { rut.setCustomValidity("RUT Inválido"); return false; }

  // Si todo sale bien, eliminar errores (decretar que es válido)
  rut.setCustomValidity('');
}
