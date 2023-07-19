const loginForm = document.querySelector('[data-formLogin]');
const loginMessage = document.getElementById('loginMessage');


loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

  // Obtenemos los valores de usuario y contraseña
  const usernameElement = document.querySelector('[data-email]');
  const passwordElement = document.querySelector('[data-password]');
  const username = usernameElement.value;
  const password = passwordElement.value;

  // Comprobamos si las credenciales son válidas (ejemplo)
  if (username === 'joelmatosb@outlook.com' && password === '1234') {
    // Credenciales válidas, mostramos dashboard
    window.location.replace("../screen/dashboard.html");
  } else {
    // Credenciales inválidas, mostramos mensaje de error
 
    loginMessage.textContent = 'Credenciales inválidas';
    loginMessage.style.color = 'red';
    usernameElement.value = '';
    passwordElement.value = '';
    usernameElement.focus();
  }

})
