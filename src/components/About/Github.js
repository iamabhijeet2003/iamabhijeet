import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
     
     <GitHubCalendar username="iamabhijeet2003" />
    </Row>
  );
}

export default Github;