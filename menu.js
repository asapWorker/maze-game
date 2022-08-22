const TITLE = 'Win';
const BTN_TEXT = 'Play again';
const MENU = document.getElementById('menu-wrapper');
let changed = false;

function addStartBtnListener(action) {
  document.getElementById('menu-button').addEventListener('click', action);
}

function showGreetingMenu() {
  MENU.style.visibility = 'visible';
}
function showMenu() {
  if (!changed) {
    document.getElementById('menu-title').innerHTML = TITLE;
    document.getElementById('menu-button').value = BTN_TEXT;
    changed = true;
  }
  MENU.style.visibility = 'visible'
}

function closeMenu() {
  MENU.style.visibility = 'hidden';
}