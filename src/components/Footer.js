import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer(){
    let date = new Date();
    let year = date.getFullYear();
    return(
        <Container>
            <Row>
                <Col>
                    Designed and Developed by Abhijeet Singh
                </Col>

                <Col>
                Copyright © {year} AS
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;
