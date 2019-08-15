import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
require("dotenv").config();
//access by process.env.API_key

class Profile extends Component {
    state = {
      books: []
    };
  
    // componentDidMount() {
    //   this.loadBooks();
    // }
  
    // loadBooks = () => {
    //   API.getBooks()
    //     .then(res => this.setState({ books: res.data }))
    //     .catch(err => console.log(err));
    // };
  
    render() {
      return (
        <Container fluid>
          <Row>
            <Col size="md">
              <Jumbotron>
                <h1>Mood Tracker</h1>
              </Jumbotron>
              
            </Col>
            
           <Col size="md-6 sm-12">
              <Jumbotron>
                <h1>Books On My List</h1>
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
                  <TextArea name="synopsis" placeholder="Other notes, ramblings you need to release (Optional)" />
                <FormBtn>Submit Journal</FormBtn>
              </form>
          </Row>
        </Container>
      );
    }
  }
  
  export default Profile;
  