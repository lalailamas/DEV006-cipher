//aca se implementa el objeto cipher
//cipher.encode(offset, string)
//cipher.decode (offset, string)

const cipher = {
  encode: (displacement, messageInitial) => {
    const displacementValue = displacement;
    const messageValue= messageInitial;
    let codedMessage= "";


    //bucle
    for (let i= 0; i < messageValue.length; i++) {
      const asciiNumber = messageValue[i].charCodeAt(); 
console.log(asciiNumber);
      //condicional para numeros entre 65 y 90 (letras en mayuscula)
      if (asciiNumber >= 65 && asciiNumber <=90) {
       const asciiTextMay= (((asciiNumber - 65 + parseInt(displacementValue))%26)+65);
       codedMessage += String.fromCharCode(asciiTextMay);
      } 
      //condicional para numeros entre 97 y 122 (letras en minúscula)
      else {(asciiNumber >= 97 && asciiNumber <=122) 
        const asciiTextMin= (((asciiNumber - 97 + parseInt (displacementValue))%26)+97);
        codedMessage += String.fromCharCode (asciiTextMin);
      }
console.log(codedMessage);


     }
     return codedMessage; 
 }

}

  export default cipher;
