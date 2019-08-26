import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import Form from "react-bootstrap/Form";
import * as Survey from "survey-react";
import "survey-react/survey.css";
// import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import Entry from "../components/Entry/index";
// import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import { Card, Accordion } from "react-bootstrap";
import Graph from "../components/Graph";
import moment from "moment";

class Profile extends Component {
  state = {
    name: "",
    error: "",
    user: "",
    journals: [],
    moods: [],
    videos: [],
    json: {
      questions: [
        {
          type: "radiogroup",
          name: "q1",
          title: "How are you feeling overall today?",
          isRequired: true,
          colCount: 5,
          choices: [1, 2, 3, 4, 5]
        },
        {
          type: "radiogroup",
          name: "q2",
          title: "How much energy do you have today?",
          isRequired: true,
          colCount: 5,
          choices: [1, 2, 3, 4, 5]
        },
        {
          type: "radiogroup",
          name: "q3",
          title: "How did you sleep last night?",
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
    const { data } = survey;
    const { id } = user;
    API.submitSurvey({ data, id }).then(response => {
      // this.props.history.push("/profile");

      let { _id } = response.data;
      let surveyAns = response.data;
      console.log(surveyAns);
      surveyAns.date = moment(surveyAns.date).format("DD/MM/YYYY");
      console.log(surveyAns);
      self.state.moods.push(surveyAns);
      self.setState(
        {
          userId: _id,
          moods: self.state.moods
        },
        function() {
          console.log("moods", self.state.moods);
        }
      );
    });
  };

  componentDidMount() {
    let user = JSON.parse(localStorage.getItem("user"));
    this.setState({ user }, function() {
      API.getUserProfile(this.state.user._id)
        .then(res => {
          let test = res.data.moods.map(survey => {
            console.log("SURVEY*****", survey);
            survey.date = moment(survey.date).format("DD/MM/YYYY");
          });
          console.log("TESTING TETING************", test);
          this.setState({
            //  name: res.data.name,
            videos: [
              "https://www.youtube.com/embed/7lECIsRif10",
              "https://www.youtube.com/embed/dLme6kE5XaU",
              "https://www.youtube.com/embed/UhWFddWz1Nk",
              "https://www.youtube.com/embed/pvgfucVF5cU",
              "https://www.youtube.com/embed/pJhUs1L_RQo",
              "https://www.youtube.com/embed/xFQLPURE8Ok",
              "https://www.youtube.com/embed/8Su5VtKeXU8",
              "https://www.youtube.com/embed/lbJv4AiDatg",
              "https://www.youtube.com/embed/7jZdXWGKc7M",
              "https://www.youtube.com/embed/4lTbWQ8zD3w",
              "https://www.youtube.com/embed/CHm2gTkNQxc"
            ],
            journals: res.data.journals,
            moods: res.data.moods
          });
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
  };

  handleSubmit = event => {
    // event.preventDefault();
    const { journals } = this.state;
    const self = this;
    const journalEntry = {};
    for (let key in this.state) {
      if (
        key === "one" ||
        key === "two" ||
        key === "three" ||
        key === "four" ||
        key === "five" ||
        key === "six" ||
        key === "seven" ||
        key === "eight"
      ) {
        journalEntry[key] = this.state[key];
      }
    }
    debugger;
    console.log("JOURNAL ENTRY********", journalEntry);
    const { id } = JSON.parse(localStorage.getItem("user"));
    console.log("LocalStorage results: ", id);
    API.saveJournal({ id, journalEntry })
      .then(response => {
        console.log("resonse", response);
      })
      .catch(error => {
        if (error) {
          console.log(error);
          this.setState({ error });
        }
      });
  };

  render() {
    const { journals, json, name, videos, moods } = this.state;
    // console.log("array of journals", journals);

    var model = new Survey.Model(json);
    return (
      // <div>
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
              <iframe
                className="embed-responsive-item"
                width="560"
                height="315"
                src={videos[Math.floor(Math.random() * videos.length)]}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Jumbotron>
          </Col>

          <Col size="md-6 sm-12">
            {!moods.length ? (
              <p>Fill out survey to get score</p>
            ) : (
              <Graph moods={moods} />
            )}
          </Col>
        </Row>
        {/* <Row> */}
        <Container>
          <Card className="kevin">
            <Card.Header as="h5">Journal</Card.Header>
            <Card.Body>
              <Card.Title>
                {this.state.user.name}'s Daily Journal Entry
              </Card.Title>
              {/* <Card.Text> */}
              <form
                className="journalForm"
                action=""
                onSubmit={this.handleSubmit}
              >
                <label>I am grateful for...</label>
                <Input
                  id="one"
                  name="q1"
                  placeholder="1."
                  onChange={this.handleOnChange.bind(this)}
                />
                <Input
                  id="two"
                  name="q2"
                  placeholder="2."
                  onChange={this.handleOnChange.bind(this)}
                />
                <Input
                  id="three"
                  name="q3"
                  placeholder="3."
                  onChange={this.handleOnChange.bind(this)}
                />
                <label>What would make today great?</label>
                <Input
                  id="four"
                  name="q4"
                  placeholder="1."
                  onChange={this.handleOnChange.bind(this)}
                />
                <Input
                  id="five"
                  name="q5"
                  placeholder="2."
                  onChange={this.handleOnChange.bind(this)}
                />
                <Input
                  id="six"
                  name="q6"
                  placeholder="3."
                  onChange={this.handleOnChange.bind(this)}
                />
                <label>Daily affirmations:</label>
                <Input
                  id="seven"
                  name="q7"
                  placeholder="I am.."
                  onChange={this.handleOnChange.bind(this)}
                />
                <label>Brain Dump</label>
                <TextArea
                  id="eight"
                  name="q8"
                  placeholder="Other notes, ramblings you need to release (Optional)"
                  onChange={this.handleOnChange.bind(this)}
                />
                <FormBtn variant="primary">Submit Journal</FormBtn>
              </form>
              {/* </Card.Text> */}
            </Card.Body>
          </Card>
        </Container>
        <Accordion>
          {journals.reverse().map(entry => (
            <Entry
              key={entry.id}
              id={entry.id}
              one={entry.one}
              two={entry.two}
              three={entry.three}
              four={entry.four}
              five={entry.five}
              six={entry.six}
              seven={entry.seven}
              eight={entry.eight}
              date={entry.date}
            />
          ))}
        </Accordion>

        {/* </Row> */}
      </Container>
      // </div>
    );
  }
}

export default Profile;
