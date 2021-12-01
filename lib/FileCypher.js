const fs = require('fs');
const Cypher = require('./Cypher');

/**
 * Performs a XOR Cypher on files.
 */
const FileCypher = {
    /**
     * Encrypts a file and saves the encrypted version and key.
     * @param {string} file The path to the file to be encrypted.
     * @param {string} keyPath The path to the folder to save the key.
     * @param {string} output The path to the result folder.
     */
    encrypt(file, keyPath, output) {
        const data = fs.readFileSync(file);

        // Gets the key pair.
        const keys = Cypher.generateKeys(data.length);

        const cypher = Cypher.digest(data, keys);

        fs.writeFileSync(output, cypher);

        const chunkSize = keys.chunkKey.length;
        const chunkAmount = keys.metaKey.length;

        const key = new Uint8Array([
            ...keys.chunkKey,
            ...keys.metaKey,
            chunkSize, chunkAmount
        ]);

        fs.writeFileSync(keyPath, key);
    },
    /**
     * Decrypts a file and saves the decrypted version.
     * @param {string} file The path to the file to be encrypted.
     * @param {string} key The path to the file that contains the key.
     * @param {string} output The path to the result folder.
     */
    decrypt(file, key, output) {
        const rawKey = new Uint8Array(fs.readFileSync(key));

        const [chunkSize, chunkAmount] = rawKey.slice(-2);

        const keys = {
            chunkKey: rawKey.slice(0, chunkSize),
            metaKey: rawKey.slice(chunkSize, chunkSize + chunkAmount)
        };

        const data = fs.readFileSync(file);

        const decypher = Cypher.digest(data, keys);

        fs.writeFileSync(output, decypher);
    }
};

module.exports = FileCypher;