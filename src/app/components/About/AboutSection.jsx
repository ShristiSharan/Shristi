"use client"
import { Container, Row, Col } from "react-bootstrap"
import Particle from "../Particle"
import Techstack from "./Techstack"
import Aboutcard from "./AboutCard"
import Toolstack from "./Toolstack"

function AboutSection() {
  return (
    <section id="about" className="w-full">
      <div className="about-section backdrop-blur-sm w-full">
        <Container fluid className="text-center w-full">
          <Particle />
          <Container className="d-flex justify-content-center px-2 sm:px-4">
            <Row style={{ padding: "10px" }}>
              <Col md={7} style={{ gap: "10px" }}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 sm:mb-4">
                  Know Who <strong className="green">I&rsquo;M</strong>
                </h1>
                <Aboutcard />
              </Col>
            </Row>
            <h1 className="project-heading text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6">
              Professional <strong className="green">Skillset </strong>
            </h1>

            <Techstack />

            <h1 className="project-heading text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6">
              <strong className="green">Tools</strong> I use
            </h1>
            <Toolstack />
          </Container>
        </Container>
      </div>
    </section>
  )
}

export default AboutSection
