function isStrongPassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
}

console.log(isStrongPassword("StrongP@ss1")); // true
console.log(isStrongPassword("weakpass")); // false
