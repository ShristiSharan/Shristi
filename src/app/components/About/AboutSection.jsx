"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
// import Image from "next/image";

function AboutSection() {
  return (
    <section id="about">
    <Container fluid className="about-section text-center"> 
    <Particle />
    <Container className="d-flex justify-content-center"> 
      <Row style={{ padding: "10px" }}> 
        <Col md={7} style={{ gap: "10px" }}> 
          <h1 style={{ fontSize: "3.5em", marginBottom: "5px" }}>
            Know Who <strong className="green">I&rsquo;M</strong>
          </h1>
          <Aboutcard />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="green">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="green">Tools</strong> I use
        </h1>
        <Toolstack />

        
      </Container>
    </Container>
    </section>
  );
}

export default AboutSection;
