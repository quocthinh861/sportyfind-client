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
import { useEffect } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { formatDateAndTime } from "../../utils/TimeUtil";
import { useSelector } from "react-redux";
import Popup from "../Popup";
import { toast } from "react-toastify";

const TeamLogo = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > img {
    width: 40%;
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

const TeamWrapper = styled.div`
  span {
    font-size: 12px;
  }

  .team-name {
    font-size: 14px;
    margin-bottom: -10px;
  }
`;

function GameResult({ gameMatch, setTeamAScore, setTeamBScore }) {
  return (
    <>
      <div className="form-group mb-4">
        <label htmlFor="product-description" className="form-label">
          Kết quả đội 1 ({gameMatch.teamA.name})
        </label>
        <input
          type="number"
          className="form-control"
          id="numberInput"
          name="numberInput"
          placeholder="Nhập số điểm"
          onInput={(e) => setTeamAScore(e.target.value)}
        />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="product-description" className="form-label">
          Kết quả đội 2 ({gameMatch.teamB.name})
        </label>
        <input
          type="number"
          className="form-control"
          id="numberInput"
          name="numberInput"
          placeholder="Nhập số điểm"
          onInput={(e) => setTeamBScore(e.target.value)}
        />
      </div>
    </>
  );
}

function RankingGame({ gameMatch }) {
  const axiosPrivate = useAxiosPrivate();
  const { teamA, booking, description, host, id, teamB, status } = gameMatch;
  const user = useSelector((state) => state.user);
  const userId = user.data?.user?.id;
  const [teamHost, setteamHost] = useState(null);
  const [gameRequest, setGameRequest] = useState(null);
  const [gameRequestList, setGameRequestList] = useState([]);
  const checkIsHost = host ? host.id === userId : false;
  const [isAnimating, setIsAnimating] = useState(false);
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);
  const handleAnimate = (action, teamId) => {
    setIsAnimating(true);
    handleGameRequest(action, teamId);
  };

  console.log("gameMatch", gameMatch);

  useEffect(() => {
    // Function to fetch teamHost
    const getteamHost = async () => {
      if (checkIsHost) return null;

      try {
        const res = await axiosPrivate.get(
          `/team/getTeamListByUserId?userId=${userId}`
        );
        return res?.data?.result;
      } catch (error) {
        console.error("Error while getting team B:", error);
        return null;
      }
    };

    // Function to check game request status
    const checkGameRequestStatus = async (teamHostId) => {
      try {
        const res = await axiosPrivate.get(
          `/game/getGameRequestInfo?gameId=${id}&teamId=${teamHostId}`
        );
        setGameRequest(res?.data?.result);
        console.log("game request: ", res?.data?.result);
      } catch (error) {
        console.error("Error while checking game request status:", error);
      }
    };

    // Use a Promise to ensure that getteamHost is completed before calling checkGameRequestStatus
    getteamHost().then((teamList) => {
      if (teamList == null || teamList.length === 0) return;
      setteamHost(teamList[0]);
      checkGameRequestStatus(teamList[0].id);
    });
  }, [userId, id]);

  useEffect(() => {
    // Get game request list
    const getGameRequestList = async () => {
      try {
        const res = await axiosPrivate.get(
          `/game/getGameRequestList?gameId=${id}`
        );
        setGameRequestList(res?.data?.result);
        console.log("game request list: ", res?.data?.result);
      } catch (error) {
        console.error("Error while getting game request list:", error);
      }
    };

    getGameRequestList();
  }, [id]);

  const handleGameRequest = async (action, teamId) => {
    const query = {
      teamId: teamId,
      gameId: id,
      action: action,
    };

    try {
      const res = await axiosPrivate.post("/game/updateGameRequest", query);
      if (res.status !== 200) {
        alert("Cập nhật thất bại");
        return;
      }
      alert("Cập nhật thành công");
      // refresh page
      window.location.reload();
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const handleSubmit = async (action) => {
    // validate only other team captain can submit

    if(checkIsHost && action === "CANCEL") {
      const query = {
        teamId: gameMatch.id,
        gameId: id,
        action: action,
      };
  
      try {
        const res = await axiosPrivate.post("/game/updateGameRequest", query);
        if (res.status !== 200) {
          alert("Cập nhật thất bại");
          return;
        }
        alert("Cập nhật thành công");
        // refresh page
        window.location.reload();
      } catch (error) {
        console.log("error: ", error);
      }
      return;
    }

    if (teamHost === null || teamHost === undefined || teamHost == "") {
      alert("Bạn chưa có đội bóng");
      return;
    }

    const query = {
      teamId: teamHost.id,
      gameId: id,
      action: action,
    };

    try {
      const res = await axiosPrivate.post("/game/updateGameRequest", query);
      if (res.status !== 200) {
        alert("Cập nhật thất bại");
        return;
      }
      alert("Cập nhật thành công");
      // refresh page
      window.location.reload();
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <div className="px-4">
      <div>
        <div className="relative my-5">
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
                  {teamA.legitpoint}
                </span>
              </div>
            </TeamLogo>
            <div style={{ minWidth: "200px" }} className="text-center">
              <img
                src={vsicon}
                alt="avatar"
                width={50}
                height={50}

                // style={{ position: "absolute" }}
              />
              {status == 3 ? (
                <>
                  <div className="mt-2">
                    {gameMatch.teamAScore} : {gameMatch.teamBScore}
                  </div>
                </>
              ) : (
                <div className="mt-2">Đang cập nhật</div>
              )}
              {/* <div className="mt-2">Tỉ số 3-1</div> */}
            </div>
            {teamB != null ? (
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
                      {teamB.legitpoint}
                    </span>
                  </div>
                </TeamLogo>
              </>
            ) : (
              <>
                <TeamLogo>
                  <img src={questionMark} alt="avatar" />
                  <div>
                    <span>Đang tìm đối thủ</span>
                  </div>
                </TeamLogo>
              </>
            )}
          </div>
        </div>
      </div>
      <InfoWrapper>
        <div className="d-flex align-item-center">
          <div className="d-inline mr-2">
            <img src={calendar} className="w-5 h-5" />
          </div>
          <div className="">
            {booking.bookingDate +
              " " +
              booking.startTime +
              " - " +
              booking.endTime}
          </div>
        </div>
        <div className="d-flex align-item-center">
          <div className="d-inline mr-2">
            <img src={placeHolder} className="w-5 h-5" />
          </div>
          <div className="">{booking.fieldName}</div>
        </div>
        <div className="d-flex align-item-center">
          <div className="d-inline mr-2">
            <img src={speaker} className="w-5 h-5" />
          </div>
          <div className="">{description}</div>
        </div>
      </InfoWrapper>
      {checkIsHost && status == 0 && (
        <TeamWrapper>
          <b className="font-xl">Cáp đối</b>
          <div className="mb-3">
            {gameRequestList.map((item, index) => {
              return (
                <div
                  className={`${
                    isAnimating ? "slide-right" : ""
                  } flex justify-between items-center`}
                  id={index}
                >
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
                      <b className="ml-2 team-name">{item.name}</b>
                      <div style={{ marginTop: "-5px" }}>
                        {" "}
                        <span>
                          <img src={flashIcon} className="w-3 h-3" />
                          {item.skilllevel}
                        </span>
                        <span className="ml-1">
                          <img src={groupIcon} className="w-3 h-3" />
                          {item.size}
                        </span>
                        <span className="ml-1">
                          <img src={starIcon} className="w-3 h-3" />
                          {item.legitpoint}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <AcceptButton
                      onClick={() => handleAnimate("ACCEPT", item.id)}
                    >
                      <FontAwesomeIcon icon={faCheck} />
                    </AcceptButton>
                    <DenyButton
                      onClick={() => handleAnimate("REMOVE", item.id)}
                    >
                      <FontAwesomeIcon icon={faX} />
                    </DenyButton>
                  </div>
                </div>
              );
            })}
          </div>
        </TeamWrapper>
      )}
      <div>
        {checkIsHost ?? (
          <>
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
                {host.fullName}
                <p>{host.phoneNumber}</p>
              </span>
            </div>
          </>
        )}
        {checkIsHost &&
          (status == 1 ? (
            <Popup
              buttonText="Cập nhật kết quả"
              title="Cập nhật kết quả"
              disabled={false}
              onConfirm={() => {
                axiosPrivate
                  .post("/game/updateGameResult", {
                    id: id,
                    teamAScore: teamAScore,
                    teamBScore: teamBScore,
                  })
                  .then((res) => {
                    if (res.status === 200) {
                      toast.success("Cập nhật kết quả thành công");
                    }
                  });
              }}
              className="btn btn-orange d-block ml-auto mr-4"
              content={
                <GameResult
                  gameMatch={gameMatch}
                  setTeamAScore={setTeamAScore}
                  setTeamBScore={setTeamBScore}
                />
              }
            />
          ) : (
            status == 0 && <>
                  <button
                    name="button"
                    className="btn btn-danger d-block ml-auto mr-4"
                    onClick={() => handleSubmit("CANCEL")}
                  >
                    Hủy trận
                  </button>
            </>
          ))}
        {!checkIsHost &&
          (status == 0 ? (
            <>
              {gameRequest?.status !== 1 ? (
                <button
                  name="button"
                  className="btn btn-orange d-block ml-auto mr-4"
                  onClick={() => handleSubmit("CREATE")}
                >
                  Cáp kèo
                </button>
              ) : (
                <div className="mt-3">
                  <button
                    name="button"
                    className="btn btn-danger d-block ml-auto mr-4"
                    onClick={() => handleSubmit("REMOVE")}
                  >
                    Hủy cáp
                  </button>
                </div>
              )}
            </>
          ) : (
            <>
              <button
                name="button"
                className="btn btn-secondary disabled d-block ml-auto mr-4"
              >
                Đã cáp
              </button>
            </>
          ))}
      </div>
    </div>
  );
}

export default RankingGame;
