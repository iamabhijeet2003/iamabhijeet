import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub,
    AiOutlineTwitter,
  } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


function Footer(){
    let date = new Date();
    let year = date.getFullYear();
    return(
        <Container fluid className="footer" >
            <Row>
                <Col md="4" className="footer-copywright">
                    Designed and Developed by Abhijeet Singh
                </Col>

                <Col md="4" className="footer-copywright">
                Copyright © {year} AS
                </Col>

                <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/iamabhijeet2003"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/iamabhijeet2003"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/iamabhijeet2003/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
            </Row>
        </Container>
    )
}

export default Footer;
