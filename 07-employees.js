function employees(arr){
    for (let name of arr) {
       let person = {
          name: name,
          nameNum: name.length
       } 
       console.log(`Name: ${person.name} -- Personal Number: ${person.nameNum}`)
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])