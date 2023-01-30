const createOneTimePads = (length, noKeys) =>{
    let pads = [];
    for(let i = 0; i < noKeys; i++){
        let pad = [];
        for(let k = 0; k < length; k++){
            let char = "";
            for(let j = 0; j < 8; j++){
                Math.random() > 0.5 ? b = "1" : b = "0";
                char += b;
            }
            pad.push(char);
        }
        pads.push(pad)
    }
    return pads;
}
let keyLength = 25;
let noOfKeys = 10;
let pads = createOneTimePads(keyLength, noOfKeys);