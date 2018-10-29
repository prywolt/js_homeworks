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
