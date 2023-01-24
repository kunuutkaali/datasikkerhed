const input = document.getElementById('cryptedInput');
const shift = document.getElementById('shift');
const result = document.getElementById('result');
const decryptForm = document.getElementById('decryptForm');
const decryptBtn = document.getElementById('decryptBtn');
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


// Decrypt
// - Map indexes of input letters - Function returns an indexed array
const mapIndexes = (str) => {
    let indexedArr = [];
    for(let letter of str){
        alphabet.forEach((value, i) => {
            if(letter == value) indexedArr.push(i);
        })
    }
    return indexedArr;
}

// - Shift Indexes with suplied int value
const shiftIndexes = (arr, shift) => {
    let shiftedIndexes = [];
    for(let index of arr){
        if(shift > alphabet.length){
            shift = shift%alphabet.length;
        }
        if((index-shift) < 0){
            shiftedIndexes.push(alphabet.length+(index-shift));
        }else{
            shiftedIndexes.push(index-shift);
        }
    }
    return shiftedIndexes;
}

// - Remap shifted indexed letters with alphabet
const mapLetters = (arr) =>{
    let resultArr = [];
    for(let index of arr){
        alphabet.forEach((value, i) =>{
            if(index == i){
                resultArr.push(value);
            }
        })
    }
    return resultArr;
}

// Show result in textArea:
const updateResult = (arr) =>{
    let string = "";
    for(let letter of arr){
        string = string + letter;
    }
    result.innerText = string;
}

// Decrypt:
const decrypt = () =>{
    // IndexLetters
    let indexArr = mapIndexes(input.value.toLowerCase());
    // ShiftIndexes
    let shifted = shiftIndexes(indexArr, parseInt(shift.value));
    // RemapLetters
    let resultArr = mapLetters(shifted);
    // Show result
    updateResult(resultArr);
}

// Eventhandlers:
input.addEventListener('keyup', decrypt);
decryptForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    decrypt();
})
shift.addEventListener('change', decrypt);

// Decrypt eventhandlers:
input.addEventListener('keyup', decrypt);
decryptForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    decrypt();
})
shift.addEventListener('change', decrypt);



// Encrypt
const encryptInput = document.getElementById('encryptInput');
const shiftBy = document.getElementById('shiftBy');
const encrypted = document.getElementById('encrypted');
const encryptForm = document.getElementById('encryptForm');
const encryptBtn = document.getElementById('encryptBtn');

// - Shift Indexes with suplied int value
const unshift = (arr, shift) => {
    let unshiftedIndexes = [];
    for(let index of arr){
        if(shift > alphabet.length){
            shift = shift%alphabet.length;
        }
        if((index+shift) > alphabet.length){
            unshiftedIndexes.push((index+shift)-alphabet.length);
        }else{
            unshiftedIndexes.push(index+shift);
        }
    }
    return unshiftedIndexes;
}

// Show result in textArea:
const updateEcryption = (arr) =>{
    let string = "";
    for(let letter of arr){
        string = string + letter;
    }
    encrypted.innerText = string;
}

// - Show result
const encrypt = () =>{
    // IndexLetters
    let indexArr = mapIndexes(encryptInput.value.toLowerCase());
    // ShiftIndexes
    let unshifted = unshift(indexArr, parseInt(shiftBy.value));
    // RemapLetters
    let resultArr = mapLetters(unshifted);
    // Show result
    updateEcryption(resultArr);
}


// Encrypt eventhandlers:
encryptInput.addEventListener('keyup', encrypt);
encryptForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    encrypt();
})
shiftBy.addEventListener('change', encrypt)