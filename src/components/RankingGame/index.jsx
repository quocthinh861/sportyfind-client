import React, { useState } from "react";
import styled, { css } from "styled-components";
import teamLogo from "../../assets/images/barrier.png";
import speaker from "../../assets/images/icons/speaker.png";
import footballPlayer from "../../assets/images/football-player.png";
import team2 from "../../assets/images/icons/team-2.png";
import vsicon from "../../assets/images/icons/versus.png";
import starIcon from "../../assets/images/icons/star.png";
import groupIcon from "../../assets/images/icons/group.png";
import flashIcon from "../../assets/images/icons/flash.png";
import calendar from "../../assets/images/icons/calendar.png";
import placeHolder from "../../assets/images/icons/placeholder.png";
import questionMark from "../../assets/images/icons/question-mark.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";

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

const InfoWrapper = styled.p``;

const TabWrapper = styled.div`
  background-color: rgb(183 183 183 / 58%);
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 65%;
  margin: 0 auto;
  padding: 0.2rem;
  border-radius: 0.8rem;
  margin-bottom: 1rem;
`;

const Tab = styled.div`
  text-align: center;
  border-radius: 0.8rem;
  color: gray;

  ${({ active }) =>
    active &&
    css`
      color: white;
      background: linear-gradient(
        90deg,
        rgba(36, 20, 0, 1) 0%,
        rgba(255, 98, 0, 0.7792366946778712) 0%,
        rgba(238, 147, 24, 0.9641106442577031) 63%
      );
    `};
`;

const TeamWrapper = styled.div`
  span {
    font-size: 12px;
  }

   .team-name {
    font-size: 14px;
    margin-bottom: -10px;
   }
`;

function RankingGame() {
  return (
    <div className="px-4">
      <TabWrapper>
        <Tab active={true}>Thông tin</Tab>
        <Tab>Bình luận</Tab>
      </TabWrapper>
      <div>
        <div className="relative my-5">
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
            <img
              src={vsicon}
              alt="avatar"
              width={50}
              height={50}
              style={{ position: "absolute" }}
            />
            <TeamLogo>
              <img src={questionMark} alt="avatar" />
              <div>
                <span>Đang tìm đối thủ</span>
              </div>
            </TeamLogo>
          </div>
        </div>
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
        <div className="d-flex align-item-center">
          <div className="d-inline mr-2">
            <img src={speaker} className="w-5 h-5" />
          </div>
          <div className="">Giao lưu vui vẻ with love !!!</div>
        </div>
      </InfoWrapper>
      <TeamWrapper>
        <b className="font-xl">Cáp đối</b>
        <div className="mb-3">
          <div className="flex justify-between items-center">
            <div className="mt-1 flex items-center">
              <div>
                <img
                  id="avatar"
                  style={{
                    width: "35px",
                    objectFit: "cover",
                    borderRadius: "50%",
                    textAlign: "center",
                  }}
                  src={team2}
                />
              </div>
              <div>
                <b className="ml-2 team-name">Hà Nội FC</b>
                <div style={{marginTop: '-5px'}}>
                  {" "}
                  <span>
                    <img src={flashIcon} className="w-3 h-3" />
                    369
                  </span>
                  <span className="ml-1">
                    <img src={groupIcon} className="w-3 h-3" />
                    10
                  </span>
                  <span className="ml-1">
                    <img src={starIcon} className="w-3 h-3" />
                    100
                  </span>
                </div>
              </div>
            </div>
            <div>
              <AcceptButton>
                <FontAwesomeIcon icon={faCheck} />
              </AcceptButton>
              <DenyButton>
                <FontAwesomeIcon icon={faX} />
              </DenyButton>
            </div>
          </div>
        </div>
      </TeamWrapper>
      <div>
        <b className="font-xl">Liên hệ</b>
        <div className="flex items-center">
          <img
            id="avatar"
            style={{
              width: "35px",
              borderRadius: "50%",
              textAlign: "center",
            }}
            src={footballPlayer}
          />
          <span className="ml-2">
            Thịnh Lang
            <p>0909483537</p>
          </span>
        </div>
        <button name="button" class="btn btn-orange d-block ml-auto mr-4">
          Cáp kèo
        </button>
      </div>
    </div>
  );
}

export default RankingGame;
