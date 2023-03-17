import React, { useState , useEffect} from "react";
import Tile from "./Tile";
import Cell from "./Cell";
import { Board } from "../helper";
import useEvent from "../hooks/useEvent";
import GameOverlay from "./GameOverlay";
import CakeList from "./CakeList";
import { dummyData } from "../assets/dummyData";

const BoardView = () => {
  const [board, setBoard] = useState(new Board());
  const [maxTileInfo, setMaxTileInfo] = useState(board.score)
  const cakeLists = dummyData
  const handleKeyDown = (event) => {
    if (board.hasWon()) {
      return;
    }

    if (event.keyCode >= 37 && event.keyCode <= 40) {
      let direction = event.keyCode - 37;
      let boardClone = Object.assign(
        Object.create(Object.getPrototypeOf(board)),
        board
      );
      let newBoard = boardClone.move(direction);
      setBoard(newBoard);
    }
  };

  useEvent("keydown", handleKeyDown);
  // console.log(board.currentMaxTileIndex);
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Prevent scrolling using arrow keys
      if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault();
      }
    };

    // Add event listener for arrow key events
    window.addEventListener('keydown', handleKeyDown);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const cells = board.cells.map((row, rowIndex) => {
    return (
      <div key={rowIndex}>
        {row.map((col, colIndex) => {
          return <Cell key={rowIndex * board.size + colIndex} />;
        })}
      </div>
    );
  });

  const tiles = board.tiles
    .filter((tile) => tile.value !== 0)
    .map((tile, index) => {
      return <Tile tile={tile} key={index} />;
    });

  const resetGame = () => {
    setBoard(new Board());
  };

  return (
    <div>
      {/* header game name */}
      <div className="header-container">
        <div className="header-box">
          <h1>2048 CUPCAKES</h1>
        </div>
        <div className="join-cupcakes">
          <p>JOIN THE CUPCAKES !</p>
        </div>
      </div>
      
      <div className="score">
            <div className="score-card">
              <p className="p-title"> KCAL </p>
              <p className="p-value"> {cakeLists[board.currentMaxTileIndex-1].cakeCallories} </p>
            </div>
            <div className="score-card">
                <p className="p-title"> KCAL MAX </p>
                <p className="p-value"> 78440 </p>
            </div>
      </div>
      <div className="score">
        <div className="score-card">
          <p className="p-title">   CUPCAKE </p>
          <p className="p-value"> {cakeLists[board.currentMaxTileIndex-1].cakeName} </p>
        </div>
        <div className="score-card">
            <p className="p-title"> CUPCAKE MAX </p>
            <p className="p-value"> Choc. Spider Web </p>
        </div>
      </div>
      {/* game score and new game button */}
      <div className="details-box">
        
        <div className="resetButton" onClick={resetGame}>
          New Game
        </div>
        {/* <div className="score-box">
          <div className="score-header">POINTS</div>
          <div>{board.score}</div>
        </div> */}
      </div>
      <div className="board">
        {cells}
        {tiles}
        <GameOverlay onRestart={resetGame} board={board} />
      </div>
      <div className="instructions">
        <p><b>HOW TO PLAY:</b> Use your arrow keys to move the tiles. When two tiles with the same symbol touch, they get promoted!</p>
      </div>
      {/* descriptionof all cakes */}
      <div className="legends">
        <div className="legend-title">
          <p> Tile Legend: </p>
        </div>
        <div>
          {
            cakeLists.map((item, index) => {
              return <CakeList key = {index} item = {item} />
            })
          }
        </div>
      </div>

      {/* notes starts */}
      <div className="instructions">
        <p><b>NOTE:</b> This site git.io/cupcakes is a spin-off of the official version of 2048 created by Gabriele Cirulli.</p>
      </div>
    </div>
  );
};

export default BoardView;
