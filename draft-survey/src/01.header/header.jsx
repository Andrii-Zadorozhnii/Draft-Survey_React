import React from "react";
import Input from "../components/Input";
import "./header.css";

function Header() {
  return (
    <>
      <header>
        <h1 className="headerTitle"> Draft survey form</h1>
        <div className="headerVesselInformation">
          <div className="headerContentBox">
            <p>Vessel Name:</p>
            <Input className="vesselName" />
          </div>
          <div className="headerContentBox">
            <p>Gargo:</p>
            <Input className="vesselName" />
          </div>
          <div className="headerContentBox">
            <p>Port:</p>
            <Input className="vesselName" />
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
