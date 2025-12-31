/* console.log("train task ishga tushdi"); */

// TASK B

function countDigits(number) {
let count = 0;
for (let i =0; i < number.length; i++) {
    if (number[i] >='0' && number[i] <='9') {
        count++;
    }
   
}
 return count;
}
const result = countDigits("ad2a54y79wet0sfgb9")
console.log(result);

const result1 = countDigits("ad2a44rr554y798yy78867et0sfgb9")
console.log(result1);

const result3 = countDigits("hfghfgh68jhjh77gjh686hdhddh93939nf8f8f9fn33nf9fn")
console.log(result3);
//TASK A
/* function countLetter(letter, word) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            count++;
        }
    }
    return count;
}

const result = countLetter("e", "engineer");
console.log(result);

const result1 = countLetter("a", "vatanparvar");
console.log(result1);

const result2 = countLetter("t", "traktortorist");
console.log(result2);

const result3 = countLetter("o", "traktortorist");
console.log(result3);

const result4 = countLetter("o", "olma");
console.log(result4); */