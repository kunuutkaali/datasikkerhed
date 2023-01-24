const input = document.getElementById('cryptedInput');
const shift = document.getElementById('shift');
const result = document.getElementById('result');
const decryptForm = document.getElementById('decryptForm');
const alphabet = [
    'a', 'b', 'c', 'd','e','f','g', 'h','i', 'j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','æ','ø','å'
];
const toLetters = (shifted) =>{
    let result = [];
    for(let i = 0; i < shifted; i++){
        for(let j = 0; j < aplhabet.length; j++){
            if(shifted[i] == j){
                result.push(aplhabet[j]);
            }
        }
    }
}
const indexLetters = (str) => {
    return indexedArr;
}
const decript = (indexed, shift) =>{
    let newIndexed = [];
    for(index of indexed){
        let newIndex = index-shift;
        if(newIndex < 0){
            if(shift > alphabet.length){
                let newShift = shift%alphabet.length;
                newIndex = alphabet.length-newShift;
            }else{
                newIndex = alphabet.length+newIndex;
            }
        }else{
            console.log(newIndex);
        }
        console.log(newIndex);
    }
    
    // let result = "";
    // let shifted = [];
    // for(let i = 0; i < indexed.length; i++){
    //     if(indexed[i]-shift < 0){
    //         shifted.push(aplhabet.length % shift);
    //     }else{
    //         shifted.push(indexed[i]-shift)
    //     }
    // }
    // console.log(shifted);
    // toLetters(shifted)
}
input.addEventListener('keyup', () =>{
    let small = input.value.toLowerCase();
    let inputArr = small.split(``);
    let indexed = [];
    inputArr.forEach((value)=>{
        for(let i = 0; i < alphabet.length; i ++){
            if(value == alphabet[i]){
                indexed.push(i);
            }
        }
    });
    decript(indexed, parseInt(shift.value))
})
shift.addEventListener('change', () =>{
    console.log('shift changed');
    console.log(parseInt(shift.value));
})
decryptForm.addEventListener('submit', (e)=>{
    e.preventDefault();
})