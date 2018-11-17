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

// 2.4

const dolar = (sign, number) => {
    if (number >= 10) {
        number = 10
    }
    let output = '';
    for (let i = 0; i < number - 1; i++) {
        output += sign + '-'
    }
    output += sign;
    return output;

}

console.log(dolar('$', 5));
console.log(dolar('$', 17));


// 2.5

let stars = '';
for (i = 0; i < 5; i++) {
    stars += '* ';
    console.log(stars);
}

/****************************************************************************************************
 Część 3 Obiekty:

 3.1 Napisz obiekt 'pacient' z kluczami: name, surname, status oraz changeStatus. Pierwsze trzy mają przyjmować zmienną
 typu string a ostatnia ma być metodą (funkcją), która zmienia status danego pacjenta.
 Input: pacient.status = 'chory' pacient.changeStatus
 Output: '3.1 pacient.status: zdrowy'
 Input: pacient.status = 'zdrowy' pacient.changeStatus
 Output: '3.1 pacient.status: chory'

 3.2 Napisz pętle, która stworzy tablicę obiektów z kluczami name oraz price. Wartość name powinna być
 taka sama jak wartość tablicy natomiast price ma wstawiać losową liczbę (maksymalnie 3 cyfrowa).
 Input: ['IPhone 4S', 'Samsung S5', 'Huawei 5', 'LG 7']
 Output: '3.2: [
 {name: 'IPhone 4S', price: losowa liczba <= 999},
 {name: 'Samsung S5', price: losowa liczba <= 999},
 {name: 'Huawei 5', price: losowa liczba <= 999},
 {name: 'LG 7', price: losowa liczba <= 999}
 ]'

 3.3 Napisz pętle wyświetlającą nazwę pizzy i jej składniki w nawiasie oraz po myślniku cenę.
 Input: [
 {name: 'Margarita', price: 15, ingredients: ['ser', 'sos', 'oregano']},
 {name: 'Roma', price: 18, ingredients: ['ser', 'sos', 'szynka', 'pieczarki']},
 {name: 'Salami', price: 18, ingredients: ['ser', 'sos', 'salami']}
 ]
 Output: '3.3:
 Margarita (ser, sos, oregano) - 15
 Roma (ser, sos, szynka, pieczarki) - 18
 Salami (ser, sos, salami) - 18'

 3.4 Wyświetl wartość w konsoli z obiektu labyrinth:
 a) 'Garfield'
 b) 'elephant'
 c) 'flying'
 Input: labirynth = {
        animals: [
            { name: 'Pluto', species: 'dog' },
            { name: 'Garfield', species: 'cat' },
            { name: 'Simba', species: 'lion' },
            { name: 'Maniek', species: 'elephant' }
        ],
        nonAnimals: [
            { name: 'R2D2', species: 'robot', skills: ['fixing', 'flying'] },
            { name: 'C3PO', species: 'robot', skills: ['talking'] }
        ],
        showAnimals: function() { console.log(this.animals) },
        showNonAnimals: function() { console.log(this.nonAnimals) }
    }
 Output: '3.4: a) Garfield b) elephant c) flying'

 3.5* (+0,5pkt) Utwórz obiekt o nazwie SoftwareUsers z kluczami users i addUser. W users ma być tablicą użytkowników (obiektów z kluczami
 name, surname, id) - pusta na początku. W addUser ma być funkcją przyjmująca dwa argumenty name i surname,
 która dodaje nowego użytkownika do tablicy w users z *unikatowym* id.
 Input: SoftwareUsers.add('Jan', 'Kowalski') SoftwareUsers.add('Janina', 'Kowalska')
 Output: '3.5:
 [{ name: 'Jan', surname: 'Kowalski', id: 1},
 { name: 'Janina', surname: 'Kowalska', id: 2}]

 */

// Kod dla części 3 poniżej:

// 3.1

const pacient = {
    name: '',
    surname: '',
    status: '',
    changeStatus: function () {
        if (this.status === 'zdrowy') {
            this.status = 'chory'
        } else if (this.status === 'chory') {
            this.status = 'zdrowy'
        }
    }
};

pacient.status = 'chory';
pacient.changeStatus();
console.log('3.1 pacient.status:', pacient.status);
pacient.status = 'zdrowy';
pacient.changeStatus();
console.log('3.1 pacient.status:', pacient.status);


// 3.2

const phone = ['IPhone 4S', 'Samsung S5', 'Huawei 5', 'LG 7'];
let phonePrices = [];

for (let i = 0; i < phone.length; i++) {
    phonePrices[i] = {
        name: phone[i],
        price: Math.floor(Math.random() * 999)
    }
};

console.log('3.2: ', phonePrices);

// 3.3

const pizza = [
    {name: 'Margarita', price: 15, ingidients: ['ser', 'sos', 'oregano']},
    {name: 'Roma', price: 18, ingidients:['ser', 'sos', 'szynka', 'pieczarki']},
    {name: 'Salami', price: 18, ingredients: ['ser', 'sos', 'salami']}
];

console.log('3.3: '),
pizza.forEach((el) => {
    console.log(el.name + ' (' + el.ingidients + ') - ' + el.price)
});

// 3.4

const labirynth = {
    animals: [
        { name: 'Pluto', species: 'dog' },
        { name: 'Garfield', species: 'cat' },
        { name: 'Simba', species: 'lion' },
        { name: 'Maniek', species: 'elephant' }
    ],
    nonAnimals: [
        { name: 'R2D2', species: 'robot', skills: ['fixing', 'flying'] },
        { name: 'C3PO', species: 'robot', skills: ['talking'] }
    ],
    showAnimals: function() { console.log(this.animals) },
    showNonAnimals: function() { console.log(this.nonAnimals) }
};
console.log('3.4: ' + 'a) ' + labirynth.animals[1].name + ' b) ' + labirynth.animals[3].species + ' c) ' + labirynth.nonAnimals[0].skills[1]);


/***********************************************

Część 4 String:

 4.1 Napisz funkcję, która zwraca stringa z dużą pierwszą literę.
 Input: uppercaseFirstLetter('kamil') Output: '4.1.1: Kamil'
 Input: uppercaseFirstLetter(12) Output: '4.1.2: to nie jest string'

 4.2 Wyczyść podane stringi z znaków '$' (użyj pętli, zwróć tablicę).
 Input: ['K$$ami$$l', '$$Jan$ek', 'Kr$$z$ych$u', 'M$$ich$$ał$']
 Output: '4.2: ['Kamil', 'Janek', 'Krzychu', Michał']'

 4.3 Rozdziel podane stringi na dwa odrębne (zwróć tablicę):
 Input: ['Jan Kowalski', 'Janina Kowalska', 'Kamil Stoch']
 Output: '4.3: ['Jan', 'Kowalski', 'Janina', 'Kowalska', 'Kamil', 'Stoch']'

 4.4 Dodaj dodatkowy klucz do obiektu 'fullName', który będzie zawierał połączenie dwóch stringów.
 Input: [{name: 'Jan', surname: 'Kowalski'}, {name: 'Janina', surname: 'Kowalska'}]
 Output: '4.4: [{name: 'Jan', surname: 'Kowalski', fullName: 'Jan Kowalski'},
 {name: 'Janina', surname: 'Kowalska', fullName: 'Janina Kowalska'}]'

 4.5* (+0,5pkt) Stwórz metodą createInitials, która przyjmuje obiekt z dwoma kluczami name i surname
 oraz zwraca inicjały:
 Input: createInitials({name: 'Jan', surname: 'Kowalski'})   Output: '4.5.1: JK'
 Input: createInitials({name: 'Jan', surname: null})         Output: '4.5.2: J'
 Input: createInitials({name: null, surname: 'Kowalski'})    Output: '4.5.3: K'
 Input: createInitials({name: null, surname: null})          Output: '4.5.4: XX'

 */

// Kod dla części 4 poniżej:

// 4.1

const uppercaseFirstLetter = (string) => {
    return (typeof string === 'string') ? string[0].toUpperCase() + string.slice(1) : 'to nie jest string'

};

console.log('4.1.1:', uppercaseFirstLetter('kamil'));
console.log('4.1.2:', uppercaseFirstLetter(12));


// 4.2

const names = ['K$$ami$$l', '$$Jan$ek', 'Kr$$z$ych$u', 'M$$ich$$ał$'];
const cleanNames = names.map((el) => {
    return el.replace(/\$/g, '')
});
console.log('4.2:', cleanNames);

// 4.3

const fullNames = ['Jan Kowalski', 'Janina Kowalska', 'Kamil Stoch'];
const separateNames = fullNames.join(' ').split(' ');
console.log('4.3:', separateNames);

// 4.4

let kowalscy = [{name: 'Jan', surname: 'Kowalski'}, {name: 'Janina', surname: 'Kowalska'}];

for (let i = 0; i < kowalscy.length; i++) {
    kowalscy[i].fullName = kowalscy[i].name + ' ' + kowalscy[i].surname;
}

console.log('4.4: ')