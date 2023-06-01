import React from "react";
import footballPlayer from "../../assets/images/football-player.png";
import styled from "styled-components";

const CommentContent = styled.div`
  overflow-y: auto;
  max-height: 48vh;
`;

function Comment() {
  const Time = styled.span`
    position: absolute;
    right: 5px;
    top: 5px;
    font-size: 0.8rem;
    font-style: italic;
  `;

  return (
    <div className="px-4">
      <CommentContent>
        <div className="flex items-center relative">
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
          <Time>7 giờ trước</Time>
        </div>
        <div className="flex items-center relative">
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
          <Time>7 giờ trước</Time>
        </div>
        <div className="flex items-center relative">
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
          <Time>7 giờ trước</Time>
        </div>
      </CommentContent>
      <div
        style={{
          position: "absolute",
          bottom: "1rem",
          left: "50%",
          transform: "translateX(-50%)",
          width: "90%",
        }}
      >
        <textarea
          id="product-description"
          name="product-description"
          className="form-control"
          placeholder="Bình luận"
        ></textarea>
        <button name="button" class="btn btn-orange d-block ml-auto mr-4 mt-3">
          Đăng
        </button>
      </div>
    </div>
  );
}

export default Comment;