function phoneBook(arr) {
    let phones = {}

    for (let elements of arr) {
        let [name, number] = elements.split(' ');
        phones[name] = number;
    }
    let entries = Object.entries(phones)
    for (let [name, number] of entries) {
        console.log(`${name} -> ${number}`);
    }
}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'])