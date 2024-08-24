import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function NavBar(){
    return (
        <Navbar>
            <Container>
                <Navbar.Collapse>
                    <Nav>
                       {/* Home */}
                       <Nav.Item as={Link} to="/">
                            Home
                       </Nav.Item>
                       {/* Home */}


                       {/* Github Repository */}
                       <Nav.Item>
                        <Button
                            href="https://github.com/iamabhijeet2003/iamabhijeet"
                            target="_blank"
                        >
                            Star this repo
                        </Button>
                       </Nav.Item> 
                       {/* Github Repository */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;