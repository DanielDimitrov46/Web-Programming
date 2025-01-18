function containsLowercase(text) {
    const regex = /[a-z]/; // Проверка за малки букви
    return regex.test(text);
}

console.log(containsLowercase("HELLO")); // false
console.log(containsLowercase("JavaScript")); // true
console.log(containsLowercase("123 numbers")); // true
