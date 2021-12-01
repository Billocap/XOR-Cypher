const inquirer = require('inquirer');
const CipherFile = require('../lib/CipherFile');

function decrypt(resolve) {
    return async function(file, key) {
        const {output} = await inquirer.prompt([
            {
                type: "input",
                name: "output",
                message: "Where should the resulting file be saved:"
            }
        ]);

        CipherFile.decrypt(resolve(file), resolve(key), resolve(output));
    }
}

module.exports = decrypt;