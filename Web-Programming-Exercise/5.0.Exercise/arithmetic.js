function calculate(num1, num2, operator) {
    let result;

    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            console.log("Error: Division by zero is not allowed.");
            return;
        }
    } else {
        console.log("Error: Invalid operator.");
        return;
    }

    console.log(`The result of ${num1} ${operator} ${num2} is: ${result}`);
}

// Example usage
calculate(10, 5, "+");  // Output: The result of 10 + 5 is: 15
calculate(10, 5, "-");  // Output: The result of 10 - 5 is: 5
calculate(10, 5, "*");  // Output: The result of 10 * 5 is: 50
calculate(10, 5, "/");  // Output: The result of 10 / 5 is: 2
calculate(10, 0, "/");  // Output: Error: Division by zero is not allowed.
calculate(10, 5, "^");  // Output: Error: Invalid operator.
