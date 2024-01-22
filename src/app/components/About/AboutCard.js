import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
    <Card className="quote-card-view text-center">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center" }}>
            Hi There, I am <span className="green">Shristi Sharan </span>
            , third year Undergrad Student.
            <br />
            I am currently diving deep into <span className="green">Software Dvelopment</span> and <span className="green">Deep Learning & Generative AI.</span>
            <br />
            Pursuing Electrical & Computer Science Engineering from IIIT Ahmedabad
            <br />
            My goal is to acquire comprehensive knowledge, hands-on experience.
            <br />
            <br/>
            Apart from coding, I Love! doing :
          </p>
          <ul style={{ textAlign: "center", listStyle: "none", padding: 0 }}>
            <li className="about-activity" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ImPointRight style={{  marginRight: "10px" }}/> Designing
            </li>
            <li className="about-activity" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ImPointRight style={{  marginRight: "10px" }}/> Planning & Managing
            </li>
            <li className="about-activity" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ImPointRight style={{  marginRight: "10px" }}/> Travelling
            </li>
          </ul>
          <br/>

          <p style={{ color: "rgb(155 126 17)" }}>
You can always do more than you know-Never STOP Learning!{" "}
          </p>
          <footer className="blockquote-footer">-Shristi</footer>
        </blockquote>
      </Card.Body>
    </Card>
    </Container>
  );
}

export default AboutCard;