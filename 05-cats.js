function solve(arr){
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        let catData = arr[i].split(` `);
        let catName = catData[0];
        let catAge = +catData[1];
        let cat = new Cat(catName, catAge);
        cat.meow();
    }
}
solve(['Mellow 2', 'Tom 5'])