import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./TechStack";
import Toolstack from "./ToolStack";
import Github from "./Github";
function About(){
    return(
        <Container fluid className="about-section">
            <Particle />
            <Row style={{ justifyContent: "center", padding: "10px" }}>
                <Col
                    md={7}
                    style={{
                      justifyContent: "center",
                      paddingTop: "30px",
                      paddingBottom: "50px",
                    }}
                >
                    
                </Col>
            </Row>

            <h1 className="project-heading">
                Professional <strong className="purple">Skillset </strong>
                </h1>

            <Techstack />

            <h1 className="project-heading">
                <strong className="purple">Tools</strong> I use
            </h1>
            <Toolstack />

            
        </Container>
    )
}

export default About;