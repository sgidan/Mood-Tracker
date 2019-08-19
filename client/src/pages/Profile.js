import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import axios from "axios";
require("dotenv").config();
//access by process.env.API_key

class Profile extends Component {
  state = {
    name: "",
    error: "",
    user: ""
  };

  componentDidMount() {
    let user = localStorage.getItem("user");
    console.log("user is here", JSON.parse(user));
    this.setState({ name: user.name });
    console.log("NAME", this.state.name);

    axios.get("/api/users/profile/:id").then(res => {
      console.log("whaat is res", res)
      this.setState({ user: res.data.user }).catch(err => {
        if (err) {
          this.setState({ error: err.message });
        }
      });
    });
  }
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md">
            <Jumbotron>
              <h1>{this.state.name}</h1>
            </Jumbotron>
          </Col>

          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>react graph for moods go here </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
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
            <FormBtn>Submit Journal</FormBtn>
          </form>
        </Row>
      </Container>
    );
  }
}

export default Profile;
