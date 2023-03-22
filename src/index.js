import cipher from './cipher.js';
//aca se escuchan eventos del DOM, invocar cipher.encode ()
//


//const displacement = document.getElementById ("displacement");
//const messageInitial = document.getElementById ("messageInitial");
//const codedMessage = document.getElementById ("codedMessage");

//const encodeButton = document.getElementById ("encodeButton");

//encodeButton.addEventListener("click", function () {
//messageInitial.innerText = cipher.encode (displacement, messageInitial);

//})

const displacement = document.getElementById ("displacement");
encodeButton.addEventListener ("click", function() {
document.getElementById ("messageInitial").innerText = cipher.encode (displacement, messageInitial);
 let textArea = document.getElementById ("messageInitial");
 textArea = messageInitial.encode.innerText;

;

});