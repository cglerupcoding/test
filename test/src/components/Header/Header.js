
import React from "react";
import "./style.css";

const Header = props => (
        <div className="titlebox">
          <div className="title">{props.children}</div>
          <div className="scores">
            Score: {props.score} Highscore: {props.highscore}
          </div>
        </div>
      );
      
      export default Header;

