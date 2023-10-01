import React, { useState, useEffect } from "react";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import TeamRequest from "../components/TeamRequest";
import { getImageUrl, uploadImage } from "../utils/FileUtil";
import { set } from "date-fns";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Lightbox, { ImagesListType } from "react-spring-lightbox";
import ImageBox from "../components/ImageBox";

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
  padding: 0 4rem;
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
  cursor: pointer;
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

const TeamDetail = styled.label`
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

function FindTeam() {
  const axiosPrivate = useAxiosPrivate();
  const { id } = useParams();

  const [showTeam, setShowTeam] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [hasJoined, setHasJoined] = useState(false);
  const [teamList, setTeamList] = React.useState([]);
  const [teamInfo, setTeamInfo] = useState(null);
  const [teamRequestList, setTeamRequestList] = useState([]);
  const [teamRequestSize, setTeamRequestSize] = useState(0);
  const [isOpenImageBox, setIsOpenImageBox] = useState(true);
  const user = useSelector((state) => state.user);
  const userId = user.data.user.id;

  useEffect(() => {
    if (teamList.length > 0) {
      try {
        const teamId = id ? id : teamList[0].id;
        axiosPrivate
          .get(`/team/getTeamInformatioById?teamId=${teamId}`)
          .then(async (res) => {
            if (res.status == 200 && res.data.result != null) {
              const path = `/team/${teamId}/avatar`;
              const { data } = await getImageUrl(path);
              const avatarUrl = data === null ? null : data.publicUrl;
              setTeamInfo({ ...res.data.result, avatarUrl });
            }
          });
      } catch (error) {
        console.log(error);
      }
    }
  }, [teamList, id]);

  useEffect(() => {
    if (teamInfo) {
      //Check trạng thái duyệt tham gia
      axiosPrivate
        .get(`/team/getTeamRequestInfo?userId=1&teamId=${teamInfo.id}`)
        .then((res) => {
          if (res.status == 200 && res.data.result != null) {
            if (res.data.result.status == 1) {
              setIsSubmit(true);
            } else if (res.data.result.status == 2) {
              setHasJoined(true);
            }
          }
        });

      axiosPrivate
        .get(`/team/getAllTeamRequestsByTeamId?teamId=${teamInfo.id}`)
        .then((res) => {
          if (res.status == 200) {
            console.log("team", res.data.result);
            setTeamRequestList(res.data.result);
            setTeamRequestSize(res.data.result.length);
          }
        });
    }
  }, [teamInfo]);

  useEffect(() => {
    axiosPrivate.get("/team/getTeamList").then((res) => {
      if (res.status == 200 && res.data.result != null) {
        setTeamList(res.data.result);
      }
    });
  }, []);

  const handleUpdateAvatar = async (file, path = "") => {
    try {
      const thumbnailImageKey = await uploadImage(file, path);
      if (thumbnailImageKey == null) {
        alert("Lỗi upload ảnh, vui lòng thử lại!");
        return;
      } else {
        alert("Cập nhật ảnh đại diện thành công!");
      }
    } catch (error) {
      alert("Lỗi upload ảnh đại diện");
    }
  };

  const handleUploadTeamImages = async (files, path = "") => {
  
  };
  

  const handleTeamPick = async (teamId) => {
    try {
      axiosPrivate
        .get(`/team/getTeamInformatioById?teamId=${teamId}`)
        .then(async (res) => {
          if (res.status == 200 && res.data.result != null) {
            const team = res.data.result;
            const path = `/team/${teamId}/avatar`;
            const { data } = await getImageUrl(path);
            console.log("data", data);
            const avatarUrl = data === null ? null : data.publicUrl;
            setTeamInfo({ ...team, avatarUrl });
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleTeamClick = () => {
    setShowTeam(!showTeam);
  };

  const handleSubmit = (action) => {
    if (action == true) {
      if (window.confirm("Bạn có chắc chắn muốn rời khỏi đội bóng?")) {
        axiosPrivate
          .post("/team/updateTeamRequest", {
            teamId: teamInfo.id,
            userId: userId,
            action: "REMOVE",
          })
          .then((res) => {
            if (res.status === 200 && res.data.result != null) {
              toast.warn("Hủy tham gia thành công");
              setIsSubmit(false);
              setHasJoined(false);
            } else {
              throw new Error("Đã xảy ra lỗi!");
            }
          })
          .catch((error) => {
            toast.error(error.message);
          });
      }
      return;
    }
    axiosPrivate
      .post("/team/updateTeamRequest", {
        teamId: teamInfo.id,
        userId: userId,
        action: "CREATE",
      })
      .then((res) => {
        if (res.status === 200 && res.data.result != null) {
          toast.success("Gửi yêu cầu gia nhập thành công");
          setIsSubmit(true);
        } else {
          throw new Error("Đã xảy ra lỗi!");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleTeamRequest = (action, teamRequest) => {
    axiosPrivate
      .post("/team/updateTeamRequest", {
        teamId: teamInfo.id,
        userId: teamRequest.userId,
        action: action,
      })
      .then((res) => {
        if (res.status === 200 && res.data.result != null) {
          const newTeamRequestList = teamRequestList.filter(
            (team) => team.id !== teamRequest.id
          );
          setTeamRequestSize(newTeamRequestList.length);
        } else {
          throw new Error("Đã xảy ra lỗi!");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleCancle = (e) => {
    e.preventDefault();
    axiosPrivate
      .post("/team/updateTeamRequest", {
        teamId: teamInfo.id,
        userId: userId,
        action: "CANCEL",
      })
      .then((res) => {
        if (res.status === 200 && res.data.result != null) {
          toast.warn("Hủy yêu cầu gia nhập thành công");
          setIsSubmit(false);
        } else {
          throw new Error("Đã xảy ra lỗi!");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
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
                      {teamList.map((team, index) => (
                        <TeamItem
                          onClick={(e) => handleTeamPick(team.id)}
                          key={index}
                        >
                          <TeamLogo>
                            <img src={teamLogo} />
                          </TeamLogo>
                          <TeamInfo>
                            <TeamName>{team.name}</TeamName>
                            <TeamDescription>
                              <span>
                                <img src={flashIcon} className="w-5 h-5" />
                                {team.skilllevel}
                              </span>
                              <span>
                                <img src={groupIcon} className="w-5 h-5" />
                                {team.size}
                              </span>
                              <span>
                                <img src={starIcon} className="w-5 h-5" />
                                {team.rankingpoint}
                              </span>
                            </TeamDescription>
                          </TeamInfo>
                        </TeamItem>
                      ))}
                    </LeftSide>
                    <RightSide>
                      <TeamDetail htmlFor="team-image">
                        <TeamImage src={teamInfo && teamInfo.avatarUrl} />
                        <input
                          type="file"
                          id="team-image"
                          name="team-image"
                          accept="image/*"
                          className="visually-hidden"
                          onChange={(event) => {
                            const file = event.target.files[0];
                            const path = `/team/${teamInfo.id}/avatar`;
                            handleUpdateAvatar(file, path);
                          }}
                        />
                      </TeamDetail>
                      {isSubmit ? (
                        <button
                          name="button"
                          className="btn btn-danger d-block mx-auto my-4"
                          onClick={handleCancle}
                        >
                          Hủy yêu cầu
                        </button>
                      ) : (
                        <button
                          name="button"
                          className={`btn ${
                            hasJoined ? "btn-warning text-white" : "btn-orange"
                          } d-block mx-auto my-4`}
                          onClick={() => handleSubmit(hasJoined)}
                        >
                          {hasJoined ? "Đã tham gia" : "Tham gia"}
                        </button>
                      )}
                      <div className="px-5">
                        <div>
                          <div className="mb-1 font-bold">Xếp hạng</div>
                          <p className="text-small d-flex ">
                            <img src={rankIcon} className="w-5 h-5 mr-2" />
                            {teamInfo &&
                              (teamInfo.rankingorder > 0
                                ? `Hạng ${teamInfo.rankingorder}`
                                : "Chưa xếp hạng")}
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
                              <div className="">
                                {teamInfo && teamInfo.size} thành viên
                              </div>
                            </div>
                            <div className="d-flex align-item-center">
                              <div className="d-inline mr-2">
                                <img src={editIcon} className="w-5 h-5" />
                              </div>
                              <div className="">
                                {teamInfo && teamInfo.description}
                              </div>
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
                          <div className="mb-1 font-bold">Lịch sử thi đấu</div>
                          <p>CLB chưa có lịch sử thi đấu nào</p>
                        </div>
                        <div>
                          <div className="mb-1 flex justify-between">
                            <span className="font-bold">Hình ảnh</span>
                            <small
                              style={{ color: "orange", cursor: "pointer" }}
                            >
                              Thêm ảnh
                            </small>
                          </div>
                          <p>Chưa có hình ảnh nào</p>
                          <ImageBox
                            isOpen={isOpenImageBox}
                            onClick={() => setIsOpenImageBox(!isOpenImageBox)}
                          ></ImageBox>
                        </div>
                      </div>
                      <div className="px-5">
                        <div className="mb-3">
                          <div className="mb-1 font-bold">
                            Yêu cầu tham gia ({teamRequestSize})
                          </div>
                          {teamRequestList.map((teamRequest, index) => (
                            <TeamRequest
                              key={index}
                              teamRequest={teamRequest}
                              handleTeamRequest={handleTeamRequest}
                            />
                          ))}
                        </div>
                        <div>
                          <div className="mb-1 font-bold">
                            Thành viên (
                            {teamInfo &&
                              teamInfo.users &&
                              teamInfo.users.length}
                            )
                          </div>
                          {teamInfo &&
                            teamInfo.users &&
                            teamInfo.users.map((user, index) => (
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
                                <span
                                  key={index}
                                  className="ml-2"
                                  style={{ color: "#000" }}
                                >
                                  {user.fullName}
                                  <p>{user.phoneNumber}</p>
                                </span>
                              </div>
                            ))}
                        </div>
                      </div>
                    </RightSide>
                  </Container>
                </div>
              </Wrapper>
            </div>
          </div>
        </div>
      </div>{" "}
      <ToastContainer hideProgressBar={true} autoClose={1500} theme="colored" />
    </div>
  );
}

export default FindTeam;
