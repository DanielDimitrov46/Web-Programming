function calculate(num1, num2, operator) {
    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                console.log("Error: Division by zero is not allowed.");
                return;
            }
            break;
        case "%":
            if (num2 !== 0) {
                result = num1 % num2;
            } else {
                console.log("Error: Division by zero is not allowed.");
                return;
            }
            break;
        case "**":
            result = num1 ** num2;
            break;
        default:
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
calculate(10, 3, "%");  // Output: The result of 10 % 3 is: 1
calculate(2, 3, "**");  // Output: The result of 2 ** 3 is: 8
calculate(10, 0, "/");  // Output: Error: Division by zero is not allowed.
calculate(10, 0, "%");  // Output: Error: Division by zero is not allowed.
calculate(10, 5, "^");  // Output: Error: Invalid operator.
