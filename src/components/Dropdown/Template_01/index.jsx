import React, { useState } from "react";
import "./style.css";

function Index() {
  const [click, setClick] = useState(false);

  return (
    <div className="dropdown-container">
      <a className="dropdown-btn" onClick={() => setClick(!click)}>Select me</a>
      {click ? (
        <ul className="dropdown-list">
          <li>
            <a className="dropdown-item">
              <img src="https://malaebapp.com/images/flags/BH.svg" width={30} alt=""></img>{" "}
              Bahrain
            </a>
          </li>
          <li>
            <a className="dropdown-item">
              <img src="https://malaebapp.com/images/flags/BH.svg" width={30} alt=""></img>{" "}
              Bahrain
            </a>
          </li>
          <li>
            <a className="dropdown-item">
              <img src="https://malaebapp.com/images/flags/BH.svg" width={30} alt=""></img>{" "}
              Bahrain
            </a>
          </li>
          <li>
            <a className="dropdown-item">
              <img src="https://malaebapp.com/images/flags/BH.svg" width={30} alt=""></img>{" "}
              Bahrain
            </a>
          </li>
        </ul>
      ) : null}
    </div>
  );
}

export default Index;
