import { useEffect, useState } from "react";

const width = 8;
const candyColors = ["red", "blue", "orange", "green", "purple", "yellow"];

const App = () => {
  const [currentColorArrangement, setCurrentColorArrangement] = useState([]);

  // function to create the board
  const createBoard = () => {
    // declaring array to store randomColors
    const randomColorArrangement = [];
    // we are going to create an 8x8 sized board (widthxwidth) where each square in the board will have a random color picked out of the candyColors array
    // running the loop 64 times so that each time random colors are generated
    for (let i = 0; i < width * width; i++) {
      // random number generator from 0 to 5 (the number of elements in candyColors array)
      const randomNumberFrom0to5 = Math.floor(
        Math.random() * candyColors.length
      );
      // this will pick a random color based on previous function's number output which will  be passed as index
      const randomColor = candyColors[randomNumberFrom0to5];
      // now we need to store these random colors as an array
      randomColorArrangement.push(randomColor);
    }
    setCurrentColorArrangement(randomColorArrangement);
  };
  // useEffect called with [] so that createBoard() is called only once
  // if I were to pass another arguement inside [], say [width], the useEffect will get triggered once width changesS
  useEffect(() => {
    createBoard();
  }, []);
  console.log(currentColorArrangement);
  return;
};

export default App;
