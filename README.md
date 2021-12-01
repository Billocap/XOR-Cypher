# XOR Cypher
A CLI tool for performing simple encryption and decryption on files.

## Important
This program performs a [XOR Cipher](https://en.m.wikipedia.org/wiki/XOR_cipher) on the file you specify and since this type of encryption isn't very secure, I don't recommend the use of this program for cases that need high level security, use it only for learning purposes.

**Also be careful with what files you encrypt and where you save de encryption keys.**

## Installation
First clone this repository.
```
git clone https://github.com/Billocap/XOR-Cypher.git
```
Then build the program.
```
npm run build
```
You can access this program through the command `xcy`.

## Encryption
Usage: `xcy encrypt <file_path>`

Where `file_path` is the path to the file you want to encrypt, this path can be either relative or absolute.

The first question will be, if you want to use a base key, this useful when you want two files to follow the same key, just pass the path to the base key or cancel this operation by pressing enter.

After that you will need to specify where the file containing the key will be saved, for example you could use `./key.txt`

Then you will need to specify where the encrypted file will be saved, I used `./enc.txt` in this example.

## Decryption
Usage: `xcy decrypt <file_path> <key_path>`

Where `file_path` is the path to the file you want to decrypt and `key_path` is the path to the file containing the key of that file.

Then you will need to specify where the decrypted file will be saved, I used `./result.txt` in this example.