const { NotImplementedError } = require('../extensions/index.js');

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Error: Invalid input');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let encrypted = '';
    let j = 0;

    for (let i = 0; i < message.length; i++) {
      if (message[i].match(/[A-Z]/)) {
        const messageCharCode = message.charCodeAt(i) - 65;
        const keyCharCode = key.charCodeAt(j % key.length) - 65;

        const encryptedCharCode = (messageCharCode + keyCharCode) % 26 + 65;
        encrypted += String.fromCharCode(encryptedCharCode);

        j++;
      } else {
        encrypted += message[i];
      }
    }

    return this.isDirect ? encrypted : encrypted.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Error: Invalid input');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let decrypted = '';
    let j = 0;

    for (let i = 0; i < message.length; i++) {
      if (message[i].match(/[A-Z]/)) {
        const messageCharCode = message.charCodeAt(i) - 65;
        const keyCharCode = key.charCodeAt(j % key.length) - 65;

        let decryptedCharCode = (messageCharCode - keyCharCode + 26) % 26 + 65;
        decrypted += String.fromCharCode(decryptedCharCode);

        j++;
      } else {
        decrypted += message[i];
      }
    }

    return this.isDirect ? decrypted : decrypted.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};