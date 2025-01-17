const multiplyValues = (multiplier, ...values) => {
    const results = values.map(value => value * multiplier);
    console.log(results);
};

multiplyValues(7, 2, 4, 9, 1, 6); // Извежда [14, 28, 63, 7, 42]
