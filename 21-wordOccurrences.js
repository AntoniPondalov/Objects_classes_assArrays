function solve(arr) {
    let wordOccurrences = new Map();
    for (let elements of arr) {
        let words = elements.split(', ');
        for (const word of words) {
            if(wordOccurrences.has(word)) {
                let oldOccucurrences = wordOccurrences.get(word);
                wordOccurrences.set(word, oldOccucurrences + 1)
            } else {
                wordOccurrences.set(word, 1);
            }
        }
    }
    let sorted = Array.from(wordOccurrences).sort((a, b) => b[1] - a[1]);
    for (let [word, occurrences] of sorted) {
        console.log(`${word} -> ${occurrences} times`);
    }

}
solve(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence", "And",
    "finally", "the", "third", "sentence"])