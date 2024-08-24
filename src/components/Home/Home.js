import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import Particle from "../Particle";

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
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    )
}

export default Home;