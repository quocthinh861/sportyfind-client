import React, { useState } from "react";
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
import styled from "styled-components";
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
  max-height: 70vh;
  padding: 0 2rem;

  > div {
    margin-bottom: 2rem;
  }
`;

const RightSide = styled.div`
  overflow: auto;
  height: 100%;
  max-height: 70vh;
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

function FindGame() {
  const [showTeam, setShowTeam] = useState(false);

  const handleTeamClick = () => {
    setShowTeam(!showTeam);
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
            {/* <div className={`yourteam ${showTeam ? "show" : "hide"}`} >
              <div className="row justify-content-center">
                <div className="col-md-10 new-business-info mt-6">
                  <h3 className="text-white mb-4">Đội của bạn</h3>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div className="card">
                      <div className="card-body">
                        <FontAwesomeIcon
                          className="fa-2x mt-4"
                          color="#ba4ab2"
                          icon={faUserPlus}
                          style={{
                            padding: "5px",
                            borderRadius: "12px",
                            backgroundColor: "#f5f5f5",
                          }}
                        />
                        <div className="py-5">
                          <h5
                            className="card-title mb-2"
                            style={{
                              color: "#ba4ab2",
                              fontWeight: "700",
                              fontSize: "1.5rem",
                            }}
                          >
                            Tham gia
                          </h5>
                          <p className="card-text text-muted">
                            Tham gia ngay <br /> để tận hưởng niềm vui
                          </p>
                        </div>
                      </div>
                      <div className="card-header">
                        <b>36 đội</b> đang đợi
                      </div>
                    </div>
                    <div className={`card team-card`}>
                      <div className="card-body">
                        <FontAwesomeIcon
                          className="fa-2x mt-4"
                          color="#50b444"
                          icon={faHeartCirclePlus}
                          style={{
                            padding: "5px",
                            borderRadius: "12px",
                            backgroundColor: "#f5f5f5",
                          }}
                        />
                        <div className="py-5">
                          <h5
                            className="card-title mb-2"
                            style={{
                              color: "#50b444",
                              fontWeight: "700",
                              fontSize: "1..5rem",
                            }}
                          >
                            Tạo mới
                          </h5>
                          <p className="card-text text-muted">
                            Mời bạn bè hoặc đợi <br /> người chơi khác tham gia
                          </p>
                        </div>
                      </div>
                      <div className="card-header">
                        <b>315 người chơi</b> xung quanh bạn
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
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
                          >
                            Đá nội bộ
                          </button>
                        </div>
                      </div>
                      <GameMatch></GameMatch>
                      <GameMatch></GameMatch>
                      <GameMatch></GameMatch>
                    </LeftSide>
                    <RightSide>
                      {/* <>
                        <TeamDetail>
                          <TeamImage src="https://kiwisport.vn/wp-content/uploads/2019/06/in-ao-bong-da-doi-bong-kiss-english-mau-ao-da-banh-khong-logo-hero.jpg" />
                        </TeamDetail>
                        <button
                          name="button"
                          className="btn btn-orange d-block mx-auto my-4"
                        >
                          Tham gia
                        </button>
                        <div className="px-5">
                          <div>
                            <div className="mb-1 font-bold">Xếp hạng</div>
                            <p className="text-small d-flex ">
                              <img src={rankIcon} className="w-5 h-5 mr-2" />{" "}
                              Hạng 7
                            </p>
                          </div>
                          <div>
                            <div className="mb-1 flex justify-between">
                              <span className="font-bold">Mô tả</span>
                              <small
                                style={{ color: "orange", cursor: "pointer" }}
                              >
                                Chỉnh sửa
                              </small>
                            </div>
                            <p>
                              <div className="d-flex align-item-center">
                                <div className="d-inline mr-2">
                                  <img src={pitchIcon} className="w-5 h-5" />
                                </div>
                                <div className="">Sân bóng đá Hùng Vương</div>
                              </div>
                              <div className="d-flex align-item-center">
                                <div className="d-inline mr-2">
                                  <img src={memberIcon} className="w-5 h-5" />
                                </div>
                                <div className="">10 thành viên</div>
                              </div>
                              <div className="d-flex align-item-center">
                                <div className="d-inline mr-2">
                                  <img src={editIcon} className="w-5 h-5" />
                                </div>
                                <div className="">Không có mô tả</div>
                              </div>
                            </p>
                          </div>
                          <div>
                            <div className="mb-1 font-bold">Nhận xét</div>
                            <p>
                              Chưa có nhận xét nào. Hãy là người đầu tiên nhận
                              xét!
                            </p>
                          </div>
                          <div>
                            <div className="mb-1 font-bold">
                              Lịch sử thi đấu
                            </div>
                            <p>CLB chưa có lịch sử thi đấu nào</p>
                          </div>
                          <div>
                            <div className="mb-1 font-bold">Hình ảnh</div>
                            <p>Chưa có hình ảnh nào</p>
                          </div>
                        </div>
                        <div className="px-5">
                          <div className="mb-3">
                            <div className="mb-1 font-bold">
                              Yêu cầu tham gia (1)
                            </div>
                            <div className="flex justify-between items-center">
                              <div>
                                <img
                                  id="avatar"
                                  style={{
                                    width: "35px",
                                    borderRadius: "50%",
                                    textAlign: "center",
                                  }}
                                  src={footballPlayer}
                                />
                                <span className="ml-2">Thịnh Lang</span>
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
                          <div>
                            <div className="mb-1 font-bold">Thành viên (1)</div>
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
                          </div>
                        </div>
                      </> */}
                      <div className="row"></div>
                      <div>
                        <RankingGame />
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
