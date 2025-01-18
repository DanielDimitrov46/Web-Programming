function parseEmployeeData(data) {
    const regex = /^Name: ([A-Z][a-zA-Z]*)\nPosition: ([a-zA-Z0-9 -]+)\nSalary: ([1-9][0-9]*)$/gm;
    let match;
    const result = [];

    while ((match = regex.exec(data)) !== null) {
        const [, name, position, salary] = match;
        result.push(`${name} - ${salary} - ${position}`);
    }

    return result;
}

const employeeData = `
Name: Jonathan
Position: Manager
Salary: 2000

Name: Peter
Position: Engineer
Salary: 1500

Name: Jeff
Position: Staff
Salary: 1500
`;

console.log(parseEmployeeData(employeeData));
// ['Jonathan - 2000 - Manager', 'Peter - 1500 - Engineer', 'Jeff - 1500 - Staff']
