/* console.log("train task ishga tushdi"); */

// TASK D

function sozAjratish(word1, word2) {
const ajratish1 = [...word1].sort().join('');
const ajratish2 = [...word2].sort().join('');

return ajratish1 === ajratish2;
};

const result = sozAjratish("olmaxon", "xonmaol");
console.log("natija:", result)

const result1 = sozAjratish("mitgroup", "groupmit");
console.log("natija:", result1)

const result2 = sozAjratish("bolalar", "lalalala");
console.log("natija:", result2)




/* console.log(sozAjratish("olmaxon", "xonmaol")); */


// TASK C

/* class Shop {
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }

  // Hozirgi vaqtni HH:mm formatida olish uchun yordamchi funksiya
  getTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  // 1. Qoldiq metodi
  qoldiq() {
    const time = this.getTime();
    console.log(
      `Hozir ${time}'da ${this.non}'ta non, ${this.lagmon}'ta lag'mon va ${this.cola}'ta cola mavjud!`
    );
  }

  // 2. Sotish metodi
  sotish(mahsulot, miqdor) {
    if (this[mahsulot] !== undefined) {
      if (this[mahsulot] >= miqdor) {
        this[mahsulot] -= miqdor;
      } else {
        console.log(`Kechirasiz, omborda yetarli ${mahsulot} yo'q.`);
      }
    } else {
      console.log("Bunday mahsulot do'konimizda mavjud emas.");
    }
  }

  // 3. Qabul metodi
  qabul(mahsulot, miqdor) {
    if (this[mahsulot] !== undefined) {
      this[mahsulot] += miqdor;
    } else {
      console.log("Biz faqat non, lagmon va cola qabul qilamiz.");
    }
  }
}

// --- Tekshirish ---
const shop = new Shop(4, 5, 2);

shop.qoldiq(); // Dastlabki holat

shop.sotish("non", 3); 
shop.qabul("cola", 4); 

shop.qoldiq(); // O'zgargan holat

shop.sotish("non", 6);
shop.qabul("cola", 8);
shop.qabul("fanta", 4);

shop.qoldiq();

shop.sotish("non", 6);
shop.qabul("cola", 8);
shop.qabul("non", 8);
shop.qabul("fanta", 4);

shop.qoldiq();

shop.sotish("non", 6);
shop.sotish("cola", 8);
shop.qabul("non", 8);
shop.qabul("fanta", 4);

shop.qoldiq();
 */


// TASK B

/* function countDigits(number) {
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
console.log(result3); */


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