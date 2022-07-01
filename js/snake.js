const rows = document.querySelectorAll('.field__row');

function getItemAt(x, y) {
  return rows[y - 1].children[x - 1];
}

function toggleItemAt(x, y) {
  getItemAt(x, y).checked = !getItemAt(x, y).checked;
}

function placeFood(x, y) {
  getItemAt(x, y).type = 'radio';
  toggleItemAt(x, y);
}

function removeFood(x, y) {
  getItemAt(x, y).type = 'checkbox';
  toggleItemAt(x, y);
}