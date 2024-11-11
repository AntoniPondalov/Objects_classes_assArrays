function solve(arr) {
    let companyEmployees = {};

    for (let command of arr) {
        let [company, employee] = command.split(' -> ');

        if (company in companyEmployees) {
            if(!companyEmployees[company].includes(employee))
            companyEmployees[company].push(employee);
        } else {
            companyEmployees[company] = [employee];
        }
    }

    let entries = Object.entries(companyEmployees).sort((a, b) => a[0].localeCompare(b[0]));
    for (let [company, employee] of entries) {
        console.log(company);

        for (const id of employee) {
            console.log(`-- ${id}`);
        }
    }
}
solve(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345' ])