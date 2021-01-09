const switchButton = document.querySelector('.js-switch-button');

switchButton.onclick = function() {
  const menu = document.querySelector('.js-menu');
  menu.classList.toggle('menu--showing');
}
