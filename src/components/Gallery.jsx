import { Container, Row, Col, Card } from "react-bootstrap";

const Gallery = () => {
  const teams = [
    {
      name: "Team A",
      image:
        "https://images.pexels.com/photos/16545265/pexels-photo-16545265/free-photo-of-american-football-player-running.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Team B",
      image:
        "https://images.pexels.com/photos/3684122/pexels-photo-3684122.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Team C",
      image:
        "https://images.pexels.com/photos/2209/people-men-grass-sport.jpg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Team D",
      image:
        "https://images.pexels.com/photos/18075712/pexels-photo-18075712/free-photo-of-soccer-players-making-huddle-before-match.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      name: "Team E",
      image:
        "https://images.pexels.com/photos/6203592/pexels-photo-6203592.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      name: "Team F",
      image:
        "https://images.pexels.com/photos/8941654/pexels-photo-8941654.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Team Gallery</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {teams.map((team, index) => (
          <Col key={index}>
            <Card className="h-100">
              <Card.Img variant="top" className="img-fluid img-thumbnail" src={team.image} alt={team.name} />
              <Card.Body>
                <Card.Title>{team.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;
