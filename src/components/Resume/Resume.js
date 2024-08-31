import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
function Resume(){
    return(
        <Container>
            <Particle />
            <Row>
                <Col>
                    <h1 style={{margin:"300px", color:"white"}}>This page is currently under construction.</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default Resume;