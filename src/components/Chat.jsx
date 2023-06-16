import React, { useEffect } from 'react';
import './Chat.css';
import './Home1.css';

const Chat = () => {
  useEffect(() => {
    const handleCollapsibleClick = (event) => {
      event.target.classList.toggle("active");
      const content = event.target.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    };

    const coll = document.getElementsByClassName("collapsible");
    for (let i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", handleCollapsibleClick);
    }

    const getTime = () => {
      const today = new Date();
      let hours = today.getHours();
      let minutes = today.getMinutes();
      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      return hours + ":" + minutes;
    };

    const firstBotMessage = () => {
      const firstMessage =
        'Bienvenido💕, este es un Chatbot de SweetPop, si quieres iniciar la consulta escribe un "Hola". Y para cerrar la conversación un "Adiós".';
      document.getElementById("botStarterMessage").innerHTML =
        '<p class="botText"><span>' + firstMessage + '</span></p>';
      const time = getTime();
      $("#chat-timestamp").append(time);
      document.getElementById("userInput").scrollIntoView(false);
    };

    firstBotMessage();

    const getBotResponse = (userText) => {
      // Lógica para obtener la respuesta del bot basada en el texto del usuario
      // ...

      return "Respuesta del bot"; // Reemplaza esto con la respuesta real del bot
    };

    const getHardResponse = (userText) => {
      const botResponse = getBotResponse(userText);
      const botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
      $("#chatbox").append(botHtml);
      document.getElementById("chat-bar-bottom").scrollIntoView(true);
    };

    const getResponse = () => {
      const userText = $("#textInput").val();
      const userHtml = '<p class="userText"><span>' + userText + '</span></p>';
      $("#textInput").val("");
      $("#chatbox").append(userHtml);
      document.getElementById("chat-bar-bottom").scrollIntoView(true);
      setTimeout(() => {
        getHardResponse(userText);
      }, 1000);
    };

    const handleSendButton = () => {
      getResponse();
    };

    const handleHeartButton = () => {
      const sampleText = "💖";
      const userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';
      $("#textInput").val("");
      $("#chatbox").append(userHtml);
      document.getElementById("chat-bar-bottom").scrollIntoView(true);
    };

    $("#textInput").keypress(function (e) {
      if (e.which === 13) {
        getResponse();
      }
    });

    return () => {
      const coll = document.getElementsByClassName("collapsible");
      for (let i = 0; i < coll.length; i++) {
        coll[i].removeEventListener("click", handleCollapsibleClick);
      }
    };
  }, []);

  return (
    <div className="chat-bar-collapsible">
      <button id="chat-button" type="button" className="collapsible">
        Sweet Pop
        <i id="chat-icon" style={{ color: '#fff' }} className="fa fa-fw fa-comments-o"></i>
      </button>

      <div className="content">
        <div className="full-chat-block">
          <div className="outer-container">
            <div className="chat-container">
              <div id="chatbox">
                <h5 id="chat-timestamp"></h5>
                <p id="botStarterMessage" className="botText">
                  <span>Loading...</span>
                </p>
              </div>

              <div className="chat-bar-input-block">
                <div id="userInput">
                  <input
                    id="textInput"
                    className="input-box"
                    type="text"
                    name="msg"
                    placeholder="Toca 'Enter' para enviar un mensaje"
                  />
                  <p></p>
                </div>
                <div className="chat-bar-icons">
                  <i
                    id="chat-icon"
                    style={{ color: 'crimson' }}
                    className="fa fa-fw fa-heart"
                    onClick={handleHeartButton}
                  ></i>
                  <i
                    id="chat-icon"
                    style={{ color: 'rgb(194, 34, 128)' }}
                    className="fa fa-fw fa-send"
                    onClick={handleSendButton}
                  ></i>
                </div>
              </div>
              <div id="chat-bar-bottom">
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
