const Random = {
    /**
     * Creates a random integer between 0 and `limit`.
     * @param {number} limit The maximum value.
     */
    integer(limit) {
        const {floor, random} = Math;

        return floor(random() * limit);
    },
    /**
     * Returns a random sequence of integers between 0 and 255.
     * @param {number} size The size of the sequence.
     */
    sequence(size) {
        const key = [];
    
        do {
            key.push(this.integer(255));
        }
        while (key.length < size);
    
        return new Uint8Array(key);
    }
};

module.exports = Random;