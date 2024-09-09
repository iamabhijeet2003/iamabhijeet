import React from "react";
import { Row } from "react-bootstrap";
import GitHubCalendar from "react-github-calendar";
function Github() {
  const customTheme = {
    dark: ['#cfb7ec', '#9764d4', '#5e2a9e', '#440a8c', '#3b087c'],
  };
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
     <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar 
        username="iamabhijeet2003" 
        blockSize={15}
        blockMargin={5}
        theme={customTheme}
        fontSize={16}
      />
    </Row>
  );
}

export default Github;