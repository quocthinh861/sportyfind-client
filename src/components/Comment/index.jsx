import React, { useEffect } from "react";
import footballPlayer from "../../assets/images/football-player.png";
import styled from "styled-components";
import { createMessage } from "../../api/apiCalls.tsx";
import supabase from "../../client/Supabase";
import { add } from "date-fns";

const CommentContent = styled.div`
  overflow-y: auto;
  max-height: 48vh;
`;

const Time = styled.span`
  position: absolute;
  right: 5px;
  top: 5px;
  font-size: 0.8rem;
  font-style: italic;
`;

function Comment({ roomId = 1 }) {
  const channels = supabase.getChannels();
  const currentChannel = channels.find(
    (channel) => channel.name === `room:${roomId}`
  );
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState([]);

  const submitMessage = async () => {
    if (!message) return;

    const newMessage = {
      content: message,
      roomid: roomId,
      userid: 1,
    };

    const response = await createMessage(newMessage);
    addMessageToRoom(response);

    console.log(response);
  };

  const addMessageToRoom = (message) => {
    if (!message) return;

    if (currentChannel != null && currentChannel != undefined) {
      currentChannel.send({
        type: "broadcast",

        event: "new_message",

        payload: { message },
      });
    }
  };

  const getMessages = async () => {
    const response = await supabase.from("message").select("*");
    if (response) setMessages(response.data);
  };

  const subscribeToRoom = () => {
    const isAlreadyInRealtime = channels.find(
      (channel) => channel.name === `room:${roomId}`
    );
    if (isAlreadyInRealtime) return;
    const channel = supabase.channel(`room:${roomId}`);
    channel
      .on("broadcast", "new_message", (message) => {
        console.log(message);
      })
      .subscribe();
  };

  useEffect(() => {
    subscribeToRoom();
  }, []);

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div className="px-4">
      <CommentContent>
        {messages &&
          messages.map((message, index) => (
            <div className="flex items-center relative" id={index}>
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
                <p>{message.content}</p>
              </span>
              <Time>7 giờ trước</Time>
            </div>
          ))}
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button
          name="button"
          class="btn btn-orange d-block ml-auto mr-4 mt-3"
          onClick={submitMessage}
        >
          Đăng
        </button>
      </div>
    </div>
  );
}

export default Comment;
