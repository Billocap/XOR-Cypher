const Random = require('./Random');

/**
 * A simple XOR encrypter.
 */
const Cypher = {
    /**
     * Generates a key pair for encryption.
     * @param {number} size The size of the message being encrypted.
     * @param {Keypair} keys A key pair to use as a base.
     * @returns {Keypair} A new key pair.
     */
    generateKeys(size, keys = {}) {
        for (let i = 64; i > 0; i--) {
            // The chunk size is the biggest power of two
            // smaller than the message size.
            const chunkSize = 2 ** i;
    
            if (size & chunkSize) {
                const chunkKey = Random.sequence(chunkSize, keys.chunkKey);
                const metaKey = Random.sequence(Math.ceil(size / chunkSize), keys.metaKey);
    
                return {chunkKey, metaKey};
            }
        }
    },
    /**
     * Performs a XOR Cypher on the message.
     * @param {Uint8Array} message The message to be chypered.
     * @param {Keypair} keys The keys to be used.
     */
    digest(message, keys) {
        // Creates the actual key to be used.
        const key = [];

        for (const chunk of keys.metaKey) {
            for(const n of keys.chunkKey) {
                key.push(n ^ chunk);
            }
        }
        // -----------------------

        // Decrypts the data.
        const cypher = message.map((char, index) => {
            return char ^ key[index];
        });
        // -------------------

        return cypher;
    }
};

module.exports = Cypher;