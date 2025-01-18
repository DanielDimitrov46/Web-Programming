function extractURLs(text) {
    const regex = /(https?:\/\/[^\s]+)/g;
    return text.match(regex) || [];
}

console.log(extractURLs("Посетете https://example.com и http://test.bg за повече информация."));
// ['https://example.com', 'http://test.bg']
