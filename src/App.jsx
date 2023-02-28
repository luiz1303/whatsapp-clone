import React, { useState } from "react";
import "./App.css";

// Ícones importados de: https://mui.com/material-ui/material-icons/
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import ChatListItem from "./components/ChatListItem/ChatListItem";
import ChatIntro from "./components/ChatIntro/ChatIntro";
import ChatWindow from "./components/ChatWindow/ChatWindow";
import NewChat from "./components/NewChat/NewChat";
import Login from "./components/Login/Login";
import api from "./api";

const App = () => {
  const [user, setUser] = useState(null);
  const [chatList, setChatList] = useState([
    {
      chatId: 1,
      chatName: "User 1",
      chatImage:
        "https://ovicio.com.br/wp-content/uploads/2022/12/20221208-fjedp5lwiaacwbx-555x555.jpeg",
    },
    {
      chatId: 2,
      chatName: "User 2",
      chatImage:
        "https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg",
    },
    {
      chatId: 3,
      chatName: "User 3",
      chatImage:
        "https://ftw.usatoday.com/wp-content/uploads/sites/90/2017/05/spongebob.jpg?w=1000&h=600&crop=1",
    },
    {
      chatId: 4,
      chatName: "User 4",
      chatImage:
        "https://psicologafabiola.com.br/wp-content/uploads/2017/06/jogo-da-baleia-azul-1200x677.jpg",
    },
  ]);

  const [activeChat, setActiveChat] = useState({});
  const [openNewChat, setOpenNewChat] = useState(false);

  const handleNewChat = () => {
    setOpenNewChat(true);
  };

  const handleLoginData = async (data) => {
    let newUser = {
      id: data.uid,
      name: data.displayName,
      avatar: data.photoURL,
    };

    await api.addUser(newUser);

    setUser(newUser);
  };

  if (user === null) {
    return <Login onReceive={handleLoginData} />;
  }

  return (
    <div className="appWindow">
      <div className="sidebar">
        <NewChat
          user={user}
          chatList={chatList}
          openNewChat={openNewChat}
          setOpenNewChat={setOpenNewChat}
        />
        <div className="header">
          <img className="headerAvatar" src={user.avatar} alt="userImg" />
          <div className="headerButtons">
            <div className="headerBtn">
              <DonutLargeIcon style={{ color: "#919191" }} />
            </div>
            <div className="headerBtn" onClick={() => handleNewChat()}>
              <ChatIcon style={{ color: "#919191" }} />
            </div>
            <div className="headerBtn">
              <MoreVertIcon style={{ color: "#919191" }} />
            </div>
          </div>
        </div>
        <div className="search">
          <div className="searchInput">
            <SearchIcon fontSize="small" style={{ color: "#919191" }} />
            <input
              type="search"
              placeholder="Pesquisar ou começar uma nova conversa"
            />
          </div>
        </div>
        <div className="chatList">
          {chatList.map((item, index) => {
            return (
              <ChatListItem
                key={index}
                activeChat={activeChat.chatId === item.chatId}
                data={item}
                onItemClick={() => setActiveChat(chatList[index])}
              ></ChatListItem>
            );
          })}
        </div>
      </div>
      <div className="contentArea">
        {activeChat.chatId === undefined && <ChatIntro />}
        {activeChat.chatId !== undefined && (
          <ChatWindow user={user} activeChat={activeChat} />
        )}
      </div>
    </div>
  );
};

export default App;
