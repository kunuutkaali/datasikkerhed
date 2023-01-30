let string = "abcde";
const convertToBinary = (string) =>{
    let bin = "";
    for(let i=0;i<string.length; i++){
        let a = string.codePointAt(i);
        let b = a.toString(2);
        if(b.length<8) b='0'.repeat(8-b.length)+b;
        bin += b;
        bin += " ";
    }
    return bin;
}
let result = convertToBinary(string);
console.log(result);