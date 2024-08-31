import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import Particle from "../Particle";
import Terminal from "../../Assets/projects/terminal.png";
import tfg from "../../Assets/projects/tfg.png";
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
                            title={
                                <>
                                <span className="text-decoration-underline">Terminal Portfolio</span>
                                </>
                            }
                            description={
                                <>
                                An interactive terminal portfolio made with 
                                <span className="purple text-decoration-underline">{" "}Vue 3</span>, 
                                <span className="purple text-decoration-underline">{" "}Typescript </span>and 
                                <span className="purple text-decoration-underline">{" "}Tailwind CSS</span>.
                                </>
                            }
                            ghLink="https://github.com/iamabhijeet2003/portfolio"
                            demoLink="https://portfolio-iamabhijeet.vercel.app/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCards
                            imgPath={tfg}
                            isBlog={false}
                            title={
                                <>
                                <span className="text-decoration-underline">Abhi's E-Commerce Store</span>
                                </>
                            }
                            description={
                                <>
                                Bachelor's Degree Final Project (TFG). 
                                Online Store made with {" "} 
                                <span className="purple text-decoration-underline">Vue 3{" "}</span>, 
                                <span className="purple text-decoration-underline">{" "}Javascript{" "} </span> and 
                                <span className="purple text-decoration-underline">{" "}Tailwind CSS</span>.
                                Backend Made with 
                                <span className="purple text-decoration-underline">{" "}Symfony 6</span> and 
                                <span className="purple text-decoration-underline">{" "}PHP 8.2</span>    . 
                                Use of Stripe API, SendGrid API, Unsplash API and Google Maps API for advance features.
                                </> 
                            }
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