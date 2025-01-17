function generateGreeting(name, age, gender) {
    let title;

    if (age < 18) {
        title = (gender === "male") ? "момчето" : "момичето";
    } else {
        title = (gender === "male") ? "г-н" : "г-жа";
    }

    console.log(`${title} ${name}, на ${age} години`);
}

// Example usage
generateGreeting("Иван", 20, "male");  // Output: г-н Иван, на 20 години
generateGreeting("Мария", 15, "female");  // Output: момичето Мария, на 15 години
generateGreeting("Даниела", 25, "female");  // Output: г-жа Даниела, на 25 години
generateGreeting("Петър", 10, "male");  // Output: момчето Петър, на 10 години
