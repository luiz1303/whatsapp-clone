import React, { useState, useEffect, useRef } from "react";

import "./ChatWindow.css";

import MessageItem from "../MessageItem/MessageItem";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MicIcon from "@mui/icons-material/Mic";
import SendIcon from "@mui/icons-material/Send";
import VideocamIcon from "@mui/icons-material/Videocam";
import EmojiPicker from "emoji-picker-react";
import Draggable from "react-draggable";

//  Biblioteca para animações
import { gsap } from "gsap";

const ChatWindow = ({ user, activeChat, ...props }) => {
  let recognition = null;
  let SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognition !== undefined) {
    recognition = new SpeechRecognition();
  }

  const [isPickingEmoji, setIsPickingEmoji] = useState(false);
  const [isSendingAudio, setIsSendingAudio] = useState(false);
  const [isSendingFile, setIsSendingFile] = useState(false);
  const [text, setText] = useState("");
  const [list, setList] = useState([
    {
      msgAuthor: user.id,
      msgText:
        "Texto da msg 1Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quodaaaaaasasasasasdsjkkkkkkkkkkkkkkkkkkkkkkk",
      msgDate: "19:00",
      msgViewStatus: true,
    },
    {
      msgAuthor: "123",
      msgText: "Texto da msg 2",
      msgDate: "20:00",
      msgViewStatus: false,
    },
    {
      msgAuthor: "123",
      msgText: "Texto da msg 2",
      msgDate: "20:00",
      msgViewStatus: false,
    },
    {
      msgAuthor: user.id,
      msgText: "Texto da msg 2",
      msgDate: "20:00",
      msgViewStatus: false,
    },
    {
      msgAuthor: user.id,
      msgText: "Texto da msg 2",
      msgDate: "20:00",
      msgViewStatus: false,
    },
    {
      msgAuthor: "123",
      msgText: "Texto da msg 2",
      msgDate: "20:00",
      msgViewStatus: false,
    },

    {
      msgAuthor: user.id,
      msgText:
        "Texto Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quodaaaaaasasasasasdsjkkkkkkkkkkkkkkkkkkkkkkk",
      msgDate: "20:00",
      msgViewStatus: false,
    },
    {
      msgAuthor: "123",
      msgText:
        "Texto Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quodaaaaaasasasasasdsjkkkkkkkkkkkkkkkkkkkkkkk",
      msgDate: "20:00",
      msgViewStatus: false,
    },
    {
      msgAuthor: user.id,
      msgText:
        "Texto Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quodaaaaaasasasasasdsjkkkkkkkkkkkkkkkkkkkkkkk",
      msgDate: "20:00",
      msgViewStatus: false,
    },
    {
      msgAuthor: "123",
      msgText:
        "Texto Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quodaaaaaasasasasasdsjkkkkkkkkkkkkkkkkkkkkkkk",
      msgDate: "20:00",
      msgViewStatus: false,
    },
    {
      msgAuthor: user.id,
      msgText:
        "Texto Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quodaaaaaasasasasasdsjkkkkkkkkkkkkkkkkkkkkkkk",
      msgDate: "20:00",
      msgViewStatus: false,
    },
    {
      msgAuthor: "123",
      msgText:
        "Texto Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quodaaaaaasasasasasdsjkkkkkkkkkkkkkkkkkkkkkkk",
      msgDate: "20:00",
      msgViewStatus: false,
    },
    {
      msgAuthor: user.id,
      msgText:
        "Texto Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quodaaaaaasasasasasdsjkkkkkkkkkkkkkkkkkkkkkkk",
      msgDate: "20:00",
      msgViewStatus: false,
    },
    {
      msgAuthor: "123",
      msgText:
        "Texto Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quodaaaaaasasasasasdsjkkkkkkkkkkkkkkkkkkkkkkk",
      msgDate: "20:00",
      msgViewStatus: false,
    },
    {
      msgAuthor: user.id,
      msgText:
        "Texto Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quodaaaaaasasasasasdsjkkkkkkkkkkkkkkkkkkkkkkk",
      msgDate: "20:00",
      msgViewStatus: false,
    },
    {
      msgAuthor: "123",
      msgText:
        "Texto Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quodaaaaaasasasasasdsjkkkkkkkkkkkkkkkkkkkkkkk",
      msgDate: "20:00",
      msgViewStatus: false,
    },
    {
      msgAuthor: user.id,
      msgText:
        "Texto Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quodaaaaaasasasasasdsjkkkkkkkkkkkkkkkkkkkkkkk",
      msgDate: "20:00",
      msgViewStatus: false,
    },
    {
      msgAuthor: "123",
      msgText:
        "Texto Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quodaaaaaasasasasasdsjkkkkkkkkkkkkkkkkkkkkkkk",
      msgDate: "20:00",
      msgViewStatus: false,
    },
    {
      msgAuthor: user.id,
      msgText:
        "Texto Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quodaaaaaasasasasasdsjkkkkkkkkkkkkkkkkkkkkkkk",
      msgDate: "20:00",
      msgViewStatus: false,
    },
    {
      msgAuthor: "123",
      msgText:
        "Texto Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quodaaaaaasasasasasdsjkkkkkkkkkkkkkkkkkkkkkkk",
      msgDate: "20:00",
      msgViewStatus: false,
    },
    {
      msgAuthor: user.id,
      msgText:
        "Texto Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quodaaaaaasasasasasdsjkkkkkkkkkkkkkkkkkkkkkkk",
      msgDate: "20:00",
      msgViewStatus: false,
    },
    {
      msgAuthor: "123",
      msgText:
        "Texto Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quodaaaaaasasasasasdsjkkkkkkkkkkkkkkkkkkkkkkk",
      msgDate: "20:00",
      msgViewStatus: false,
    },
    {
      msgAuthor: user.id,
      msgText:
        "Texto Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quodaaaaaasasasasasdsjkkkkkkkkkkkkkkkkkkkkkkk",
      msgDate: "20:00",
      msgViewStatus: false,
    },
    {
      msgAuthor: "123",
      msgText:
        "Texto Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quodaaaaaasasasasasdsjkkkkkkkkkkkkkkkkkkkkkkk",
      msgDate: "20:00",
      msgViewStatus: false,
    },
    {
      msgAuthor: user.id,
      msgText:
        "Texto Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quodaaaaaasasasasasdsjkkkkkkkkkkkkkkkkkkkkkkk",
      msgDate: "20:00",
      msgViewStatus: false,
    },
    {
      msgAuthor: "123",
      msgText:
        "Texto Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quodaaaaaasasasasasdsjkkkkkkkkkkkkkkkkkkkkkkk",
      msgDate: "20:00",
      msgViewStatus: false,
    },
    {
      msgAuthor: user.id,
      msgText:
        "Texto Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quodaaaaaasasasasasdsjkkkkkkkkkkkkkkkkkkkkkkk",
      msgDate: "20:00",
      msgViewStatus: false,
    },
    {
      msgAuthor: "123",
      msgText:
        "Texto Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quodaaaaaasasasasasdsjkkkkkkkkkkkkkkkkkkkkkkk",
      msgDate: "20:00",
      msgViewStatus: false,
    },
    {
      msgAuthor: user.id,
      msgText:
        "Texto Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quodaaaaaasasasasasdsjkkkkkkkkkkkkkkkkkkkkkkk",
      msgDate: "20:00",
      msgViewStatus: false,
    },
    {
      msgAuthor: "123",
      msgText:
        "Texto Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quodaaaaaasasasasasdsjkkkkkkkkkkkkkkkkkkkkkkk",
      msgDate: "20:00",
      msgViewStatus: false,
    },
  ]);

  const body = useRef();

  useEffect(() => {
    if (list.length > 0) {
      let scroll = body.current.scrollHeight;
      body.current.scrollTop = scroll;
    }
  }, [list]);

  const handleEmojiClick = (event) => {
    setText(text + event.emoji);
  };

  const handleSendMessage = (event) => {};
  const handleSendAudio = () => {
    if (isSendingAudio) setIsSendingAudio(false);
    else {
      if (recognition !== null) {
        recognition.onstart = () => {
          setIsSendingAudio(true);
        };
        recognition.onend = () => {
          setIsSendingAudio(false);
        };
        recognition.onresult = (event) => {
          setText(event.results[0][0].transcript);
        };

        recognition.start();
      }
    }
  };

  return (
    <div className="chatWindow">
      <div className="chatHeader">
        <div className="chatHeaderInfo">
          <img src={activeChat.chatImage} alt="" className="chatAvatar" />
          <div className="chatHeaderTextInfo">
            <div className="chatName">{activeChat.chatName}</div>
            <div className="chatStatus">Online</div>
          </div>
        </div>
        <div className="chatHeaderButtons">
          <div className="chatBtn">
            <LocalPhoneIcon style={{ color: "#919191" }} />
          </div>
          <div className="chatBtn">
            <VideocamIcon style={{ color: "#919191" }} />
          </div>
          <div className="chatBtn">
            <MoreVertIcon style={{ color: "#919191" }} />
          </div>
        </div>
      </div>
      <div ref={body} className="chatContent">
        {list.map((item, key) => (
          <MessageItem user={user} key={key} data={item} />
        ))}
      </div>

      <Draggable>
        <div className="emojiArea">
          {isPickingEmoji && (
            <EmojiPicker skinTonesDisabled onEmojiClick={handleEmojiClick} />
          )}
        </div>
      </Draggable>
      <div className="msgArea">
        <div className="leftIconArea">
          <div
            className="chatBtn"
            onClick={() => {
              setIsPickingEmoji(!isPickingEmoji);
            }}
          >
            <SentimentSatisfiedAltIcon
              fontSize="small"
              style={{ color: isPickingEmoji ? "#009688" : "#919191" }}
            />
          </div>
          <div
            className="chatBtn"
            onClick={() => {
              setIsSendingFile(!isSendingFile);
            }}
          >
            <AttachFileIcon
              fontSize="small"
              style={{ color: isSendingFile ? "#009688" : "#919191" }}
            />
          </div>
        </div>
        <div className="msgInputArea">
          <input
            className="msgInputContent"
            type="text"
            placeholder="Digite uma mensagem"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="chatBtn" onClick={handleSendMessage}>
            <SendIcon fontSize="string" style={{ color: "#919191" }} />
          </div>
        </div>

        <div className="RightIconArea">
          <div
            className={`chatBtn ${text === "" ? "" : "hidden animation"}`}
            onClick={() => {
              handleSendAudio();
            }}
          >
            <MicIcon
              fontSize="small"
              style={{ color: isSendingAudio ? "#009688" : "#919191" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
