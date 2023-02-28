import React from "react";

import "./ChatListItem.css";

const ChatListItem = ({ data, onItemClick, activeChat, ...props }) => {
  return (
    <div
      className={`chatItem ${activeChat ? "activeChat" : ""}`}
      onClick={onItemClick}
    >
      <img src={data.chatImage} alt="avatar-img" className="chatItemAvatar" />
      <div className="chatItemContent">
        <div className="chatItemLine">
          <div className="chatItemName">{data.chatName}</div>
          <div className="chatItemDate">19:00</div>
        </div>
        <div className="chatItemLine">
          <div className="chatItemLastMsg">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste non
              delectus libero unde, aut at.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatListItem;
