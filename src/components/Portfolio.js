import React, { useState, render } from "react";
import { Carousel } from "react-bootstrap"
import teamAPI from "../images/teamAPI.jpg"
import scheduler from "../images/scheduler.JPG"
import weather from "../images/weatherAPI.JPG"
import "./Portfolio.css"


const Portfolio = () => {
            const [index, setIndex] = useState(0);
          
            const handleSelect = (selectedIndex, e) => {
              setIndex(selectedIndex);
            };
          
            return (
                
              <Carousel style={{width: "80vw", margin: "10% auto"}} activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                <a href="https://party-of-five.github.io/gitDrunk/" target="blank">
                  <img
                    className="d-block w-100"
                    src={teamAPI}
                    alt="alcohol API"
                  />
                  </a>
                  <Carousel.Caption>
                    <div className="carouselText">
                    <h3>Mixology</h3>
                    <p>Setup webpages that parse API data.</p>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <a href="https://cranekick50.github.io/Scheduler/" target="blank">
                  <img
                    className="d-block w-100"
                    src={scheduler}
                    alt="scheduler"
                  />
                  </a>
          
                  <Carousel.Caption>
                  <div className="carouselText">
                    <h3>Schedulers</h3>
                    <p>Create applications that schedule your appointments with notifications.</p>
                  </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <a href="https://cranekick50.github.io/WeatherAPI/" target="blank">
                  <img
                    className="d-block w-100"
                    src={weather}
                    alt="weather api"
                  />
                </a>
          
                  <Carousel.Caption>
                  <div className="carouselText">
                    <h3>Weather Dashboard</h3>
                    <p>
                      Create applications that respond to API data.
                    </p>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            );
          } 
    









export default Portfolio;