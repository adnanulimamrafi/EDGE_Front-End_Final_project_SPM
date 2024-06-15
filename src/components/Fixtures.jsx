import { Table } from "react-bootstrap";
import "./Fixtures.css";

const Fixtures = () => {
  const fixtures = [
    {
      date: "2024-06-15",
      teamA: "Team A",
      teamB: "Team B",
      venue: "Central Field",
    },
    {
      date: "2024-06-16",
      teamA: "Team C",
      teamB: "Team D",
      venue: "Central Field",
    },
    {
      date: "2024-06-19",
      teamA: "Team E",
      teamB: "Team D",
      venue: "Central Field",
    },
    {
      date: "2024-06-19",
      teamA: "Team B",
      teamB: "Team D",
      venue: "Central Field",
    },
    {
      date: "2024-06-19",
      teamA: "Team E",
      teamB: "Team A",
      venue: "Central Field",
    },
  ];

  return (
    <div className="fixtures-container">
      <h2 className="text-center my-4">Match Fixtures</h2>
      <Table striped bordered hover className="fixtures-table">
        <thead className="fixtures-thead">
          <tr>
            <th>Date</th>
            <th>Team </th>
            <th>Team </th>
            <th>Venue</th>
          </tr>
        </thead>
        <tbody>
          {fixtures.map((fixture, index) => (
            <tr key={index} className="fixtures-row">
              <td>{fixture.date}</td>
              <td>{fixture.teamA}</td>
              <td>{fixture.teamB}</td>
              <td>{fixture.venue}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Fixtures;
