function solve(arr) {
    let addressBook = {};
    for (let elements of arr) {
        let [name, address] = elements.split(':');
        addressBook[name] = address;
    }
    let entries = Object.entries(addressBook).sort((a, b) => a[0].localeCompare(b[0]));
    for (let [name, address] of entries) {
        console.log(`${name} -> ${address}`);
    }
}
solve(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])