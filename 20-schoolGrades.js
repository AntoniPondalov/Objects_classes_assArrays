function solve(arr) {
    let studentBook = new Map();
    for (let elements of arr) {
        let [name, ...grades] = elements.split(' ');

        if (!studentBook.has(name)) {
            studentBook.set(name, []);
        }
        for (let grade of grades) {
            studentBook.get(name).push(+grade);
        }
    }
    let sorted = Array.from(studentBook.entries()).sort((a, b) => a[0].localeCompare(b[0]));
    for (let [name, grades] of sorted) {
        let gradeSum = 0;
        for (const grade of grades) {
            gradeSum += grade;
        }
        let avgGrade = gradeSum / grades.length;
        console.log(`${name}: ${avgGrade.toFixed(2)}`);
    }
}
solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])