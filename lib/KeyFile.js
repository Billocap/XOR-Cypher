const fs = require('fs');

/**
 * Deals with files that contains keys.
 */
const KeyFile = {
    /**
     * Writes a key pair to a file.
     * @param {Keypair} keys The key pair to be saved.
     * @param {string} file The file to save the keys.
     */
    write(keys, file) {
        const chunkSize = keys.chunkKey.length;
        const chunkAmount = keys.metaKey.length;

        const key = new Uint8Array([
            ...keys.chunkKey,
            ...keys.metaKey,
            chunkSize, chunkAmount
        ]);

        fs.writeFileSync(file, key);
    },
    /**
     * Reads a key pair from a file.
     * @param {string} file The file to read the keys from.
     * @returns {Keypair} The key pair.
     */
    read(file) {
        const rawKey = new Uint8Array(fs.readFileSync(file));

        const [chunkSize, chunkAmount] = rawKey.slice(-2);

        const keys = {
            chunkKey: rawKey.slice(0, chunkSize),
            metaKey: rawKey.slice(chunkSize, chunkSize + chunkAmount)
        };

        return keys;
    }
};

module.exports = KeyFile;