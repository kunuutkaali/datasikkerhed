// Viginère De or encrypt function:
const viginereCipher = (str, key, decrypt) =>{
    let counter = 0;
    const result = str.split('').map((letter) =>{
        if(alpha.includes(letter.toLowerCase())){
            const charIndex = alpha.indexOf(letter.toLowerCase());
            const keyIndex = alpha.indexOf(key[counter % key.length]);
            decrypt ? newIndex = (charIndex - keyIndex + alpha.length) % alpha.length : newIndex = (charIndex + keyIndex + 26) % alpha.length;
            letter === letter.toUpperCase() ? letter = alpha[newIndex].toUpperCase() : letter = alpha[newIndex];
            counter++;
        }
        return letter;
    })
    return result.join('');
}
const $ = document.querySelector.bind(document);
const alpha = "abcdefghijklmnopqrstuvwxyz".split('');


// Decrypt
const decryptForm = document.getElementById('decryptForm');
const decryptResult = document.getElementById('decryptResult');

const decrypt = ()=>{    
    const cryptedInput = $('#cryptedInput').value;
    const decryptKey = $('#decryptKey').value.toLowerCase();
    decryptResult.innerText = viginereCipher(cryptedInput, decryptKey, true)
}
decryptForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    decrypt();
});


// Encrypt
const encryptForm = $('#encryptForm');
const encryptedResult = document.getElementById('encryptedResult');

const encrypt = () =>{
    encryptedResult.innerText = viginereCipher($('#encryptInput').value, $('#encryptKey').value.toLowerCase(), 
        false);
}
encryptForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    encrypt();
})