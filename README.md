# XOR Cypher
A CLI tool for perfoming simple encryption and decryption, on system files.

## Disclaimer
This program performs a [XOR Cipher](https://en.m.wikipedia.org/wiki/XOR_cipher) on the file you spefcify and since this type of encryption isn't very secure I don't recommend you use this program for cases that need high level security, use it as way of learning a little more about encryption.

**Also be careful with what files you encrypt and where you save de encryption keys.**

## Intallation
First clone the repo.
```
git clone https://github.com/Billocap/XOR-Cypher.git
```
Then build the program.
```
npm run build
```
You can access this program through the command `xcy`.

## Encryption
To encrypt a file run on the console window.
```
xcy encrypt <file_path>
```
Where `file_path` is the path to the file you want to encrypt, this path can be either relative or absolute.

The first question will be, if you want to use a base key, this usefull when you want two files to follow the same key, just pass the path to the base key or cancel this operation by pressing enter.

After that you will need to specify where the file containing the key will be saved, for example you could use `./key.txt`

Then you will need to specify where the encrypted file will be saved, I used `./enc.txt` in this example.

## Decryption
To decrypt a file run on the console window.
```
xcy decrypt <file_path> <key_path>
```
Where `file_path` is the path to the file you want to decrypt and `key_path` is the path to the file containing the key of that file.

Then you will need to specify where the decrypted file will be saved, I used `./result.txt` in this example.