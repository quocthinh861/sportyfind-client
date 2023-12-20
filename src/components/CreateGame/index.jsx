import React, { useEffect, useState } from "react";
import "./style.css";
import { Form, Col } from "react-bootstrap"; // Import Form and Col from react-bootstrap
import { useSelector } from "react-redux";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { toast } from "react-toastify";

function CreateGameMatch(props) {
  console.log(props)
  const axiosPrivate = useAxiosPrivate();
  const user = useSelector((state) => state.user);
  const userId = user.data?.user?.id;
  const [teamList, setTeamList] = useState([]);
  const [description, setDescription] = useState("");
  const [selectedTeamId, setSelectedTeamId] = useState(null);
  const [gameType, setGameType] = useState(0);

  const handleTeamChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedTeamId(selectedValue);
  };

  const handleGameTypeChange = (event) => {
    setGameType(parseInt(event.target.value, 10));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      teamAId: selectedTeamId,
      description: description,
      gameType: gameType,
      bookingId: props.bookingInfo?.id,
    };

    axiosPrivate.post("/game/createMatch", data).then((res) => {
      try {
        if (res.status === 200) {
          toast.success("Tạo trận đấu thành công!");
        } else {
          toast.error("Đã có lỗi xảy ra");
        }
      } catch(err) {
        toast.error("Đã có lỗi xảy ra");
      }
    });
  };

  useEffect(() => {
    if (user.data?.user) {
      const userId = user.data.user.id;

      // Lấy danh sách đội bóng của user
      axiosPrivate
        .get(`/team/getTeamListByUserId?userId=${userId}`)
        .then((res) => {
          if(res.status == 200) {
            setTeamList(res.data.result);
          }
        })
        .catch((error) => {
          // Handle errors here, e.g., logging or displaying an error message
          console.error("Error fetching user info:", error);
        });
    }
  }, [user]);

    // Set the initial selected team ID to the first item in teamList
    useEffect(() => {
      if (teamList.length > 0) {
        setSelectedTeamId(teamList[0].id);
      }
    }, [teamList]);

  return (
    <div className="user-page-content">
      <section className="border-light">
        <div className="row justify-content-center m-2">
          <h5
            className="w-100 text-center d-none d-md-block"
            style={{ fontWeight: 700 }}
          >
            Tạo trận đấu mới
          </h5>
        </div>
        <div className="row justify-content-center m-2">
          <div className="col">
            <div className="d-flex justify-content-center">
              <div className="w-75">
                <div className="form-group row mb-4">
                  <label
                    for="inputPassword"
                    className="col-sm-2 col-form-label"
                  >
                    Chọn đội
                  </label>
                  <div className="col-sm-10">
                    <Form.Select id="inputPassword" value={selectedTeamId} onChange={handleTeamChange}>
                      {
                        teamList.map((team) => {
                          return <option value={team.id}>{team.name}</option>
                        })
                      }
                      {/* Add more options as needed */}
                    </Form.Select>
                  </div>
                </div>
                <div className="form-group row mb-4">
                  <label
                    for="inputPassword"
                    className="col-sm-2 col-form-label"
                  >
                    Loại
                  </label>
                  <div className="col-sm-10">
                    <Form.Select value={gameType} onChange={handleGameTypeChange}>
                      <option value={1}>Đá nội bộ</option>
                      <option value={0}>Đá kèo</option>
                    </Form.Select>
                  </div>
                </div>
                <div className="form-group row mb-4">
                  <label
                    for="inputPassword"
                    className="col-sm-2 col-form-label"
                  >
                    Sân bóng
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="fieldName"
                      value={props.bookingInfo?.venue}
                      readOnly
                    />
                  </div>
                </div>
                <div className="form-group row mb-4">
                  <label
                    for="inputPassword"
                    className="col-sm-2 col-form-label"
                  >
                    Liên hệ
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="contact"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="form-group row mb-4">
                  <label
                    for="inputPassword"
                    className="col-sm-2 col-form-label"
                  >
                    Ghi chú
                  </label>
                  <div className="col-sm-10">
                    <textarea
                      id="game-description"
                      name="game-description"
                      className="form-control"
                      placeholder="Ghi chú"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <button
                  name="button"
                  className="btn btn-orange d-block mx-auto"
                  onClick={handleSubmit}
                >
                  Tạo mới
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CreateGameMatch;
