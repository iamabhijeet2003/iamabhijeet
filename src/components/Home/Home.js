import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import Particle from "../Particle";
import Type from "./Type";
import Home2 from "./Home2";
import homeLogo from "../../Assets/home-main.svg"
function Home(){
    return(
        <section>
            <Container fluid className="home-section" id="home">
                <Particle />
                <Container className="home-content">
                    <Row>
                        <Col  md={7} className="home-header">
                            <h1 style={{ paddingBottom: 15 }} className="heading"> 
                               Hi There!{" "}
                               <span className="wave" role="img" aria-labelledby="wave">
                                👋🏻
                               </span>
                            </h1>

                            <h1 className="heading-name">
                                I'am
                                <strong className="main-name"> Abhijeet Singh</strong>
                            </h1>
                            
                            <div style={{ padding: 50, textAlign: "left" }}>
                                <Type />    
                            </div>
                        </Col>

                        <Col>
                            <img 
                                src={homeLogo}
                                alt="programmer on desk"
                                className="img-fluid"
                                style={{maxHeight:"450px"}}
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Home2 />
        </section>
    )
}

export default Home;