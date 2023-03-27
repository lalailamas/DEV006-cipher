//aca se implementa el objeto cipher
//cipher.encode(offset, string)
//cipher.decode (offset, string)

const cipher = {
  encode: (displacement, messageInitial) => {
    const messageValue = messageInitial;
    const displacementValue = displacement;

    if (displacement !== Number || messageInitial !== String) {
      throw TypeError("Ingresa un número de desplazamiento y escribe tu mensaje en el recuadro");
    }
    let codedMessage = "";

    //bucle
    for (let i = 0; i < messageValue.length; i++) {
      //charCodeAt devuelve el numero indicando el valor del caracter
      const asciiNumber = messageValue[i].charCodeAt();
      //console.log(asciiNumber);

      //condicional para numeros entre 65 y 90 (letras en mayuscula)
      if (asciiNumber >= 65 && asciiNumber <= 90) {
        const asciiTextMay = (((asciiNumber - 65 + parseInt(displacementValue)) % 26) + 65);
        //fromCharCode devuelve la cadena creada 
        codedMessage += String.fromCharCode(asciiTextMay);
        //condicional para numeros entre 97 y 122 (letras en minúscula)
      } else if (asciiNumber >= 97 && asciiNumber <= 122) {
        const asciiTextMin = (((asciiNumber - 97 + parseInt(displacementValue)) % 26) + 97);
        codedMessage += String.fromCharCode(asciiTextMin);
        // condicional para los espacios. Numero 32 corresponde al "espacio" en ascii
      } else if (asciiNumber === 32) {
        codedMessage += " ";
      } else {
        codedMessage += String[i];
      }
      //console.log(codedMessage);
    }
    return codedMessage;
  },

  decode: (displacement, messageInitial) => {
    const displacementValue = displacement;
    const messageValue = messageInitial;
    let decodedMessage = "";

    for (let i = 0; i < messageValue.length; i++) {
      const asciiNumber = messageValue[i].charCodeAt();

      if (asciiNumber >= 65 && asciiNumber <= 90) {
        const asciiTextMay = (((asciiNumber - 65 - parseInt(displacementValue)) % 26) + 65);
        decodedMessage += String.fromCharCode(asciiTextMay);
      } else if (asciiNumber >= 97 && asciiNumber <= 122) {
        const asciiTextMin = (((asciiNumber - 97 - parseInt(displacementValue)) % 26) + 97);
        decodedMessage += String.fromCharCode(asciiTextMin);
      } else if (asciiNumber === 32) {
        decodedMessage += " ";
      } else {
        decodedMessage += String[i];
      }
      //console.log(decodedMessage);
    }
    return decodedMessage;
  }
}
export default cipher;
