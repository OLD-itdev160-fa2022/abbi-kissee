//Welcome Message
var user = 'Mike';
var salutaion = 'Hello, ';
var greeting = salutaion + user + '! Here are the latest Atom reviews.';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

var price = 20,
    studentDiscount = .10,
    studentPrice = price - (price * studentDiscount),
    priceEl = document.getElementById('price'),
    sutdentPriceEl = document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
sutdentPriceEl.textContent = studentPrice.toFixed(2);