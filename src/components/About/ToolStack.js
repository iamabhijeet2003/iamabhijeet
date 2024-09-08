import React from "react";
import { Col , Row } from "react-bootstrap";
import {
    SiVisualstudiocode,
    SiPostman,
    SiGithub ,
    SiVercel,
    SiMacos,
    SiKalilinux ,
    SiLinux ,
    SiWindows11 
} from "react-icons/si";

function Toolstack() {
return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Col xs={4} md={2} className="tech-icons" title="macOS">
        <SiMacos />
    </Col>
    <Col xs={4} md={2} className="tech-icons" title="Linux">
        <SiLinux />
    </Col>
    <Col xs={4} md={2} className="tech-icons" title="Windows">
        <SiWindows11 />
    </Col>
    <Col xs={4} md={2} className="tech-icons" title="Kali Linux">
        <SiKalilinux />
    </Col>
    <Col xs={4} md={2} className="tech-icons" title="VSC">
        <SiVisualstudiocode />
    </Col>
    <Col xs={4} md={2} className="tech-icons" title="Postman">
        <SiPostman />
    </Col>
    <Col xs={4} md={2} className="tech-icons" title="Github">
        <SiGithub />
    </Col>
    <Col xs={4} md={2} className="tech-icons" title="Vercel">
        <SiVercel />
    </Col>
    </Row>
);
}

export default Toolstack;