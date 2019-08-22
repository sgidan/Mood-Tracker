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
          <Card.Body>
              <div>
                  I am grateful for: {props.one}{' '} {props.two}{' '}{props.three}
                  <br/>
                  Make today great: {props.four}{' '} {props.five} {' '}{props.six}
                  <br/>
                  I am:{' '}{props.seven}
                  <br/>
                  Thoughts: 
                  <br/>
                  {props.eight}

                  </div>   
            {/* <table style={{ border: "1px solid black" }}>
              <tr>
                <th>
                  <td>I am grateful for</td>
                  <td>What would make today great?</td>
                  <td>Daily affirmations:</td>
                  <td>Brain Dump</td>
                </th>
              </tr>
              <tbody>
                <tr>
                  <td>{props.one}</td>
                  <td>{props.two}</td>
                  <td>{props.three}</td>
                </tr>
                <tr>
                  <td>{props.four}</td>
                  <td>{props.five}</td>
                  <td>{props.six}</td>
                </tr>
                <tr>
                  <td>{props.seven}</td>
                </tr>
                <tr>
                  <td>{props.eight}</td>
                </tr>
              </tbody>
            </table> */}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </div>
  );
}
