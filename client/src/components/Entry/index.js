import React from "react";
import { Accordion, Card } from "react-bootstrap";

export default function index(props) {
  return (
    <div>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          {props.date}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>what ever you want here</Card.Body>
        </Accordion.Collapse>
      </Card>
    </div>
  );
}
