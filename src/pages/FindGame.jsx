import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faPaypal,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAddressCard,
  faArrowRight,
  faCartPlus,
  faCheck,
  faHeartCirclePlus,
  faMagic,
  faMagnifyingGlass,
  faMedal,
  faPeopleGroup,
  faPlusSquare,
  faSpinner,
  faUserPlus,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import bg from "../assets/images/bg.jpg";
import styled, { css } from "styled-components";
import teamLogo from "../assets/images/barrier.png";
import starIcon from "../assets/images/icons/star.png";
import groupIcon from "../assets/images/icons/group.png";
import flashIcon from "../assets/images/icons/flash.png";
import crownIcon from "../assets/images/icons/crown.png";
import rankIcon from "../assets/images/icons/ranking.png";
import pitchIcon from "../assets/images/icons/pitch.png";
import memberIcon from "../assets/images/icons/member.png";
import editIcon from "../assets/images/icons/edit-info.png";
import footballPlayer from "../assets/images/football-player.png";
import GameMatch from "../components/GameMatch";
import CustomGame from "../components/CustomGame";
import RankingGame from "../components/RankingGame";
import Comment from "../components/Comment";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const Wrapper = styled.div`
  background-color: #fff;
  width: 95%;
  min-height: 75vh;
  border-radius: 10px;
`;

const SearchBar = styled.input`
  width: 200px;
  background-color: #f5f5f5;
  border-radius: 10px;
  margin-right: 10px;
  padding-left: 35px;
`;

const SeachIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 5fr;
`;

const LeftSide = styled.div`
  overflow: auto;
  height: 100%;
  height: 70vh;
  padding: 0 2rem;

  > div {
    margin-bottom: 2rem;
  }
`;

const RightSide = styled.div`
  overflow: auto;
  height: 100%;
  height: 70vh;
  position: relative;
`;

const TeamItem = styled.div`
  padding: 20px 0;
  padding=left: 0;
  font-size: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TeamLogo = styled.div`
  width: 70px;
`;

const TeamInfo = styled.div`
  margin-left: 10px;
  width: 100%;
  position: relative;
`;

const TeamName = styled.div`
  font-weight: 600;
  margin-bottom: 0.2em;
`;

const TeamDescription = styled.div`
  span {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    margin-right: 5px;
    position: relative;
    cursor: pointer;
  }
`;

const TeamDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TeamImage = styled.img`
  width: 300px;
  height: 200px;
  margin-top: 2rem;
  background-color: red;
  object-fit: cover;
  margin: auto;
  background: #fff;
  border-style: solid;
  border-width: 2px;
  border-top-color: lighten(#000, 20%);
  border-right-color: lighten(#000, 0%);
  border-bottom-color: lighten(#000, 20%);
  border-left-color: lighten(#000, 0%);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
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
  cursor: pointer;

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

function FindGame() {
  const axiosPrivate = useAxiosPrivate();
  const [showTeam, setShowTeam] = useState(false);
  const [gameType, setGameType] = useState(0);
  const [showComment, setShowComment] = useState(false);
  const [gameMatchList, setGameMatchList] = useState([]);
  const [selectedGameMatch, setSelectedGameMatch] = useState(null);
  const [content, setContent] = useState(null);

  useEffect(() => {
    setShowComment(false);
    try {
      axiosPrivate
        .get(`/game/getListGameMatch?gameType=${gameType}`)
        .then((res) => {
          if (res.status == 200) {
            if (res.data.result.length == 0) {
              setGameMatchList([]);
              setSelectedGameMatch(null);
              return;
            }
            setGameMatchList(res.data.result);
            setSelectedGameMatch(res.data.result[0]);
            const content =
              gameType == 1 ? (
                <CustomGame gameMatch={res.data.result[0]} />
              ) : (
                <RankingGame gameMatch={res.data.result[0]} />
              );
            setContent(content);
          }
        });
    } catch (error) {
      console.log(error);
    }
  }, [gameType]);

  useEffect(() => {
    if(selectedGameMatch == null) return;
    const content =
      gameType == 1 ? (
        <CustomGame gameMatch={selectedGameMatch} />
      ) : (
        <RankingGame gameMatch={selectedGameMatch} />
      );
    setContent(content);
  }, [selectedGameMatch]);

  let innerContent = null;
  if (showComment) {
    innerContent = <Comment />;
  } else {
    innerContent = content;
  }

  useEffect(() => {});

  const handleTeamClick = () => {
    setShowTeam(!showTeam);
  };

  const handleGameType = (type) => {
    setGameType(type);
  };

  const handleGamePick = async (gameId, index) => {
    console.log(gameId, index);
    setSelectedGameMatch(gameMatchList[index]);
  };

  return (
    <div className="container-fluid px-3 login findteam">
      <div className="row min-vh-100">
        <div className="col-md-8 col-lg-6 col-xl-4 d-flex align-items-center">
          <div className="w-100 py-5 px-md-5 px-xl-6 position-relative">
            <div className="mb-4">
              <h3 className="">Gia nhập đội nhóm để chơi</h3>
            </div>
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-2">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <FontAwesomeIcon
                      className="fa-2x btn-social-icon"
                      icon={faLocationArrow}
                      style={{
                        padding: "5px",
                        borderRadius: "12px",
                        backgroundColor: "#f5f5f5",
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="card-body">
                    <h5 className="card-title mb-0">Ví trí</h5>
                    <p className="card-text text-muted">Phạm vi 5km gần bạn</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-2">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <FontAwesomeIcon
                      className="fa-2x btn-social-icon"
                      icon={faPeopleGroup}
                      style={{
                        padding: "5px",
                        borderRadius: "12px",
                        backgroundColor: "#f5f5f5",
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="card-body">
                    <h5 className="card-title mb-0">Ngày và giò</h5>
                    <p className="card-text text-muted">May 7, 2023 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-2">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <FontAwesomeIcon
                      className="fa-2x btn-social-icon"
                      icon={faMedal}
                    />
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="card-body">
                    <h5 className="card-title mb-0">Môn</h5>
                    <p className="card-text text-muted">Bóng đá</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3" onClick={handleTeamClick}>
              <div className="row g-0">
                <div className="col-md-2">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <FontAwesomeIcon
                      className="fa-2x btn-social-icon"
                      icon={faMagic}
                      style={{
                        padding: "5px",
                        borderRadius: "12px",
                        backgroundColor: "#f5f5f5",
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="card-body">
                    <h5 className="card-title mb-0">Đội của tôi</h5>
                    <p className="card-text text-muted">Thành viên </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-6 col-xl-8 d-none d-md-block">
          {/* Image */}
          <div className="pt-5 mt-4 pb-5">
            <img className="bg-image" src={bg} />
            <div className="d-flex justify-content-center">
              <Wrapper>
                <div className="d-flex justify-content-center my-4">
                  <div>
                    <span className="relative">
                      <SeachIcon icon={faMagnifyingGlass} />
                      <SearchBar placeholder="Tìm kiếm câu lạc bộ"></SearchBar>
                    </span>
                    <span>Hủy</span>
                  </div>
                </div>
                <div className="my-4">
                  <Container>
                    <LeftSide>
                      <div className="d-flex justify-content-center">
                        <div className="mb-2">
                          <button
                            className="btn btn-orange px-4 text-small"
                            style={{ borderRadius: "30px", fontSize: "14px" }}
                            onClick={(e) => handleGameType(0)}
                          >
                            Đá kèo
                          </button>
                          <button
                            className="btn btn-orange px-4"
                            style={{
                              borderRadius: "30px",
                              fontSize: "14px",
                              marginLeft: "5px",
                            }}
                            onClick={(e) => handleGameType(1)}
                          >
                            Đá nội bộ
                          </button>
                        </div>
                      </div>
                      {gameMatchList.map((gameMatch, index) => {
                        return (
                          <GameMatch
                            onClick={(e) => handleGamePick(gameMatch.id, index)}
                            id={index}
                            type={gameType}
                            gameMatch={gameMatch}
                          ></GameMatch>
                        );
                      })}
                    </LeftSide>
                    <RightSide>
                      <TabWrapper>
                        <Tab
                          active={!showComment}
                          onClick={() => setShowComment(false)}
                        >
                          Thông tin
                        </Tab>
                        <Tab
                          active={showComment}
                          onClick={() => setShowComment(true)}
                        >
                          Bình luận
                        </Tab>
                      </TabWrapper>
                      <div>
                        {innerContent}
                        {/* <Comment /> */}
                      </div>
                    </RightSide>
                  </Container>
                </div>
              </Wrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindGame;
