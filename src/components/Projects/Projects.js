import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import Particle from "../Particle";
import Terminal from "../../Assets/projects/terminal.png";
function Projects(){
    return(
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1  className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>

                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </p>

                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCards
                            imgPath={Terminal}
                            isBlog={false}
                            title="Terminal Portfolio"
                            description="An interactive terminal portfolio made with Vue, Typescript and Tailwind CSS."
                            ghLink="https://github.com/iamabhijeet2003/portfolio"
                            demoLink="https://portfolio-iamabhijeet.vercel.app/"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Projects;