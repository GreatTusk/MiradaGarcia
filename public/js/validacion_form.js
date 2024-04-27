function validarFormulario(event) {

  event.preventDefault();
  let nombre = $("#nombre").val();
  let apellido = $("#apellido").val();
  let fono = $("#fono").val();
  let email = $("#email").val();
  let numero_personas = $("#numero_personas").val();
  let presupuesto = $("#presupuesto").val();
  let fecha_evento = $("#fecha").val();
  let mensaje = $("#mensaje").val();

  let mannana = new Date().getDate() + 1;

  if (contieneNumber(nombre)) {
    alert("El nombre no puede contener números.");
    $('#submit-button').prop('disabled', true);
    return;
  }

  if (contieneNumber(apellido)) {
    alert("El nombre no puede contener números.");
    $('#submit-button').prop('disabled', true);
    return;
  }

  if (fono.length !== 9) {
    alert("El número de teléfono debe tener 9 dígitos.");
    $('#submit-button').prop('disabled', true);
    return;
  }

  if (email.indexOf("@") === -1) {
    alert("El email debe contener un @.");
    $('#submit-button').prop('disabled', true);
    return;
  }

  if (numero_personas < 1 || numero_personas > 1000) {
    alert("El número de personas debe ser entre 1 y 1000.");
    $('#submit-button').prop('disabled', true);
    return;
  }

  if (presupuesto < 1000 || presupuesto > 10000000) {
    alert("El presupuesto debe ser entre 1000 y 10000000.");
    $('#submit-button').prop('disabled', true);
    return;
  }

  try {
    let fecha = new Date(fecha_evento);
    if (fecha < mannana) {
      alert("La fecha debe ser a partir de mañana.");
      $('#submit-button').prop('disabled', true);
      return;
    }
  } catch (error) {
    alert("La fecha no es válida.");
    $('#submit-button').prop('disabled', true);
    return;
  }
  $('#submit-button').prop('disabled', false);
  this.submit();
}

function contieneNumber(str) {
  // Que contenga algún número
  return /\d/.test(str);
}
