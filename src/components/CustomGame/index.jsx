import React, { useState } from "react";
import styled, { css } from "styled-components";
import teamLogo from "../../assets/images/barrier.png";
import starIcon from "../../assets/images/icons/star.png";
import groupIcon from "../../assets/images/icons/group.png";
import flashIcon from "../../assets/images/icons/flash.png";
import calendar from "../../assets/images/icons/calendar.png";
import placeHolder from "../../assets/images/icons/placeholder.png";
import speaker from "../../assets/images/icons/speaker.png";
import Checkbox from "../Checkbox";

const TeamLogo = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > img {
    width: 30%;
  }

  span {
    font-size: 16px;
    margin: 0 7px;
  }
`;

const InfoWrapper = styled.p`
  margin-top: 2rem;
`;


function CustomGame() {
  return (
    <div className="px-6">
      <TeamLogo>
        <img src={teamLogo} alt="avatar" />
        <h2 className="font-bold my-2">BKClub</h2>
        <div>
          <span>
            <img src={flashIcon} className="w-5 h-5" />
            369
          </span>
          <span className="ml-1">
            <img src={groupIcon} className="w-5 h-5" />
            10
          </span>
          <span className="ml-1">
            <img src={starIcon} className="w-5 h-5" />
            100
          </span>
        </div>
      </TeamLogo>
      <InfoWrapper>
        <div className="d-flex align-item-center">
          <div className="d-inline mr-2">
            <img src={calendar} className="w-5 h-5" />
          </div>
          <div className="">Chủ nhật, 07/05 18h30</div>
        </div>
        <div className="d-flex align-item-center">
          <div className="d-inline mr-2">
            <img src={placeHolder} className="w-5 h-5" />
          </div>
          <div className="">Sân bóng đá Bình Minh, Quận Bình Thạnh - 8km</div>
        </div>
        <div className="d-flex align-item-center">
          <div className="d-inline mr-2">
            <img src={speaker} className="w-5 h-5" />
          </div>
          <div className="">Giao lưu vui vẻ with love !!!</div>
        </div>
      </InfoWrapper>
      <div>
        <Checkbox />
      </div>
    </div>
  );
}

export default CustomGame;
