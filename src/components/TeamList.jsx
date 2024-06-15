import React from "react";
import { ListGroup, Card, Container } from "react-bootstrap";
import "./TeamList.css";

const TeamList = () => {
  const teams = [
    {
      name: "Team A",
      color: "#ff6f61",
      logo: "https://via.placeholder.com/50/FF6F61/FFFFFF?text=A",
      description: "Team A is known for their aggressive play style.",
    },
    {
      name: "Team B",
      color: "#6b5b95",
      logo: "https://via.placeholder.com/50/6B5B95/FFFFFF?text=B",
      description: "Team B has a strong defense and strategic gameplay.",
    },
    {
      name: "Team C",
      color: "#88b04b",
      logo: "https://via.placeholder.com/50/88B04B/FFFFFF?text=C",
      description: "Team C excels in quick counter-attacks.",
    },
    {
      name: "Team D",
      color: "#f7cac9",
      logo: "https://via.placeholder.com/50/F7CAC9/FFFFFF?text=D",
      description: "Team D has a balanced team with skilled players.",
    },
  ];

  return (
    <Container className="team-list-container">
      <h2 className="text-center mb-4">Team List</h2>
      <ListGroup>
        {teams.map((team, index) => (
          <ListGroup.Item
            key={index}
            className="team-list-item"
            style={{ borderColor: team.color }}
          >
            <Card className="team-card">
              <Card.Img variant="top" src={team.logo} className="team-logo" />
              <Card.Body>
                <Card.Title style={{ color: team.color }}>
                  {team.name}
                </Card.Title>
                <Card.Text>{team.description}</Card.Text>
              </Card.Body>
            </Card>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default TeamList;
