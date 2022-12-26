import React from "react";
import "./NewGameButton.css";

export const NewGameButton = ({ resetBoard }) => {
  return (
    <button className="newgame" onClick={resetBoard}>
      New Game
    </button>
  );
};
