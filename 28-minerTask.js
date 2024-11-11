function minerTask(arr) {
    let task = {};

    for (let i = 0; i < arr.length; i += 2) {
        let material = arr[i];
        let qty = Number(arr[i + 1]);
        if (material in task) {
            task[material] += qty;
        } else {
            task[material] = qty;
        }
    }

    let entries = Object.entries(task);
    for (let [material, qty] of entries) {
        console.log(`${material} -> ${qty}`);
    }
}
minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
])