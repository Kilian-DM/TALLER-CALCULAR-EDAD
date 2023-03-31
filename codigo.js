function calcularfecha() {
  var nombre = document.getElementById("nombre").value;
  var diaNacimiento = document.getElementById("dia").value;
  var mesNacimiento = document.getElementById("mes").value;
  var añoNacimiento = document.getElementById("año").value;
  var diaacActual = document.getElementById("diaac").value;
  var mesacActual = document.getElementById("mesac").value;
  var añoacActual = document.getElementById("añoac").value;
  this.nombre = nombre;
  this.diaNacimiento = diaNacimiento;
  this.mesNacimiento = mesNacimiento;
  this.anioNacimiento = añoNacimiento;
  this.diaacActual = diaacActual;
  this.mesacActual = mesacActual;
  this.añoacActual = añoacActual;
  var nombreres;
  var diares;
  var mesres;
  var añores;
  if (añoacActual >= añoNacimiento) {
    nombreres = nombre;
    añores = añoacActual - añoNacimiento;

    if (mesacActual >= mesNacimiento) {
      mesres = mesacActual - mesNacimiento;
      if (diaacActual >= diaNacimiento) {
        diares = diaacActual - diaNacimiento;
      } else {
        diares = 0;
      }
    } else {
      mesres = 0;
      diares = diaacActual - diaNacimiento;
      if (diaacActual >= diaNacimiento) {
		diares = diaacActual - diaNacimiento;
      } else {
        diares = 0;
      }
    }
    document.getElementById("nombreres").innerHTML = "nombre: " + nombreres;
    document.getElementById("diares").innerHTML = diares + " dias";
    document.getElementById("mesres").innerHTML = mesres + " meses";
    document.getElementById("añores").innerHTML = añores + " años";
  } else {
    alert("error fecha del año");
  }
}
