import React, { useState } from "react";
import "./style.css";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

function Account() {
  const [clubName, setClubName] = useState("");
  const [description, setDescription] = useState("");
  const [averageScore, setAverageScore] = useState(50);
  const user = useSelector((state) => state.user);
  const userId = user.data?.user?.id;

  const axiosPrivate = useAxiosPrivate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const query = {
      name: clubName,
      description: description,
      skilllevel: averageScore,
      captainid: userId,
    };

    try {
      axiosPrivate.post("/team/create", query).then((res) => {
        console.log("asdasd");
        toast.success("Tạo đội thành công");
      });
    } catch (error) {
      console.log("error: ", error);
    }
  };

  let skillLevel = {};
  if (averageScore < 10) {
    skillLevel = {
      title: "Mới bắt đầu",
      description:
        "Bạn mới bắt đầu với thể thao này và đang học các kỹ năng cơ bản.",
    };
  } else if (averageScore < 30) {
    skillLevel = {
      title: "Người mới",
      description:
        "Bạn đã có ít kinh nghiệm và đang phát triển các kỹ năng cơ bản.",
    };
  } else if (averageScore < 50) {
    skillLevel = {
      title: "Trung bình",
      description:
        "Bạn đã có kinh nghiệm và có khả năng thực hiện một số kỹ thuật cơ bản.",
    };
  } else if (averageScore < 70) {
    skillLevel = {
      title: "Khá",
      description:
        "Bạn đã thành thạo một số kỹ thuật nâng cao và có thể áp dụng chúng trong trò chơi.",
    };
  } else if (averageScore < 90) {
    skillLevel = {
      title: "Giỏi",
      description:
        "Bạn là một chuyên gia trong môn thể thao này và có thể xử lý các tình huống phức tạp.",
    };
  } else {
    skillLevel = {
      title: "Đỉnh cao",
      description:
        "Bạn là một vận động viên tài ba và đã đạt đến đỉnh cao của môn thể thao này.",
    };
  }

  return (
    <div className="user-page-content">
      <section className="border-light">
        <div className="row justify-content-center m-2">
          <h5
            className="w-100 text-center d-none d-md-block"
            style={{ fontWeight: 700 }}
          >
            Tạo câu lạc bộ
          </h5>
        </div>
        <div className="row justify-content-center m-2">
          <div className="col">
            <div className="d-flex justify-content-center">
              <div className="w-75">
                <div className="form-group mb-4">
                  <label htmlFor="product-description" className="form-label">
                    Tên
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword"
                    onChange={(e) => setClubName(e.target.value)}
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="product-description" className="form-label">
                    Mô tả
                  </label>
                  <textarea
                    id="product-description"
                    name="product-description"
                    className="form-control"
                    placeholder="Ghi chú"
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                <div>
                  <div>
                    Điểm trung bình: <b>{averageScore}</b>
                  </div>
                  <p>
                    <b>{skillLevel.title}:</b> {skillLevel.description}
                  </p>
                  <input
                    type="range"
                    id="distance"
                    name="distance"
                    step="1"
                    value={averageScore}
                    min="0"
                    max="100"
                    onChange={(e) => setAverageScore(e.target.value)}
                    className="px-0"
                  />
                </div>
                <button
                  name="button"
                  onClick={handleSubmit}
                  className="btn btn-orange d-block mx-auto"
                >
                  Tạo mới
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer hideProgressBar={true} autoClose={1500} theme="colored" />
    </div>
  );
}

export default Account;
