import React from "react";
import { Accordion, Card } from "react-bootstrap";
import moment from "moment";

export default function index(props) {
  let {date} = props;
  date = `Journal Entry Date: ${moment(date).format("MM/DD/YYYY")}`;
  return (
    <div>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          {date}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <div>
              I am grateful for: {props.one} {props.two} {props.three}
              <br />
              Make today great: {props.four} {props.five} {props.six}
              <br />I am: {props.seven}
              <br />
              Thoughts:
              <br />
              {props.eight}
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </div>
  );
}
