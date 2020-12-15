import React from "react";
import { Card } from "react-bootstrap";

export default function PokemonCard({
  baseExperience,
  frontImage,
  height,
  name,
  weight,
}) {
  return (
    <div className="pokemonCard">
      <Card
        style={{
          width: "18rem",
          border: "none",
          margin: "20px",
          boxShadow: "3px 3px 5px 6px #ccc",
          color: "white",
        }}
      >
        <Card.Img variant="top" src={frontImage} />
        <Card.Body style={{ width: "18rem", backgroundColor: "#007bff" }}>
          <Card.Title>Name: {name && name.toUpperCase()}</Card.Title>
          <Card.Text>Height: {height}</Card.Text>
          <Card.Text>Weight: {weight}</Card.Text>
          <Card.Text>Base Experience: {baseExperience}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
