function calculateSalary(baseSalary, workDays) {
    const grossSalary = baseSalary + (25 * workDays);
    const tax = grossSalary * 0.24;
    const healthInsurance = grossSalary * 0.015;
    const pensionFund = grossSalary * 0.06;
    const netSalary = grossSalary - tax - healthInsurance - pensionFund;
    console.log(netSalary.toFixed(2));
}
calculateSalary(1000, 20); // Example inputs
