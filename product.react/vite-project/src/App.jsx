import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";

const firstName = "Alex"; // Replace with your first name or leave it empty

function App() {
  return (
    <div className="App" style={{ padding: "20px" }}>
      <Card style={{ width: "18rem", margin: "auto" }}>
        <Card.Body>
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      <div style={{ marginTop: "20px" }}>
        {firstName ? (
          <>
            <p>Hello, {firstName}!</p>
            <img src="" alt="User" /> {/* Replace with your image */}
          </>
        ) : (
          <p>Hello, there!</p>
        )}
      </div>
    </div>
  );
}

export default App;