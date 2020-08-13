import React from "react";
import "./About.css"
import profile from "../images/profile.jpg"
import { Col, Row, Container, Image } from "react-bootstrap"


const About = () => {
    return (
        <Container>
      <Image src={profile} style={{width: "200px", marginTop: "5%",}} roundedCircle />
        <hr />
        <div className="containers">
            <h1 className="name">Michael Srithapin</h1>
            <div className="contactInfo">800 Clearwell St. · Cedar Park, TX 78613 · (626) 278-4144 ·
          <a href="mailto:michael.srithapin@gmail.com">michael.srithapin@gmail.com</a>
        </div>
        <p className="aboutText">New developer with full stack training.  Studies include HTML, CSS, Javascript, JQuery, NodeJS, API, React, SQL, and MongoDB.</p>
        </div>
        </Container>
    )
}








export default About;