//String Basics Exercises
// 1. Dichiarazione di variabili
// Crea una variabile chiamata nickname e assegnale un soprannome.
const nickname = 'Spinelloza'
// Stampa il valore di nickname nella console.
console.log(nickname)

// 2. Tipi primitivi
// Crea tre variabili chiamate luckyNumber, phrase e isCodingFun
// e assegna rispettivamente un numero, una stringa e un valore booleano.
let luckyNumber = 92
let phrase = 'aaaooooh nfame'
let isCodingFun = true
// Stampa tutti i valori nella console.
console.log(luckyNumber, phrase, isCodingFun)

// 3. Sostituisci null nelle righe sottostanti utilizzando operazioni con le stringhe
// e le variabili sopra in modo da stampare correttamente 
// in console la stringa con il soprannome completo
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // NON MODIFICARE QUESTA RIGA
const userName = 'Alex'; // NON MODIFICARE QUESTA RIGA
const userNickname = 'Thunder'; // NON MODIFICARE QUESTA RIGA

const completeName = userName + ' ' + userNickname;
console.log(completeName); // Output: "Alex Thunder"

// 4. Imposta questa variabile utilizzando una proprietà
// sulla variabile characters per ottenere la sua lunghezza
const alphabetSize = characters.length;
console.log(alphabetSize); // Output: 26



const region = 'Tokyo'; // NON MODIFICARE QUESTA RIGA
const regionName = 'Region'; // NON MODIFICARE QUESTA RIGA
const fruitBasket = 'mele, pere, ananas, arance'; // NON MODIFICARE QUESTA RIGA
const welcome = 'welcome'; // NON MODIFICARE QUESTA RIGA

// 1. Cerca un carattere in una stringa
// Stampa l'INDICE con cui viene trovato
// il carattere 'o' nella variabile region
const regionIndex = region.indexOf('o');
console.log(regionIndex); // Output: 1

// 2. Sottostringhe 
// Stampa la sottostringa "yo" dalla variabile region
const regionSubstring = region.substring(3,);
console.log(regionSubstring); // Output: "yo"

// 3. Sostituzione
// Sostituisci 'Tokyo' con 'Osaka'
const regionReplaced = region.replace('Tokyo', 'Osaka');
console.log(regionReplaced); // Output: "Osaka"

// 4. Template literal
// Concatena due stringhe usando la sintassi `${var}`
// e rendi regionNameConcat uguale a 'Tokyo Region'
const regionNameConcat = `${region} ${regionName}`;
console.log(regionNameConcat); // Output: "Tokyo Region"

// 5. Tutto in maiscolo
// Trasforma tutto in maiuscolo la stringa della variabile welcome
const upperCaseWelcome = welcome.toUpperCase();
console.log(upperCaseWelcome); // Output: "WELCOME"