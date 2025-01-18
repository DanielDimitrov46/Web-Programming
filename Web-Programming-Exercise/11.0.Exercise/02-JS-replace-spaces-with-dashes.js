function replaceSpacesWithDashes(text) {
    return text.replace(/ /g, "-");
}

console.log(replaceSpacesWithDashes("Замени всички интервали")); // "Замени-всички-интервали"
console.log(replaceSpacesWithDashes("Hello World!")); // "Hello-World!"
