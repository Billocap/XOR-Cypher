/**
 * New random generation functions.
 */
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
     * @param {Uint8Array} base Another sequence to use as starting point.
     */
    sequence(size, base = []) {
        if (base.length >= size) return base.slice(0, size);

        const key = Array.from(base);
        
        do {
            key.push(this.integer(255));
        }
        while (key.length < size);
    
        return new Uint8Array(key);
    }
};

module.exports = Random;