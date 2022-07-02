const startGame = () => {
    handleInput();
    checkItemAt(...startingPosition)
    foodPosition = getRandomPosition()
    placeFoodAt(...foodPosition)
};

startGame();
