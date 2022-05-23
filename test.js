//Vilka datatyper finns det i JS?
let dataTypes = ['strings', 'numbers', 'boolean', 'null', 'BigInt', 'undefined', 'symbol'];

//Gör en array med 5 frukter i.

let frukt = ['apelsin', 'äpple', 'banan', 'päron', 'avokado'];


//Lägg till en frukt i början och en frukt i slutet på arrayen.

frukt.push('persika');
frukt.unshift('mango');

console.log(frukt);

//I ovanstående fruktarray, plocka bort första och sista frukten.

frukt.shift();
frukt.pop();

console.log(frukt);

//I följande array, sätt in två nya frukter på index 2.
let fruits1 = ['apple', 'orange', 'pear', 'kiwi']

fruits1.splice(2, 0, 'banana');
fruits1.splice(2, 0, 'strawberry');
console.log(fruits1);

//Klona följande array och ändra första frukten till pineapple.
let fruits2 = ['apple', 'orange', 'pear', 'kiwi']

let fruits3 = [...fruits2];
fruits3.splice(0, 1, 'pineapple')

console.log(fruits3);

//Sortera följande array i fallande ordning.
let num = [1, 5, 78, 7, 122, 3, 4, 65, 40, 2, 8]

//Med num.sort sorterar jag numren i array:n, men eftersom det är siffror kommer de bli sorterade
//i konstig ordning (1, 122, 2 osv.) Jag skapar då en function:
num.sort(function revSort(a, b) {
    return b - a
});

/* The compare function compares all the values in the array, two values at a time (a, b).
When comparing 40 and 100, the sort() method calls the compare function(40, 100).
The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100. */

console.log(num);

// Lägg ihop följande arrayer.
let a1 = [1, 2, 3];
let b1 = [4, 5, 6];

//Använd .concat istället för .merge (det är siffror)

console.log(a1.concat(b1));



//Mixa följande arrayer där varannan är från array a och varannan från array b.
//Cred: https://www.tutorialspoint.com/merge-two-arrays-with-alternating-values-in-javascript

let a2 = ['My', 'has', 'many', 'tabs'];
let b2 = ['brain', 'too', 'open', '!'];
let grammaticalSentence = [];
let run = 0
let first = 0
let second=0

/*The while loop loops through a block of code as long as a specified condition is true.

while (condition) {
  // code block to be executed
} */

while(run < a2.length + b2.length) {
    if(first > second) {
        grammaticalSentence[run] = b2[second];
        second++;
    } else {
        grammaticalSentence[run] = a2[first]
        first++;
    }
    run++;
};

/* Så länge run är mindre än summan av a2.length (4) och b2.length (4) så kommer runs värde att sparas i grammaticalSentence och bli lika som seconds värde i b2.
Second ökar med +1.
- ANNARS -
grammaticalSentence[run] får a2[first] och first ökar med +1.
Efteråt kommer run öka med +1. */

console.log(grammaticalSentence);

//Merga in array a i array b på index 2.
let a3 = [1, 2, 7, 8, 9, 10];
let b3 = [3, 4, 5, 6];

console.log(b3);
//Vänta på instruktioner

//Gör alla namn i array names till versaler.
let names = ['sixten', 'Eva', 'Ali', 'Kim', 'Greger', 'Alicia'];

//Cred: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
//Cred: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

let upper = names.map(element => {
    return element.toUpperCase();
});

console.log(upper);
