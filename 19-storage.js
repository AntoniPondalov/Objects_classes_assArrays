function solve(arr) {
    let map = new Map();
    for (let elements of arr) {
        let [product, quantity] = elements.split(' ');
        quantity = +quantity;

        if (!map.has(product)) {
            map.set(product, quantity);
        } else {
            let currQuantity = map.get(product);
            let newQuantity = currQuantity += quantity;
            map.set(product, newQuantity);
        }
    }
    for (let [product, quantity] of map) {
        console.log(`${product} -> ${quantity}`);
    }
}
solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])