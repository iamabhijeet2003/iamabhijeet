import React from "react";
import { Container, Row, Col} from "react-bootstrap";

function Home(){
    return(
        <section>
            <Container>
                <Container>
                    <Row>
                        <Col>
                            <h1>
                               Hi There 
                            </h1>

                            <h1>
                                I'am
                                <strong> Abhijeet Singh</strong>
                            </h1>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    )
}

export default Home;