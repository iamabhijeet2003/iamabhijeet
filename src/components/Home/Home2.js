import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter, AiOutlineMail  } from "react-icons/ai";
import { FaLinkedinIn, FaReact, FaVuejs, FaNode, FaPhp     } from "react-icons/fa";
import { IoLogoJavascript  } from "react-icons/io5";
function Home2(){
    return(
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6rem"}}>
                            LET ME <span className="purple"> INTRODUCE </span> MYSELF
                        </h1>

                        <p className="home-about-body">
                            I fell in  love with programming and I have at least learnt
                            something, I think… 🤷‍♂️
                            <br />
                            <br />
                            I am fluent in classics like
                            <i>
                                <b className="purple"> PHP <FaPhp /> and Javascript <IoLogoJavascript />. </b>
                            </i>
                            <br />
                            <br />
                            My Field of Interest's are building & learning new &nbsp;
                            <i>
                                <b className="purple">
                                    Web Technologies and Products  {" "}
                                </b>
                                and also in areas related to {" "}
                                <b className="purple">
                                    Cybersecurity
                                </b>
                            </i>
                            <br />
                            <br />
                            Whenever possible, I also apply my passion for developing products
                            with <b className="purple">Node.js <FaNode  /></b> and
                            <i>
                                <b className="purple">
                                {" "}
                                Modern Javascript Library and Frameworks
                                </b>
                            </i>
                            &nbsp; like
                            <i>
                                <b className="purple"> React.js <FaReact /> and Vuejs <FaVuejs /></b>
                            </i>
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to <span className="purple">connect </span>with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a 
                                    href="https://github.com/iamabhijeet2003"
                                    target="_blank"
                                    rel="noreferrer"    
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://twitter.com/iamabhijeet2003"
                                    target="_blank"
                                    rel="noreferrer" 
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiOutlineTwitter />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/iamabhijeet2003/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                <FaLinkedinIn />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="mailto:abhijeet3016@gmail.com"
                                    className="icon-colour  home-social-icons"
                                >
                                <AiOutlineMail  />
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