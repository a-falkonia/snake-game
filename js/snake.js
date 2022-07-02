const rows = document.querySelectorAll('.field__row');

function getItemAt(x, y) {
  return rows[y].children[x];
}

function checkItemAt(x, y) {
  getItemAt(x, y).checked = true;
}
function uncheckItemAt(x, y) {
  getItemAt(x, y).checked = false;
}

function placeFoodAt(x, y) {
  getItemAt(x, y).type = 'radio';
  checkItemAt(x, y);
}

function removeFoodAt(x, y) {
  getItemAt(x, y).type = 'checkbox';
  uncheckItemAt(x, y);
}

function getRandomPosition() {
  const availablePositions = [];

  rows.forEach((row, rowIndex) => {
    Array.from(row.children).forEach((input, inputIndex) => {
      if (input.type === 'checkbox' && input.checked === false) {
        availablePositions.push([inputIndex, rowIndex]);
      }
    });
  });

  const index = Math.floor(Math.random() * availablePositions.length - 1) + 1;

  return availablePositions[index];
}

function increaseScore() {
  const score = document.querySelector('.score');
  let currentScore = parseInt(score.innerText, 10);
  score.innerText = currentScore + 1;
}

function move() {
  const head = [...snake[0]];
  const tail = [...snake[snake.length - 1]];

  function updateSnake() {
    snake.unshift(head);
    snake.pop();
    snake.forEach((snakePart) => {
      console.log(...snakePart);
      checkItemAt(...snakePart);
    });
    console.log(snake);
  }

  switch (movingDirection) {
    case 'up':
      head[1] = head[1] == 0 ? fieldSize - 1 : head[1] - 1;
      break;
    case 'down':
      head[1] = (head[1] + 1) % fieldSize;
      break;
    case 'left':
      head[0] = head[0] == 0 ? fieldSize - 1 : head[0] - 1;
      break;
    case 'right':
      head[0] = (head[0] + 1) % fieldSize;
      break;
  }

  updateSnake();
  uncheckItemAt(...tail);
}

function handleInput() {
  document.addEventListener('keydown', (e) => {
    switch (e.key) {
      case 'ArrowLeft':
        movingDirection = movingDirection === 'right' ? 'right' : 'left';
        break;
      case 'ArrowRight':
        movingDirection = movingDirection === 'left' ? 'left' : 'right';
        break;
      case 'ArrowDown':
        movingDirection = movingDirection === 'up' ? 'up' : 'down';
        break;
      case 'ArrowUp':
        movingDirection = movingDirection === 'down' ? 'down' : 'up';
        break;
    }
    console.log(movingDirection);

    if (!moveInterval) {
      moveInterval = setInterval(() => {
        move(movingDirection);
      }, 1000 / speed);
    }
  });
}
