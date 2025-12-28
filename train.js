console.log("train task ishga tushdi");


function countLetter(letter, word) {
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
console.log(result4);