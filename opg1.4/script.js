const input = document.getElementById('cryptedInput');
const shift = document.getElementById('shift');
const result = document.getElementById('result');
const decryptForm = document.getElementById('decryptForm');
const decryptBtn = document.getElementById('decryptBtn');

const alphabet = [ 
    'a', 'b', 'c', 'd','e','f','g', 'h','i', 'j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
];
// Display used alphabet width numbers:
const displayTable = document.getElementById('displayTable');
alphabet.forEach((value, i) =>{
    let letterDiv = document.createElement('div');
    letterDiv.innerHTML = value + " <br> " + i;
    displayTable.append(letterDiv);
    let numberDiv = document.createElement('div');
})

// Objectives:
// Encrypt
// - Map indexes of input letters
// - Shift Indexes with suplied int value
// - Remap shifted indexed letters with alphabet
// - Show result




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