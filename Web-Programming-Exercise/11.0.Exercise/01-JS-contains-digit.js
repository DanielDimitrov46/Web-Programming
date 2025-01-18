function containsDigit(text) {
    const regex = /\d/; // Проверка за цифри
    return regex.test(text);
}

console.log(containsDigit("Hello123")); // true
console.log(containsDigit("NoDigitsHere")); // false
