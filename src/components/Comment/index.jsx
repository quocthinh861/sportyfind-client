import React, { useEffect, useDispatch } from "react";
import footballPlayer from "../../assets/images/football-player.png";
import styled from "styled-components";
import { createMessage } from "../../api/apiCalls.tsx";
import supabase from "../../client/Supabase";
import { add } from "date-fns";
import { useSelector } from "react-redux";
import { formatTimeDifference } from "../../utils/TimeUtil";

const CommentContent = styled.div`
  overflow-y: auto;
  max-height: 48vh;
  padding-bottom: 1rem;
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
  const user = useSelector((state) => state.user);

  const submitMessage = async () => {
    if (!message) return;

    const newMessage = {
      content: message,
      roomid: roomId,
      userid: 1,
    };

    const response = await createMessage(newMessage);
    addMessageToRoom(response);
    response.userName = user?.data?.user.username;

    setMessages((messages) => [...messages, response]);
    setMessage("");
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
    const response = await supabase
    .from("message")
    .select("*")
    .eq("userid", 1)
    .eq("roomid", roomId);
    var messages = response.data;
    if(messages == null || messages == undefined) return;
    setMessages(messages.map((message) => {
      return {
        ...message,
        userName: "Thịnh Lang",
      };
    }));
  
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

  useEffect(() => {
        // Scroll to bottom
        const chatContent = document.getElementById("chat-content");
        chatContent.scrollTop = chatContent.scrollHeight + 1000;
  }, [messages]);


  return (
    <div className="px-4">
      <CommentContent id="chat-content">
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
                {
                  message.userName // Author Name
                }
                <p>{message.content}</p>
              </span>
              <Time>{formatTimeDifference(message.created_at)}</Time>
            </div>
          ))}
      </CommentContent>
      <div
        style={{
          position: "absolute",
          bottom: "0",
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
          className="btn btn-orange d-block ml-auto mr-4 mt-3"
          onClick={submitMessage}
        >
          Đăng
        </button>
      </div>
    </div>
  );
}

export default Comment;
