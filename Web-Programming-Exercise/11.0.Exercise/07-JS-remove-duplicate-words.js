function removeDuplicateWords(text) {
    return text.replace(/\b(\w+)\b(?: \1)+/g, "$1");
}

console.log(removeDuplicateWords("This is is a sample text text.")); // "This is a sample text."
console.log(removeDuplicateWords("I'm learning programming programming.")); // "I'm learning programming."
