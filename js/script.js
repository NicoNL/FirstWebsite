showContent(1);

function showContent(button) {
  // Ocultar todos los contenidos
  document.getElementById('option1').style.display = 'none';
  document.getElementById('option2').style.display = 'none';

  // Mostrar el contenido correspondiente al botón clickeado
  document.getElementById('option' + button).style.display = 'block';
}