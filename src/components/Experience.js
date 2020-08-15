import React from "react";
import "./Experience.css"
import { Container } from "react-bootstrap";


const Experience = () => {
    return (
      <Container>
        <div>
        <h1 style={{marginTop: "5%"}}>Experience</h1>

        <div className="experience">
          <div>
            <h3>Product Support Supervisor</h3>
            <div>Home Depot</div>
            <p>Managed a team of Product Support Techs.  Ensured that quality of work and Service Level Agreements are met.  Managed over the day to day operations of the Technology Support Center.</p>
          </div>
          <div>
            <span>August 2013 - Present</span>
          </div>
        </div>

        <div className="experience">
          <div>
            <h3>Outsource Coordinator</h3>
            <div>Bioware</div>
            <p>Managed the test cycles performed by the outsource QA team.  Reviewed report quality and ensured that information was up to standards.</p>
          </div>
          <div>
            <span>July 2011 - July 2012</span>
          </div>
        </div>

        <div className="experience">
          <div>
            <h3>Customer Support Supervisor</h3>
            <div>Blizzard Entertainment</div>
            <p>Managed a team of chat support agents.  Reviewed customer service and bug reporting to insure they were up to standard.  Addressed manager escalations and ensured appropriate solutions.</p>
          </div>
          <div>
            <span>September 2007 - July 2011</span>
          </div>
        </div>

        </div>
        </Container>
    )
}








export default Experience;