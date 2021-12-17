import React from "react";
import Login from "../Login/Login";
import RightSide from "../RightSide/RightSide";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header1">
      <div className="container">
        <div className="row pt-4">
          <div className="col-lg-4">
            <Login></Login>
          </div>
          <div className="col-lg-8">
            <RightSide></RightSide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
