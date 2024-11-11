function piccolo(arr){
    let parking = new Set();

    for (const command of arr) {
        let [direction, carNumber] = command.split(', ');

        if(direction === 'IN') {
            parking.add(carNumber);
        } else {
            parking.delete(carNumber);
        }
    }
    let carsLeft = Array.from(parking).sort((a, b) => a.localeCompare(b));
    console.log(carsLeft.join('\n'));

    if (carsLeft.length === 0) {
        console.log("Parking Lot is Empty");
        
    }
}
piccolo(['IN, CA2844AA',

    'IN, CA1234TA',
    
    'OUT, CA2844AA',
    
    'OUT, CA1234TA'])