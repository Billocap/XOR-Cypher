const fs = require('fs');
const Cypher = require('./Cypher');
const KeyFile = require('./KeyFile');

/**
 * Deals with files to be encrypted.
 */
const CipherFile = {
    /**
     * Encrypts a file.
     * @param {string} file The file to encrypt.
     * @param {Keypair} keyOutput The file where the key pair will be saved.
     * @param {string} output The path to the result folder.
     * @param {Keypair} baseKey The path to key to use as a base.
     */
    encrypt(file, keyOutput, output, baseKey = {}) {
        const data = fs.readFileSync(file);

        const keys = Cypher.generateKeys(data.length, baseKey);

        KeyFile.write(keys, keyOutput);

        const cipher = Cypher.digest(data, keys);

        fs.writeFileSync(output, cipher);
    },
    /**
     * Decrypts a file.
     * @param {string} file The file to decrypt.
     * @param {Keypair} key The file that contains the key pair to be used.
     * @param {string} output The path to the result folder.
     */
    decrypt(file, key, output) {
        const data = fs.readFileSync(file);

        const keys = KeyFile.read(key);

        const decipher = Cypher.digest(data, keys);

        fs.writeFileSync(output, decipher);
    }
};

module.exports = CipherFile;