import React from "react";

import "./MessageItem.css";

const MessageItem = ({ user, data, ...props }) => {
  return (
    <div
      className="msgLineContainer"
      style={{
        justifyContent: user.id === data.msgAuthor ? "flex-end" : "flex-start",
      }}
    >
      <div
        className="msgItem"
        style={{
          backgroundColor: user.id === data.msgAuthor ? "#dcf8c6" : "#fff",
        }}
      >
        <div className="msgText">{data.msgText}</div>
        <div className="msgDate">{data.msgDate}</div>
        <div className="msgViewStatus"></div>
      </div>
    </div>
  );
};

export default MessageItem;
