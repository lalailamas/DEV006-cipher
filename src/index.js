import cipher from './cipher.js';
//aca se escuchan eventos del DOM, invocar cipher.encode ()
//console.log(cipher);

const displacement = document.getElementById ("displacement");
const messageInitial = document.getElementById ("messageInitial");
const codedMessage = document.getElementById ("codedMessage");

const encodeButton = document.getElementById ("encodeButton");
encodeButton.addEventListener("click", function () {
  codedMessage.innerText= cipher.encode (displacement, messageInitial);
})

 

