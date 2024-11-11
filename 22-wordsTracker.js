function solve(arr) {
    let wordsToFind = arr.shift().split(' ');
    let wordOccurrences = new Map();
    for (let word of wordsToFind) {
        wordOccurrences.set(word, 0)
    }

    for (let word of arr) {
        if (wordOccurrences.has(word)) {
            let value = wordOccurrences.get(word);
            let newValue = value += 1;
            wordOccurrences.set(word, newValue);
        } 
    }
    let sorted = Array.from(wordOccurrences).sort((a, b) => b[1] - a[1]);
    for (let [word, occurrences] of sorted) {
        console.log(`${word} - ${occurrences}`);
    }
}
solve([
    'this sentence',

    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
])