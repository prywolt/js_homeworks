/****************************************************************************************************
 Część 0:
 Dodaj poprawnie plik 'script.js' do pliku index.html.
 Wyświetl w konsoli: 'Poprawnie dodany skrypt';
 */

// Kod dla części 0 poniżej:


console.log('Poprawnie dodany skrypt');



/****************************************************************************************************
 Część 1 Tablice:
 Input: [11, -10, 50, 5, -8, 9, 20, 21, -4, 11, -5, -12, 100, 20, 14, 8, 19, 44, -21, -53, 17, -21]

 1.1 Policz sumę wszytskich elementów tablicy
 Output: '1.1 Suma elementów w tablicy: 215'

 1.2 Policz sumę wartości bezwględnych w tablicy
 Output: '1.2 Suma wartości bezwględnych z elementów w tablicy: 483'

 1.3 Wyświetl tylko elementy większe lub równe od 20:
 Output: '1.3 Elementy większe lub równe od 20: 50,20,21,100,20,44'

 1.4 Wyświetl sumę elementów tylko ujemnych:
 Output: '1.4 Sume elementów ujemnych: -134'

 1.5* (+0,5pkt) Wyświetl sumę elemnetów na pozycjach parzystych:
 Output: '1.5 Suma elementów parzystych: 193'

 */

// Kod dla części 1 poniżej:

const arr = [11, -10, 50, 5, -8, 9, 20, 21, -4, 11, -5, -12, 100, 20, 14, 8, 19, 44, -21, -53, 17, -21];

// 1.1

const sum = arr.reduce((a, b) => a + b);

console.log(sum);


// 1.2

const sumAbs = arr.map(Math.abs).reduce((a, b) => a + b);

console.log('1.2 Suma wartości bezwględnych z elementów w tablicy:', sumAbs);

// 1.3

const minTwenty = arr.filter((el) => {
    return el >= 20;
});

console.log('1.3 Elementy większe lub równe od 20:', minTwenty);

// 1.4

const onlyMinus = arr.filter((el) => {
    return el < 0}).reduce((a, b) => a + b);

console.log('1.4 Sume elementów ujemnych: -134', onlyMinus);


// 1.5

const oddSum = arr.filter((a, b) => {
    return b % 2 === 0}).reduce((a, b) => a + b);

console.log('1.5 Suma elementów parzystych: 193', oddSum);


/****************************************************************************************************
Część 2 Pętle + funkcje:

 2.1 Napisz funkcję, która przyjmuje 2 argumenty (2 obiekty z kluczami name oraz age)
 i zwraca ten obiekt, która ma większą wartość age. Następnie ze zwróconego obiektu wyświetl jego imię.
 Input: {name: 'Jasio', age: 8} , {name: 'Kazio', age: 11}
 Output: '2.1 Starszy jest: Kazio'

 2.2 Napisz pętle, która iteruje od 1 do 50 i na każdej wielokrotności 3 wyświetl Fizz, na każdej wielokrotności 5 Buzz,
 a na wielokrotności 3 i 5 FizzBuzz;
 Output: '2.2: Fizz Buzz Fizz Fizz Buzz Fizz FizzBuzz Fizz Buzz Fizz Fizz Buzz Fizz FizzBuzz Fizz Buzz Fizz Fizz Buzz Fizz FizzBuzz Fizz Buzz'

 2.3 Napisz funkcję, która przyjmuje 3 parametry (2x number, 1x string jako operator (dostępne +,-,/,*) i zwraca wartość wyniku:
 Input: 1, '+', 2    Output: '2.3.1: 3'
 Input: 20, '-', 3   Output: '2.3.2: 17'
 Input: -1, '*', 8   Output: '2.3.3: -8'
 Input: 4, '/', 2    Output: '2.3.4: 2'
 Input: 5, '!', 5    Output: '2.3.5: Nie znany operator'
 Input: 4, '/', 0    Output: '2.3.6: Nie można dzielić przez zero'

 2.4 Napisz funkcję, która przyjmuje 2 parametry (znak, liczbę), która wyświetli ciąg znaków połączony '-' ale nie więcej niż 10 znaków.
 Input: $, 5         Output: $-$-$-$-$
 Input: $, 17        Output: $-$-$-$-$-$-$-$-$-$

 2.5* (+0,5pkt) Napisz pętle, która zwróci dany ciąg znaków w konsoli (dokładnie w takiej strukturze).
 Output: '2.5:
 *
 * *
 * * *
 * * * *
 * * * * *

 */

// Kod dla części 2 poniżej:

// 2.1

const jasio = {name: 'Jasio', age: 8};
const kazio = {name: 'Kazio', age: 11};

function ageCheck(a, b) {
    if (a > b) {
    return a.name;
     } else if (b > a) {
    return kazio.name;
       }
    };

console.log('2.1 Starszy jest:' + ageCheck(jasio.name, kazio.name));


// 2.2

let multi = '';
for (let i = 1; i <= 50; i++) {
    if (i % 15 === 0) {
        multi += 'FizzBuzz '
    } else if ( i % 5 === 0) {
        multi += 'Buzz '
    } else if ( i % 3 === 0) {
        multi += 'Fizz '
    }
}
console.log('2.2', multi);


// 2.3

const math = (num1, string, num2) => {
    if (string === '+') {
        return num1 + num2;
    } else if (string === '-') {
        return num1 - num2;
    } else if (string === '*') {
        return num1 * num2;
    } else if (string === '/') {
        if (num2 !== 0) {
            return num1 / num2;
        } else {
            return 'Nie można dzilić przez zero';
        }
    } else if (string === '!') {
        return 'Nieznany operator';
    }
}

console.log('2.3.1:', math(1, '+', 2));
console.log('2.3.2:', math(20, '-', 3));
console.log('2.3.3:', math(-1, '*', 8));
console.log('2.3.4:', math(4, '/', 2));
console.log('2.3.5:', math(5, '!', 5));
console.log('2.3.6:', math(4, '/', 0));