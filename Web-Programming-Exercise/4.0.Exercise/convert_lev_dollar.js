const levToDollarConversion = () => {
    let lev = prompt("Enter the amount in BGN:");
    const conversionRate = 0.56; // Example conversion rate
    let dollars = lev * conversionRate;
    console.log(dollars.toFixed(2));
};
levToDollarConversion();
