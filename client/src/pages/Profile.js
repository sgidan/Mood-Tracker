import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Form from "react-bootstrap/Form";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import axios from "axios";
import { Card } from "react-bootstrap";
import Graph from "../components/Graph";

require("dotenv").config();
//access by process.env.API_key

class Profile extends Component {
  state = {
    name: "",
    error: "",
    userId: "",
    journals: [],
    moods: [],
    json: {
      questions: [
        {
          type: "radiogroup",
          name: "q1",
          title: "How are you feeling overall today?",
          isRequired: true,
          colCount: 5,
          choices: [1, 2, 3, 4, 5]
        }
      ]
    }
  };

  //Define a callback methods on survey complete
  onComplete = (survey, options) => {
    let self = this;
    //Write survey results into database
    console.log("Survey results: " + JSON.stringify(survey.data)); // {"name": [choice]}
    //pull ID from local storage.
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("LocalStorage results: ", user.id);
    //is this supposed to be this.state.json??? or survey.data from above?
    const {data} = survey
    const {id} = user
    API.submitSurvey({data, id}) 
      .then(response => {
        console.log(response);
        // this.props.history.push("/profile");

          let {_id} = response.data
          let surveyAns = response.data.score[0];
          self.state.moods.push(surveyAns);
          self.setState({
             userId: _id,
             moods: self.state.moods
           }, function() {
             console.log('moods', self.state.moods);
           });

      });
  };

  handleInputChange = event => {
    const { label, value } = event.target;
    console.log("event.target", event.target.value);
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
  handleOnChange = event => {
    this.setState({ [event.target.id]: event.target.value });
    console.log(this.state);
    console.log("event.target.id", [event.target.id]);
  };

  handleSubmit = event => {
    event.preventDefault();
    const { journals } = this.state;
    const self = this;
    console.log(journals);
    const journalEntry = {};
    for (let key in this.state) {
      if (key === 'one' || key === 'two' || key === 'three' || key === 'four'|| key === 'five'|| key === 'six'|| key === 'seven'|| key === 'eight') {
        journalEntry[key] = this.state[key];
      }
    }
    console.log('JOURNAL ENTRY********', journalEntry);
    const {id} = JSON.parse(localStorage.getItem("user"));
    console.log("LocalStorage results: ", id);
    API.saveJournal({id, journalEntry})
    .then(response => {
       console.log("resonse", response)
      })
      .catch(error => {
        if (error) {
          console.log(error);
          this.setState({ error });
        }
      })
  };

  render() {
    var model = new Survey.Model(this.state.json);
    return (
      <Container fluid>
        <Row>
          <Col size="lg">
            <h1>Mood Quiz</h1>
            <Survey.Survey model={model} onComplete={this.onComplete} />
          </Col>
        </Row>
        <Row>
          <Col size="md">
            <Jumbotron>
              <h1>Scraped youtube videos</h1>
            </Jumbotron>
          </Col>

          <Col size="md-6 sm-12">
            {!this.state.moods.length ? 
            <p>Fill out survey to get score</p> 
            : 
            <Graph moods={this.state.moods}/>
            }
            
          </Col>
        </Row>
        {/* <Row> */}
        <Container>
          <Card className="kevin">
            <Card.Header as="h5">Journal</Card.Header>
            <Card.Body>
              <Card.Title>{this.state.name}'s Daily Journal Entry</Card.Title>
              <Card.Text>
                <form
                  className="journalForm"
                  action=""
                  onSubmit={this.handleSubmit}
                >
                  <p>I am grateful for...</p>
                  <Input
                    id="one"
                    name="q1"
                    placeholder="1."
                    onChange={this.handleOnChange.bind(this)}
                  />
                  <Input id="two" 
                  name="q2" 
                  placeholder="2." 
                  onChange={this.handleOnChange.bind(this)}
                  />
                  <Input id="three" 
                  name="q3" 
                  placeholder="3." 
                  onChange={this.handleOnChange.bind(this)}
                  />
                  <p>What would make today great?</p>
                  <Input id="four" 
                  name="q4" 
                  placeholder="1." 
                  onChange={this.handleOnChange.bind(this)}
                  />
                  <Input id="five" 
                  name="q5" 
                  placeholder="2." 
                  onChange={this.handleOnChange.bind(this)}
                  />
                  <Input id="six" 
                  name="q6" 
                  placeholder="3." 
                  onChange={this.handleOnChange.bind(this)}
                  />
                  <p>Daily affirmations:</p>
                  <Input
                  id="seven"
                   name="q7" 
                   placeholder="I am.." 
                   onChange={this.handleOnChange.bind(this)}
                   />
                  <p>Brain Dump</p>
                  <TextArea
                  id="eight"
                    name="q8"
                    placeholder="Other notes, ramblings you need to release (Optional)"
                    onChange={this.handleOnChange.bind(this)}
                  />
                  <FormBtn variant="primary">Submit Journal</FormBtn>
                </form>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
        {/* </Row> */}
      </Container>
    );
  }
}

export default Profile;
