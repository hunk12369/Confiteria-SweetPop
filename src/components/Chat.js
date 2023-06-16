// Selección de elementos con la clase "collapsible"
var coll = document.getElementsByClassName("collapsible");

// Iteración sobre los elementos seleccionados
for (let i = 0; i < coll.length; i++) {
     // Agregar un event listener al hacer clic en un elemento
    coll[i].addEventListener("click", function () {
        // Alternar la clase "active" en el elemento
        this.classList.toggle("active");
        // Obtener el siguiente elemento
        var content = this.nextElementSibling;
        // Comprobar si el elemento tiene una altura máxima establecida
        if (content.style.maxHeight) {
            // Si tiene una altura máxima, establecerla en null para ocultar el contenido
            content.style.maxHeight = null;
        } else {
            // Si no tiene una altura máxima, establecerla en la altura total para mostrar el contenido
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

// Función para obtener la hora actual
function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();
    // Agregar ceros iniciales a las horas y minutos si son menores a 10
    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// Obtiene el primer mensaje del bot
function firstBotMessage() {
    let firstMessage = "Bienvenido💕, este es un Chatbot de SweetPop, si quieres iniciar la consulta escribe un <strong>“Hola”</strong> Y para cerrar la conversación un <strong>“Adiós”</strong> "
    // Establece el mensaje inicial en el elemento con el id "botStarterMessage"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();
    // Agrega la hora al elemento con el id "chat-timestamp"
    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

// Llama a la función para mostrar el primer mensaje del bot
firstBotMessage();

// Obtiene la respuesta del bot
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    // Agrega la respuesta del bot al contenedor de mensajes con el id "chatbox"
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

// Obtiene el texto de la caja de entrada y lo procesa
function getResponse() {
    let userText = $("#textInput").val();

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';
    // Vacía la caja de entrada
    $("#textInput").val("");
    // Agrega el texto del usuario al contenedor de mensajes con el id "chatbox"
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// Manejar el envío de mensajes mediante clic en el botón de enviar
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';
    // Limpiar el campo de entrada de texto
    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

}
// Llamar a la función getResponse al hacer clic en el botón de enviar
function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("💖")
}

//Presiona enter para enviar un mensaje
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});
