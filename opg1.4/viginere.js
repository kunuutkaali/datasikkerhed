const displayTable = document.createElement('div');
displayTable.setAttribute('id', 'displayTable');
document.body.prepend(displayTable);
const alphabet = [ 
    'a', 'b', 'c', 'd','e','f','g', 'h','i', 'j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
];
// Display used alphabet width numbers:
alphabet.forEach((value, i) =>{
    let letterDiv = document.createElement('div');
    letterDiv.innerHTML = value + " <br> " + i;
    displayTable.append(letterDiv);
    let numberDiv = document.createElement('div');
})


// Decrypt defines
const cryptedInput = document.getElementById('cryptedInput');
const decryptKey = document.getElementById('decryptKey');
const decryptResult = document.getElementById('decryptResult');
const decryptForm = document.getElementById('decryptForm');
const decryptBtn = document.getElementById('decryptBtn');

// MapIndexes
const mapIndexes = (str) => {
    let indexedArr = [];
    for(let letter of str){
        if(letter == " "){
            indexedArr.push(letter);
        }else{
            alphabet.forEach((value, i) => {
                if(letter == value) indexedArr.push(i);
            })
        }
    }
    return indexedArr;
}

// - Shift Indexes with suplied int value
const shiftIndexes = (arr, keySequence) => {
    let shiftedIndexes = [];
    let counter = 0;
    let limit = keySequence.length-1;
    for(let index of arr){
        if(index == " "){
            shiftedIndexes.push(' ');
        }else{
            let shift = keySequence[counter];
            if(counter == limit){
                counter = 0;
            }else{
                counter++;
            }
            if((index-shift) < 0){
                shiftedIndexes.push(alphabet.length+(index-shift));
            }else{
                shiftedIndexes.push(index-shift);
            }
        }
    }
    return shiftedIndexes;
}

// - Remap shifted indexed letters with alphabet
const mapLetters = (arr) =>{
    let resultArr = [];
    for(let index of arr){
        if(index === " "){
            resultArr.push(' ');
        }else{
            alphabet.forEach((value, i) =>{
                if(index == i){
                    resultArr.push(value);
                }
            })
        }
    }
    return resultArr;
}

// Show result in textArea:
const updateResult = (arr) =>{
    let string = "";
    for(let letter of arr){
        string = string + letter;
    }
    decryptResult.innerText = string;
}

// Decrypt:
const decrypt = () =>{ 
    // MapKeySequence
    let keySequence = mapIndexes(decryptKey.value.toLowerCase());

    // IndexLetters
    let indexArr = mapIndexes(cryptedInput.value.toLowerCase());

    // ShiftIndexes
    let shifted = shiftIndexes(indexArr, keySequence);

    // // RemapLetters
    let resultArr = mapLetters(shifted);

    // // Show result
    updateResult(resultArr);
}

// Decrypt Eventhandlers:
cryptedInput.addEventListener('keyup', decrypt)
decryptForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    decrypt();
})
decryptKey.addEventListener('keyup', decrypt)




// Encrypt defines
const encryptForm = document.getElementById('encryptForm');
const encryptInput = document.getElementById('encryptInput');
const encryptKey = document.getElementById('encryptKey');
const encrypted = document.getElementById('encrypted');
const encryptBtn = document.getElementById('encryptBtn');

// - Shift Indexes with suplied int value
const shiftWithKey = (arr, keySequence) => {
    let shiftedIndexes = [];
    let counter = 0;
    let limit = keySequence.length-1;
    for(let index of arr){
        if(index === " "){
            shiftedIndexes.push(' ');
        }else{
            let shift = keySequence[counter];
            if(counter == limit){
                counter = 0;
            }else{
                counter++;
            }
            if((index+shift) > alphabet.length){
                shiftedIndexes.push((index+shift)-alphabet.length);
            }else{
                shiftedIndexes.push(index+shift);
            }
        }
    }
    return shiftedIndexes;
}
// Update encrypted
const showEncrypted = (arr) =>{
    let string = "";
    for(let letter of arr){
        string = string + letter;
    }
    encrypted.innerText = string;
}

// Encrypt
const encrypt = () =>{
    // - Map key index sequence - reuse function above
    let keySequence = mapIndexes(encryptKey.value.toLowerCase())

    // - Map indexes - reuse function above
    let indexArr = mapIndexes(encryptInput.value.toLowerCase())

    // - Shift Indexes with suplied key sequence
    let shiftedIndexes = shiftWithKey(indexArr, keySequence);
    
    // - Remap shifted indexed letters with alphabet - reuse function above
    let resultArr = mapLetters(shiftedIndexes);

    // - Show result
    showEncrypted(resultArr);
}
// Encript eventhandlers:
encryptInput.addEventListener('keyup', encrypt)
encryptKey.addEventListener('keyup', encrypt)
encryptForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    encrypt();
})
