import React from "react";
import Player from "./Player.jsx";
import players from "../data/players.js";

const PlayersList = () => {
  return (
    <div className="players-container">
      {players.map((player) => (
        <Player key={player.id} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
