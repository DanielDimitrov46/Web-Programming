function extractPhoneNumbers(text) {
    const regex = /(\(\d{3}\) \d{3}-\d{4})|(\d{3}-\d{3}-\d{4})/g;
    return text.match(regex) || [];
}

console.log(extractPhoneNumbers("Моите номера са (123) 456-7890 и 987-654-3210."));
// ['(123) 456-7890', '987-654-3210']
