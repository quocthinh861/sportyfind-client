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
import { formatDateAndTime } from "../../utils/TimeUtil";

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

function index({ type, gameMatch, onClick }) {
  const { teamA, teamB, booking, description } = gameMatch;
  return (
    <div className="relative" onClick={onClick}>
      <div className="flex justify-around items-start">
        <TeamLogo>
          <img src={teamLogo} alt="avatar" />
          <span className="font-bold my-1">{teamA.name}</span>
          <div>
            <span>
              <img src={flashIcon} className="w-5 h-5" />
              {teamA.skilllevel}
            </span>
            <span className="ml-1">
              <img src={groupIcon} className="w-5 h-5" />
              {teamA.size}
            </span>
            <span className="ml-1">
              <img src={starIcon} className="w-5 h-5" />
              {teamA.rankingpoint}
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
            {teamB ? (
              <>
                <TeamLogo>
                  <img src={teamLogo} alt="avatar" />
                  <span className="font-bold my-1">{teamB.name}</span>
                  <div>
                    <span>
                      <img src={flashIcon} className="w-5 h-5" />
                      {teamB.skilllevel}
                    </span>
                    <span className="ml-1">
                      <img src={groupIcon} className="w-5 h-5" />
                      {teamB.size}
                    </span>
                    <span className="ml-1">
                      <img src={starIcon} className="w-5 h-5" />
                      {teamB.rankingpoint}
                    </span>
                  </div>
                </TeamLogo>
              </>
            ) : (
              <TeamLogo>
                <img src={questionMark} alt="avatar" />
                <div>
                  <span>Đang tìm đối thủ</span>
                </div>
              </TeamLogo>
            )}
          </>
        )}
      </div>
      <InfoWrapper>
        <div className="d-flex align-item-center">
          <div className="d-inline mr-2">
            <img src={calendar} className="w-5 h-5" />
          </div>
          <div className="">
            {formatDateAndTime(booking.bookingDate + " " + booking.startTime)}
          </div>
        </div>
        <div className="d-flex align-item-center">
          <div className="d-inline mr-2">
            <img src={placeHolder} className="w-5 h-5" />
          </div>
          <div className="">
            Sân bóng {booking?.field?.fieldName},{" "}
            {booking?.field?.venue.address}
          </div>
        </div>
      </InfoWrapper>
    </div>
  );
}

export default index;
