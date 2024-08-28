import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2(){
    return(
        <Container>
            <Container>
                <Row>
                    <Col>
                        <h1>
                            LET ME <span> INTRODUCE </span> MYSELF
                        </h1>

                        <p>
                            I fell in  love with programming and I have at least learnt
                            something, I think… 🤷‍♂️
                            <br />
                            <br />
                            I am fluent in classics like
                            <i>
                                <b> PHP and Javascript. </b>
                            </i>
                            <br />
                            <br />
                            My Field of Interest's are building new &nbsp;
                            <i>
                                <b>
                                    Web Technologies and Products
                                </b>
                                and also in areas related to {" "}
                                <b>
                                    Cybersecurity
                                </b>
                            </i>
                            <br />
                            <br />
                            Whenever possible, I also apply my passion for developing products
                            with <b className="purple">Node.js</b> and
                            <i>
                                <b className="purple">
                                {" "}
                                Modern Javascript Library and Frameworks
                                </b>
                            </i>
                            &nbsp; like
                            <i>
                                <b className="purple"> React.js and Vuejs</b>
                            </i>
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to <span className="purple">connect </span>with me
                        </p>
                        <ul>
                            <li>
                                <a 
                                    href="https://github.com/iamabhijeet2003"
                                    target="_blank"
                                    rel="noreferrer"    

                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com/iamabhijeet2003"
                                    target="_blank"
                                    rel="noreferrer" 
                                >
                                    <AiOutlineTwitter />
                                </a>
                            </li>
                            <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/iamabhijeet2003/"
                                target="_blank"
                                rel="noreferrer"
                                
                            >
                            <FaLinkedinIn />
                            </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Home2;