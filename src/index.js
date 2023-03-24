import cipher from './cipher.js';
//aca se escuchan eventos del DOM, invocar cipher.encode ()

const displacement = document.getElementById("displacement");
const messageInitial = document.getElementById("messageInitial");
const encodeButton = document.getElementById("encodeButton");
const decodedButton = document.getElementById("decodeButton");

encodeButton.addEventListener("click", function () {
  const codedMessage = cipher.encode(displacement.value, messageInitial.value);
  messageInitial.value = codedMessage;
});

decodedButton.addEventListener("click", function () {
  const decodedMessage = cipher.decode(displacement.value, messageInitial.value);
  messageInitial.value = decodedMessage;
});

const sendButton = document.getElementById("sendButton");
sendButton.addEventListener("click", function () {
  alert("Tu mensaje ha sido enviado, te contactaremos en breve");
});