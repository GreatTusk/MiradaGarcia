function validarFormulario(event) {
  event.preventDefault();
  let nombre = $("#nombre").val();
  let apellido = $("#apellido").val();
  let fono = $("#fono").val();
  let email = $("#email").val();
  let numero_personas = $("#numero_personas").val();
  let presupuesto = $("#presupuesto").val();
  let fecha_evento = $("#fecha").val();
  let rut = $("#rut").val();

  let mannana = new Date().getDate() + 1;

  if (contieneNumber(nombre)) {
    alert("El nombre no puede contener números.");
    $("#submit-button").prop("disabled", true);
    return;
  }

  if (contieneNumber(apellido)) {
    alert("El nombre no puede contener números.");
    $("#submit-button").prop("disabled", true);
    return;
  }

  if (fono.length !== 9) {
    alert("El número de teléfono debe tener 9 dígitos.");
    $("#submit-button").prop("disabled", true);
    return;
  }

  if (email.indexOf("@") === -1) {
    alert("El email debe contener un @.");
    $("#submit-button").prop("disabled", true);
    return;
  }

  if (numero_personas < 1 || numero_personas > 1000) {
    alert("El número de personas debe ser entre 1 y 1000.");
    $("#submit-button").prop("disabled", true);
    return;
  }

  if (presupuesto < 1000 || presupuesto > 10000000) {
    alert("El presupuesto debe ser entre 1000 y 10000000.");
    $("#submit-button").prop("disabled", true);
    return;
  }

  try {
    let fecha = new Date(fecha_evento);
    if (fecha < mannana) {
      alert("La fecha debe ser a partir de mañana.");
      $("#submit-button").prop("disabled", true);
      return;
    }
  } catch (error) {
    alert("La fecha no es válida.");
    $("#submit-button").prop("disabled", true);
    return;
  }

  if (!validarRut(rut)) {
    alert("El rut no es válido.");
    $("#submit-button").prop("disabled", true);
    return;
  }

  $("#submit-button").prop("disabled", false);
  this.submit();
}

function contieneNumber(str) {
  // Que contenga algún número
  return /\d/.test(str);
}

function validarRut(rut) {
  let rutSinGuion = rut.replace(/\./g, "").replace(/-/g, "");
  let rutSoloNumeros = rutSinGuion.slice(0, -1);
  let digitoVerificador = rutSinGuion.slice(-1).toUpperCase();

  if (rutSinGuion.length < 2) {
    return false;
  }

  let suma = 0;
  let multiplo = 2;

  for (let i = 1; i <= rutSoloNumeros.length; i++) {
    let index = multiplo * rutSoloNumeros.charAt(rutSoloNumeros.length - i);
    suma = suma + index;
    if (multiplo < 7) {
      multiplo = multiplo + 1;
    } else {
      multiplo = 2;
    }
  }

  let dvEsperado = 11 - (suma % 11);

  let dv = dvEsperado === 10 ? "K" : dvEsperado === 11 ? 0 : dvEsperado;

  return dv.toString() === digitoVerificador;

}
