import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import footballPlayer from "../../assets/images/football-player.png";
import styled from "styled-components";
import "./style.css";

const Button = styled.button`
  color: #fff;
  padding: 2px 8px;
  border-radius: 50%;
`;

const AcceptButton = styled(Button)`
  background: #44cc44;

  &:hover {
    background: #6fe76f;
  }
`;

const DenyButton = styled(Button)`
  background: tomato;
  margin-left: 5px;

  &:hover {
    background: rgb(255, 147, 128);
  }
`;

function TeamRequest(props) {
  const { teamRequest } = props;
  const [isAnimating, setIsAnimating] = useState(false);
  const handleAnimate = (action) => {
    props.handleTeamRequest(action, teamRequest);
    setIsAnimating(true);
  };

  return (
    <>
      <div className={`${isAnimating ? "slide-right" : ""} my-2`}>
        <div className={`w-100 flex justify-between items-center`}>
          <div>
            <img
              id="avatar"
              style={{
                width: "35px",
                borderRadius: "50%",
                textAlign: "center",
              }}
              src={footballPlayer}
              alt="Football Player"
            />
            <span className="ml-2">{teamRequest && teamRequest.userName}</span>
          </div>
          <div>
            <AcceptButton onClick={() => handleAnimate("ACCEPT")}>
              <FontAwesomeIcon icon={faCheck} />
            </AcceptButton>
            <DenyButton onClick={() => handleAnimate("CANCLE")}>
              <FontAwesomeIcon icon={faTimes} />
            </DenyButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamRequest;
