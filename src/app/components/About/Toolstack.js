import { SiFlask, SiDocker, SiLinux, SiOpencv, SiPytorch } from "react-icons/si"; 
import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
} from "react-icons/si";
import { FaFigma, FaLinux, FaAws } from "react-icons/fa";  // Using FaAws for AWS icon
import { VscAzure } from "react-icons/vsc";  // For Azure icon from Vsc category
import { AiOutlineAppstoreAdd } from "react-icons/ai"; // Example, make sure to use correct icons

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws /> {/* Using FaAws for AWS */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <VscAzure /> {/* Using VscAzure for Azure */}
      </Col>
    </Row>
  );
}

export default Toolstack;
