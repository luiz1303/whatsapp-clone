import { React } from "react";
import api from "../../api";

import "./Login.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Login = ({ onReceive, ...props }) => {
  const handleFacebookLogin = async () => {
    let res = await api.facebookPopup();

    if (res) {
      onReceive(res.user);
    } else {
      alert("Erro ao logar com o Facebook");
    }
  };

  return (
    <div className="background">
      <div className="login">
        <WhatsAppIcon className="logo-icon" style={{ fontSize: "5rem" }} />
        <h1>Bem vindo ao Whats(React)App</h1>
        <h3>Para acessar a aplicação, faça o login:</h3>
        <button onClick={() => handleFacebookLogin()}>
          Logar com o Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
