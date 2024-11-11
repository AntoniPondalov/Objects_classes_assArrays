function inventory(arr){
    let heroes = [];

    for (let heroInfo of arr) {
        let [heroName, heroLevel, heroItems] = heroInfo.split(' / ');
        heroLevel = +heroLevel;

        let heroObj = {
            Hero: heroName,
            level: heroLevel,
            items: heroItems
        }; 
        heroes.push(heroObj);
    }
    heroes.sort((a, b) => a.level - b.level);
    
    for (let heroObj of heroes) {
        console.log(`Hero: ${heroObj.Hero}`);
        console.log(`level => ${heroObj.level}`);
        console.log(`items => ${heroObj.items}`);
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])