#!/usr/bin/env node
const {argv, cwd} = require('process');
const path = require('path');
const program = require('commander');

const resolve = file => path.resolve(cwd(), file);

const encrypt = require('./commands/encrypt');
const decrypt = require('./commands/decrypt');

program.version("1.0.0", "-v, --version", "Display the current version.");
program.name('xcy');
program.helpOption('-h, --help', 'Display help for command.');
program.addHelpCommand('help [command]', 'Display help for command');

program
    .command('encrypt <file>')
    .description('Encrypts a file.')
    .action(encrypt(resolve));

program
    .command('decrypt <file> <key>')
    .description('Decrypts a file.')
    .action(decrypt(resolve));

program.parse(argv);