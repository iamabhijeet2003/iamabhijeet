import React, {useState} from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import {
    AiFillStar,
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
  } from "react-icons/ai";
import logo from "../Assets/logo.png";
import { CgFileDocument } from "react-icons/cg";

function NavBar(){

    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    function scrollHandler(){
        if(window.scrollY >= 20){
            updateNavbar(true);
        }else{
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);


    return (
        <Navbar
            expanded={expand}
            fixed="top"
            expand="md"
            className={navColour ? "sticky" : "navbar"}
        >
            <Container>
                <Navbar.Brand href="/" className="d-flex">
                    <img src={logo} className="img-fluid logo" alt="brand"/>
                </Navbar.Brand>
                
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        updateExpanded(expand ? false : "expanded");
                    }}
                    >
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" defaultActiveKey="#home">
                        {/* Home */}
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                            <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                            </Nav.Link>
                        </Nav.Item>
                        {/* Home */}

                        {/* About */}
                        <Nav.Item>
                            <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                            <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                            </Nav.Link>
                        </Nav.Item>
                        {/* About */}

                        {/* Projects */}
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/project"
                                onClick={() => updateExpanded(false)}
                            >
                                <AiOutlineFundProjectionScreen
                                style={{ marginBottom: "2px" }}
                                />{" "}
                                Projects
                            </Nav.Link>
                        </Nav.Item>
                        {/* Projects */}


                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/resume"
                                onClick={() => updateExpanded(false)}
                            >
                                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                            </Nav.Link>
                        </Nav.Item>

                       {/* Github Repository */}
                       <Nav.Item className="fork-btn">
                        <Button
                            href="https://github.com/iamabhijeet2003/iamabhijeet"
                            target="_blank"
                            className="fork-btn-inner"
                        >
                            <CgGitFork style={{ fontSize: "1.2em"}} />
                            {" "}
                            <AiFillStar style={{ fontSize: "1.2em"}} />
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