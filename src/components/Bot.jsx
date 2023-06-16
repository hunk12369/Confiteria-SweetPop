import React, { useEffect } from 'react';
import "./Chat.css"
import "./Home1.css"
const Bot = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'src/components/Responses.js';
    document.body.appendChild(script2);

    const script3 = document.createElement('script');
    script3.src = 'src/components/Chat.js';
    document.body.appendChild(script3);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
      document.body.removeChild(script3);
    };
  }, []);

  const heartButton = () => {
    // Implementa la lógica para el botón de corazón
  };

  const sendButton = () => {
    // Implementa la lógica para el botón de enviar
  };

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
                <p id="botStarterMessage" className="botText"><span>Loading...</span></p>
              </div>

              <div className="chat-bar-input-block">
                <div id="userInput">
                  <input id="textInput" className="input-box" type="text" name="msg" placeholder="Toca 'Enter' para enviar un mensaje" />
                  <p></p>
                </div>
                <div className="chat-bar-icons">
                  <i id="chat-icon" style={{ color: 'crimson' }} className="fa fa-fw fa-heart" onClick={heartButton}></i>
                  <i id="chat-icon" style={{ color: 'rgb(194, 34, 128)' }} className="fa fa-fw fa-send" onClick={sendButton}></i>
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
}

export default Bot;
