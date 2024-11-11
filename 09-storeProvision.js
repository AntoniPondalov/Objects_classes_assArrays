function solve(stock, ordered) {
    let productQtys = {};

    for (let i = 0; i < stock.length; i += 2) {
        let product = stock[i];
        let quantity = Number(stock[i + 1]);

        productQtys[product] = quantity;
    }
    for (let i = 0; i < ordered.length; i += 2) {
        let product = ordered[i];
        let quantity = Number(ordered[i + 1]);

        if (product in productQtys) {
            productQtys[product] += quantity;
        } else {
            productQtys[product] = quantity;
        }
    }
    let entries = Object.entries(productQtys)
    for (let [product, quantity] of entries) {
        console.log(`${product} -> ${quantity}`);
    }
}
solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'],

    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30'])