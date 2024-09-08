import React from 'react';
import { Col, Row} from 'react-bootstrap';
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
    DiJava,
    DiMysql 
} from "react-icons/di";
import { 
    FaDocker, 
    FaPhp ,
    FaSass ,
    FaSymfony ,
    FaVuejs ,
    FaBootstrap 
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiGnubash } from "react-icons/si";
function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons" title='JavaScript'>
                <DiJavascript1 />
            </Col >
            <Col xs={4} md={2} className="tech-icons" title="Node.js">
                <DiNodejs />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="React">
                <DiReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="MongoDB">
                <DiMongodb  />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="Git">
                <DiGit  />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="Python">
                <DiPython />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="Java">
                <DiJava  />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="Docker">
                <FaDocker  />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="MySQL">
                <DiMysql  />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="PHP">
                <FaPhp  />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="SaSS">
                <FaSass  />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="Symfony">
                <FaSymfony  />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="VueJs">
                <FaVuejs  />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="TailwindCss">
                <RiTailwindCssFill  />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="Shell Scripting">
                <SiGnubash  />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="Bootstrap">
                <FaBootstrap  />
            </Col>
        </Row>
    )
}

export default Techstack;