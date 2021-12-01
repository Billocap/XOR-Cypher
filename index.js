#!/usr/bin/env node

const {argv, cwd} = require('process');
const path = require('path');
const program = require('commander');
const inquirer = require('inquirer');

const resolve = file => path.resolve(cwd(), file);

const FileCypher = require('./lib/FileCypher');

program.version("1.0.0", "-v, --version", "Display the current version.");
program.name('xcy');
program.helpOption('-h, --help', 'Display help for command.');
program.addHelpCommand('help [command]', 'Display help for command');

program
    .command('encrypt <file>')
    .description('Encrypts a file.')
    .action(async (file) => {
        const {key, output} = await inquirer.prompt([
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

        FileCypher.encrypt(resolve(file), resolve(key), resolve(output));
    });

program
    .command('decrypt <file> <key>')
    .description('Decrypts a file.')
    .action(async (file, key) => {
        const {output} = await inquirer.prompt([
            {
                type: "input",
                name: "output",
                message: "Where should the resulting file be saved:"
            }
        ]);

        FileCypher.decrypt(resolve(file), resolve(key), resolve(output));
    });

program.parse(argv);