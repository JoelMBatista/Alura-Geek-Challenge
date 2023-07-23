import { timeOut } from "./time-out.js";

const loginForm = document.querySelector("[data-formLogin]");
const loginMessage = document.getElementById("loginMessage");

// function sleep(ms) {
//   return new Promise((val) => setTimeout(val, ms));
// }

loginForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  // Obtenemos los valores de usuario y contraseña
  const usernameElement = document.querySelector("[data-email]");
  const passwordElement = document.querySelector("[data-password]");
  const username = usernameElement.value;
  const password = passwordElement.value;

  // Comprobamos si las credenciales son válidas (ejemplo)
  if (username === "joelmatosbatista@alura.com" && password === "1234") {
    // Credenciales válidas, mostramos dashboard
    // alert('llegamos');
    
    timeOut.loading();
    await timeOut.sleep(3000);
    window.location.replace("../screen/dashboard.html");
  } else {
    // Credenciales inválidas, mostramos mensaje de error
    loginMessage.textContent = "Credenciales inválidas";
    loginMessage.style.color = "red";
    usernameElement.value = "";
    passwordElement.value = "";
    usernameElement.focus();
  }
});
