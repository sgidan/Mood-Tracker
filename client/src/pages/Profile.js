import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Form from "react-bootstrap/Form";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import axios from "axios";
import { Card } from "react-bootstrap";
require("dotenv").config();
//access by process.env.API_key

class Profile extends Component {
  state = {
    name: "",
    error: "",
    userId: "",
    journals: [],
    moods: ''
  };

  handleInputChange = event => {
    const { label, value } = event.target;
    console.log("event.target", event.target.value)
    // this.setState({
      // [name]: value
    // });
  };

  componentDidMount() {
    let user = JSON.parse(localStorage.getItem("user"));
    console.log("user is here", user);
    this.setState({ userId: user.id, name: user.name }, function() {
      console.log("USERID", this.state.userId);

      // axios.get("/api/users/profile/:id")
      // TODO: Will need to update 'name' to specific id or something more secure/poignant
      API.getUserProfile(user.id)
        .then(res => {
          console.log("get user profile response", res);
          this.setState({
            //  name: res.data.name,
            journals: res.data.journals,
            moods: res.data.moods
          });
          console.log("STATE", this.state);
        })
        .catch(err => {
          if (err) {
            this.setState({ error: err.message });
          }
        });
    });
  }

  render() {
    let q = 0;
    return (
      <Container fluid>
        <Row>
          <Col size="lg">
            <h1>Mood Quiz</h1>
            <Form>
              {["checkbox"].map(type => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="1"
                    value="1"
                    type={type}
                    id={`inline-${type}-1`}
                    onChange= {this.handleInputChange}
                  />
                 
                </div>
              ))}
            </Form>
            <FormBtn variant="danger" name="submit-mood">
              Submit
            </FormBtn>
          </Col>
        </Row>
        <Row>
          <Col size="md">
            <Jumbotron>
              <h1>Scraped youtube videos</h1>
            </Jumbotron>
          </Col>

          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>react-trend graph for moods</h1>
            </Jumbotron>
          </Col>
        </Row>
        {/* <Row> */}
        <Container>
          <Card className="kevin">
            <Card.Header as="h5">Journal</Card.Header>
            <Card.Body>
              <Card.Title>{this.state.name}'s Daily Journal Entry</Card.Title>
              <Card.Text>
                <form className="journalForm">
                  <p>I am grateful for...</p>
                  <Input name="q1" placeholder="1." />
                  <Input name="title" placeholder="2." />
                  <Input name="title" placeholder="3." />
                  <p>What would make today great?</p>
                  <Input name="author" placeholder="1" />
                  <Input name="title" placeholder="2" />
                  <Input name="title" placeholder="3" />
                  <p>Daily affirmations:</p>
                  <Input name="title" placeholder="I am.." />
                  <p>Brain Dump</p>
                  <TextArea
                    name="synopsis"
                    placeholder="Other notes, ramblings you need to release (Optional)"
                  />
                </form>
              </Card.Text>
              <FormBtn variant="primary">Submit Journal</FormBtn>
            </Card.Body>
          </Card>
        </Container>
        {/* </Row> */}
      </Container>
    );
  }
}

export default Profile;
