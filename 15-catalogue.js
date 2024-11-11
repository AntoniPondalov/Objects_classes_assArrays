function catalogue(arr) {
    let products = [];

    for (let productInfo of arr) {
        let [productName, productPrice] = productInfo.split(' : ');
        productPrice = +productPrice;

        let productObj = {
            name: productName,
            price: productPrice
        };
        products.push(productObj);
    }

    products.sort((a, b) => a.name.localeCompare(b.name));

    let initials = [];

    for (let productObj of products) {
        let firstLetter = productObj.name[0];
        if (!initials.includes(firstLetter)) {
            console.log(firstLetter);
            initials.push(firstLetter)
        }

        console.log(`  ${productObj.name}: ${productObj.price}`);
    }
}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ])