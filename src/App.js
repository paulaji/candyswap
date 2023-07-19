const width = 8;
const candyColors = ["red", "blue", "orange", "green", "purple", "yellow"];

const App = () => {
  // function to create the board
  const createBoard = () => {
    // we are going to create an 8x8 sized board (widthxwidth) where each square in the board will have a random color picked out of the candyColors array
    // running the loop 64 times so that each time random colors are generated
    for (let i = 0; i < width * width; i++) {
      // random number generator from 0 to 5 (the number of elements in candyColors array)
      const randomNumberFrom0to5 = Math.floor(
        Math.random() * candyColors.length
      );
      // this will pick a random color based on previous function's number output which will  be passed as index
      const randomColor = candyColors[randomNumberFrom0to5];
    }
  };
  return;
};

export default App;
