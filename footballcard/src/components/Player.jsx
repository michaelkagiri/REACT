import React from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import "../styles.css";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card className="fifa-card">
      <div className="card-header">
        <span className="player-age">{age}</span>
        <span className="player-nation">{nationality}</span>
      </div>
      <Card.Img variant="top" src={imageUrl} alt={name} className="player-img" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team} <br />
          <strong>Jersey:</strong> #{jerseyNumber}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

// Default Props
Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 18,
  imageUrl: "https://via.placeholder.com/150"
};

// PropTypes
Player.propTypes = {
  name: PropTypes.string,
  team: PropTypes.string,
  nationality: PropTypes.string,
  jerseyNumber: PropTypes.number,
  age: PropTypes.number,
  imageUrl: PropTypes.string
};

export default Player;
