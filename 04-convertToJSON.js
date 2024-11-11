function convertToJSON(firstName, lastName, hairColor){
    let person = {
        name: firstName,
        lastName,
        hairColor,

    }
    let personToStr = JSON.stringify(person);
    console.log(personToStr)
}
convertToJSON('George', 'Jones', 'Brown')