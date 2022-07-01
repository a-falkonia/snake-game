const generateField = () => {
  const field = document.querySelector('.field');

  for (let rowIndex = 0; rowIndex < fieldSize; rowIndex++) {
    const row = document.createElement('div');
    row.classList.add('field__row');

    for (let colIndex = 0; colIndex < fieldSize; colIndex++) {
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      row.appendChild(checkbox);
    }
    field.appendChild(row);
  }
};

generateField(fieldSize);
