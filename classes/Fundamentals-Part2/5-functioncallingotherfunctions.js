
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applesPieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applesPieces} apples and ${orangePieces} oranges.`;
    return juice
}

console.log(fruitProcessor(2, 3));