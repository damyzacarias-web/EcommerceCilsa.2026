const initializer = () => {
  const form = document.getElementById("contact-form");
  const successAlert = document.getElementById("contact-success");

  form.addEventListener("input", validarCampos);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    validarCampos();

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      successAlert.classList.add("d-none");
      return;
    }

    successAlert.classList.remove("d-none");
    form.reset();
    form.classList.remove("was-validated");
  });
}

const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÜüÑñ ]+$/;
// letras, numeros y puntuacion normal, sin simbolos tipo < > { } / ; $
const textoSinSimbolos = /^[A-Za-zÁÉÍÓÚáéíóúÜüÑñ0-9\s.,:¿?¡!()"'%-]+$/;

const validarCampos = () => {
  validarConRegex(document.getElementById("nombre"), soloLetras);
  validarConRegex(document.getElementById("apellido"), soloLetras);
  validarConRegex(document.getElementById("consulta"), textoSinSimbolos);
}

const validarConRegex = (campo, regex) => {
  const valor = campo.value.trim();

  if (valor != "" && !regex.test(valor)) {
    campo.setCustomValidity("Formato inválido");
  } else {
    campo.setCustomValidity("");
  }
}

document.addEventListener("DOMContentLoaded", initializer)
