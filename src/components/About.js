import React from "react";
import profile from "../images/profile.jpg";
import {
  Col,
  Row,
  Container,
  Image,
  ButtonGroup,
  Button,
} from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <Container>
      <div className="containers">
        <h1 className="name">Michael Srithapin</h1>
        <div className="contactInfo">
          800 Clearwell St. · Cedar Park, TX 78613 · (626) 278-4144
        </div>
        
        <ButtonGroup className="mb-2" style={{marginTop:"1%"}}>
          <Button href="mailto:michael.srithapin@gmail.com" style={{backgroundColor: "#16697a", border: "black"}}>michael.srithapin@gmail.com</Button>
          <Button href="https://www.linkedin.com/in/michael-srithapin" target="_blank" style={{backgroundColor: "#16697a", border: "black"}}>Linkedin</Button>
          <Button href="https://github.com/Cranekick50" target="_blank" style={{backgroundColor: "#16697a", border: "black"}}>GitHub</Button>
        </ButtonGroup>
        <p className="aboutText">
          New developer with full stack training. Studies include HTML, CSS,
          Javascript, JQuery, NodeJS, API, React, SQL, and MongoDB.
        </p>
        <hr />
      </div>
      <Image
        src={profile}
        style={{ width: "200px", marginTop: "5%" }}
        roundedCircle
      />
      <div>
          <h1 style={{fontSize: "60px", marginTop: "5%"}}>
        <i class="devicon-bootstrap-plain-wordmark"/>
        <i class="devicon-css3-plain-wordmark" />
        <i class="devicon-heroku-original-wordmark" />
        <i class="devicon-html5-plain-wordmark" />
        <i class="devicon-javascript-plain" />
        <i class="devicon-react-original-wordmark" />
        <i class="devicon-sequelize-plain" />
        <i class="devicon-jquery-plain-wordmark" />
        <i class="devicon-mongodb-plain-wordmark" />
        <i class="devicon-mysql-plain-wordmark" />
        </h1>
        </div>
      
      
    </Container>
  );
};

export default About;
