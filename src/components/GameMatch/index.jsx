import React from "react";
import teamLogo from "../../assets/images/barrier.png";
import styled from "styled-components";
import vsicon from "../../assets/images/icons/versus.png";
import starIcon from "../../assets/images/icons/star.png";
import groupIcon from "../../assets/images/icons/group.png";
import flashIcon from "../../assets/images/icons/flash.png";
import calendar from "../../assets/images/icons/calendar.png";
import placeHolder from "../../assets/images/icons/placeholder.png";
import questionMark from "../../assets/images/icons/question-mark.png";

const TeamLogo = styled.div`
  width: 150px;
  object-fit: cover;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > img {
    width: 60px;
  }

  span {
    font-size: 12px;
  }
`;

const InfoWrapper = styled.p`
  margin-top: 10px;

  * {
    font-size: 12px;
  }
`;

function index({ type }) {
  return (
    <div className="relative">
      <div className="flex justify-around items-start">
        <TeamLogo>
          <img src={teamLogo} alt="avatar" />
          <span className="font-bold my-1">BKClub</span>
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
        {type == 0 && (
          <>
            <img
              src={vsicon}
              alt="avatar"
              width={30}
              height={30}
              style={{ position: "absolute" }}
            />
            <TeamLogo>
              <img src={questionMark} alt="avatar" />
              <div>
                <span>Đang tìm đối thủ</span>
              </div>
            </TeamLogo>
          </>
        )}
      </div>
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
      </InfoWrapper>
    </div>
  );
}

export default index;
