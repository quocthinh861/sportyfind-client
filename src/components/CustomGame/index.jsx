import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import teamLogo from "../../assets/images/barrier.png";
import starIcon from "../../assets/images/icons/star.png";
import groupIcon from "../../assets/images/icons/group.png";
import flashIcon from "../../assets/images/icons/flash.png";
import calendar from "../../assets/images/icons/calendar.png";
import placeHolder from "../../assets/images/icons/placeholder.png";
import speaker from "../../assets/images/icons/speaker.png";
import Checkbox from "../Checkbox";
import { useSelector } from "react-redux";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { formatDateAndTime } from "../../utils/TimeUtil";

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

function CustomGame({ gameMatch }) {
  const axiosPrivate = useAxiosPrivate();

  const gameMatchId = gameMatch.id;
  const user = useSelector((state) => state.user);
  const userId = user.data?.user?.id;

  const [checkedIndex, setCheckedIndex] = useState(-1);
  const [gameMatchInfo, setGameMatchInfo] = useState({});

  console.log("gameMatch", gameMatch);

  useEffect(() => {
    axiosPrivate
      .get(
        "/game/getCustomGameMatchInfo?userId=" +
          userId +
          "&gameId=" +
          gameMatchId
      )
      .then((res) => {
        if (res.status === 200) {
          setCheckedIndex(res.data.result.status);
          setGameMatchInfo(res.data.result);
          console.log(res.data.result);
        }
      });
  }, [gameMatchId, userId]);

  return (
    <div className="px-6">
      <TeamLogo>
        <img src={teamLogo} alt="avatar" />
        <h2 className="font-bold my-2">{gameMatch.teamA.name}</h2>
        <div>
          <span>
            <img src={flashIcon} className="w-5 h-5" />
            {gameMatch.teamA.skilllevel}
          </span>
          <span className="ml-1">
            <img src={groupIcon} className="w-5 h-5" />
            {gameMatch.teamA.size}
          </span>
          <span className="ml-1">
            <img src={starIcon} className="w-5 h-5" />
            {gameMatch.teamA.legitpoint}
          </span>
        </div>
      </TeamLogo>
      <InfoWrapper>
        <div className="d-flex align-item-center">
          <div className="d-inline mr-2">
            <img src={calendar} className="w-5 h-5" />
          </div>
          <div className="">
            {gameMatch.booking.bookingDate +
              " " +
              gameMatch.booking.startTime +
              " - " +
              gameMatch.booking.endTime}
          </div>
        </div>
        <div className="d-flex align-item-center">
          <div className="d-inline mr-2">
            <img src={placeHolder} className="w-5 h-5" />
          </div>
          <div className="">
            Sân bóng {gameMatch.booking?.field?.fieldName},{" "}
            {gameMatch.booking?.field?.venue.address}
          </div>
        </div>
        <div className="d-flex align-item-center">
          <div className="d-inline mr-2">
            <img src={speaker} className="w-5 h-5" />
          </div>
          <div className="">{gameMatch.description}</div>
        </div>
      </InfoWrapper>
      <div>
        <Checkbox
          userId={userId}
          gameMatchId={gameMatchId}
          checkedIndex={checkedIndex}
          setCheckedIndex={setCheckedIndex}
          gameMatchInfo={gameMatchInfo}
        />
      </div>
    </div>
  );
}

export default CustomGame;
