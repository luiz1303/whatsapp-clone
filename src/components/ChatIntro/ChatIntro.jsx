import "./ChatIntro.css";

const ChatIntro = () => {
  return (
    <div className="chatIntro">
      <img
        className="intro-img"
        src="https://i.imgur.com/doQt84f.png"
        alt="intro-img"
      />

      <h1>Mantenha seu celular conectado</h1>
      <h2>
        O ZapClone conecta ao seu telefone para sincronizar suas mensagens. Para
        reduzir o uso de dados, conecte o seu celular a uma rede Wi-fi.
      </h2>
    </div>
  );
};

export default ChatIntro;
