window.addEventListener("DOMContentLoaded", (event) => {

  let burgerMenu = document.getElementById('burger_menu');

  let overlay = document.getElementById('menu');

  burgerMenu.addEventListener('click', function() {
    this.classList.toggle("close");
    overlay.classList.toggle("overlay");
  });

});