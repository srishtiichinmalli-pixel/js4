// Part 1: Functions and Parameters (5 Questions)

function welcome() {
    console.log("Welcome to JavaScript");
}
welcome();

function studentDetails(name, age, cgpa) {
    console.log(name, age, cgpa);
}
studentDetails("Purvi", 21, 8.5);
studentDetails("Pachu", 22, 9);

function calculateFee(fee) {
    return fee;
}
let fee = calculateFee(200000);
console.log(fee); // 200000

function discount(percent) {
    let finalFee = 200000 - (200000 * percent / 100);
    console.log(finalFee);
}
discount(10); // 180000

function studentForm(name, age, disability = "no") {
    console.log(name, age, disability);
}
studentForm("Purvi", 21, "no");
studentForm("Pachu", 22, "yes");
studentForm("Srishti", 20); // Srishti 20 no

// Part 2: Function Types and Scope (5 Questions)

function displayMessage(message) {
    console.log(message);
}
displayMessage("Hello JavaScript");

let printName = function(name) {
    console.log(name);
};
printName("Purvi");

let printNumber = (num) => console.log(num);
printNumber(100);

function checkScope() {
    var a = 10;
    if (true) {
        var b = 20;
        let c = 30;
        const d = 40;
        console.log(a, b, c, d); // 10 20 30 40
    }
    console.log(a, b); // 10 20
    // c and d cannot be accessed outside the block
}
checkScope();

console.log(value); // undefined
var value = 10;

// Part 3: Callback and Higher-Order Functions (6 Questions)

function first(callback) {
    console.log("First function");
    callback();
}
function second() {
    console.log("Second function");
}
first(second);

function add(callback, a, b) {
    console.log(a + b);
    callback(a, b);
}
function showNumbers(a, b) {
    console.log(a, b);
}
add(showNumbers, 10, 5); // 15, then 10 5

let sub = (num1, num2) => console.log(num1 - num2);
add(sub, 10, 5); // 15, then 5

function multiply(callback, a, b) {
    console.log(a * b);
    callback();
}
multiply(() => console.log("Multiplication completed"), 5, 4); // 20

function divide(num1, num2) {
    console.log(num1 / num2);
}
function calculate(callback) {
    callback(20, 5);
}
calculate(divide); // 4

function student(callback) {
    callback("Purvi");
}
student((name) => console.log(name)); // Deepak

// Part 4: Generator Functions (5 Questions)

function* cashback() {
    yield "10% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}
let offer = cashback();
console.log(offer.next().value); // 10% cashback
console.log(offer.next().value); // 30% cashback
console.log(offer.next().value); // Better luck next time

function* discounts() {
    yield "5% discount";
    yield "10% discount";
    yield "15% discount";
    yield "20% discount";
    yield "25% discount";
}
for (let discount of discounts()) {
    console.log(discount);
}

function* students() {
    yield "Purvi";
    yield "Pachu";
    yield "Srishti";
}
for (let name of students()) {
    console.log(name);
}

function* numbers() {
    yield 10;
    yield 20;
    yield 30;
    yield 40;
}
let gen = numbers();
console.log(gen.next()); // {value: 10, done: false}
console.log(gen.next()); // {value: 20, done: false}
console.log(gen.next()); // {value: 30, done: false}
console.log(gen.next()); // {value: 40, done: false}
console.log(gen.next()); // {value: undefined, done: true}

// Part 5: Currying and Uncurrying (5 Questions)

function add(a, b, c) {
    console.log(a + b + c);
}
add(5, 10, 15); // 30

function curriedAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}
console.log(curriedAdd(5)(10)(15)); // 30

console.log(curriedAdd(5)(10)(15)); // 30

function totalPrice(price) {
    return function(discount) {
        return function(quantity) {
            return (price - price * discount / 100) * quantity;
        };
    };
}
console.log(totalPrice(1000)(10)(3)); // 2700

function normalAdd(a, b, c) {
    return a + b + c;
}
function curryAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}
console.log(normalAdd(5, 10, 15)); // 30
console.log(curryAdd(5)(10)(15)); // 30

// Part 6: IIFE, Return, and Mixed Practice (4 Questions)

(function(product, discount) {
    console.log(`${product} is available at ${discount}% discount!`);
})("Laptop", 10); // Laptop is available at 10% discount!

function getNumber() {
    return 100;
}
let number = getNumber();
console.log(number); // 100

function getMarks(marks) {
    return marks;
}
let studentMarks = getMarks(95);
console.log(studentMarks); // 95

function calculateStudentFee(fee = 200000, callback) {
    let discount = callback(fee);
    return fee - discount;
}
function calculateDiscount(fee) {
    return fee * 10 / 100;
}
let finalFee = calculateStudentFee(200000, calculateDiscount);
console.log(finalFee); // 180000