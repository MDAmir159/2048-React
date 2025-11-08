import React from "react";
import { getImagePath } from "../config";

const GameOverlay = ({ onRestart, board }) => {
  if (board.hasWon()) {
    return <div className="tile2048"></div>;
  } else if (board.hasLost()) {
    const tryAgainImage = getImagePath('gameAssets', 'tryAgain');
    
    return (
      <div className="gameOver" onClick={onRestart}>
        <img
          src={tryAgainImage}
          alt="Inténtalo de nuevo!!"
          style={{
            width: "100%",
            height: "100%",
            cursor: "pointer",
          }}
        />
      </div>
    );
  }

  return null;
};

export default GameOverlay;