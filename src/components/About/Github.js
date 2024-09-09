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
      <div className="purple my-3">
        <a href="https://git.io/streak-stats">
          <img src="https://github-readme-streak-stats.herokuapp.com?user=iamabhijeet2003&theme=cobalt&border_radius=6.1&border=C770F0&card_width=501&stroke=C770F0" className="img-fluid" alt="GitHub Streak" />
        </a> 
      </div>
       
    </Row>
  );
}

export default Github;