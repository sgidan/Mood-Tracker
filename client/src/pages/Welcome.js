import React, { Component } from "react";
import { Container } from "../components/Grid";
// import LoginCard from '../components/LoginCard'
import "../index.css";
//access by process.env.API_key

class Welcome extends Component {
    // componentDidMount() {
    //   this.loadBooks();
    // }
  
    render() {
      return (
        <Container fluid>
           <ul className="slideshow">
          <li />
          <li />
          <li />
          <li />
        </ul>
            
        </Container>
      );
    }
  }
  
  export default Welcome;
  