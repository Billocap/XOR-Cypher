const inquirer = require('inquirer');

const CipherFile = require('../lib/CipherFile');
const KeyFile = require('../lib/KeyFile');

function encrypt(resolve) {
    return async function(file) {
        const {key, output, base} = await inquirer.prompt([
            {
                type: "input",
                name: "base",
                message: "The key to be used as a base (optional):"
            },
            {
                type: "input",
                name: "key",
                message: "Where should the key be saved:"
            },
            {
                type: "input",
                name: "output",
                message: "Where should the resulting file be saved:"
            }
        ]);

        const baseKey = base == "" ? undefined : KeyFile.read(base);

        CipherFile.encrypt(resolve(file), resolve(key), resolve(output), baseKey);
    }
}

module.exports = encrypt;