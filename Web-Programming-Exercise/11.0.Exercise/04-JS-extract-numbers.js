function extractNumbers(text) {
    const regex = /\d+/g; // Намира едноцифрени и многозначни числа
    return text.match(regex) || [];
}

console.log(extractNumbers("Текст с числа 123 и 456.")); // ['123', '456']
console.log(extractNumbers("Няма числа тук!")); // []
console.log(extractNumbers("Числа: 7, 89, 101.")); // ['7', '89', '101']
