function solve(str) {
    let occurrences = new Map();
    let elements = str.split(' ');

    for (let element of elements) {
        element = element.toLowerCase();

        if (occurrences.has(element)) {
            let oldOccucurrences = occurrences.get(element);
            occurrences.set(element, oldOccucurrences + 1);
        } else {
            occurrences.set(element, 1);
        }
    }
    let result = [];
    for (const [word, numOccurrences] of occurrences) {
        if(numOccurrences % 2 === 1){
            result.push(word);
        } 
    }
    console.log(result.join(' '));
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')