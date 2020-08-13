import React from "react";
import { Container } from "react-bootstrap"
import "./Education.css"

const Education = () => {
    return (

        <Container>
      <div>
        <h1 style={{marginTop: "5%"}}>Education</h1>

        <div className="school bootcamp">
          <div>
            <h3>University of Texas Coding Bootcamp</h3>
            <div>Full Stack couses.  Includes subjects such as HTML, CSS, Javascript, JQuery, NodeJS, and API.</div>
          </div>
          <div>
            <span>April 2020 - Current</span>
          </div>
        </div>

        <div className="school university">
          <div>
            <h3>California State University Fullerton</h3>
            <div>Bachelor of Science Criminal Justice</div>
            
          </div>
          <div>
            <span>August 1997 - May 2002</span>
          </div>
        </div>

      

      <div className="school community">
          <div>
            <h3>Mt. San Antonio College</h3>
            <div>Associate of Arts Paralegal</div>
            
          </div>
          <div>
            <span>August 2002 - May 2004</span>
          </div>
        </div>
        </div>
    </Container>
    )
}








export default Education;