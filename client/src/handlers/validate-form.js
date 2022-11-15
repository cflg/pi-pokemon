const validations = pokeData => {
    const error = {}
    let regexp = /^[a-z\s]*$/

    if (!pokeData.name) {
        error.name = 'Name is required'
    }
    if (!regexp.test(pokeData.name)){
        error.name = 'Lower case is required & numbers is not acepted'
    }
    if (!pokeData.health.length) {
        error.health = "Health is required";
    }
    if (!pokeData.attack.length) {
        error.attack = "Attack is required";
    }
    if (!pokeData.defense.length) {
        error.defense = "Defense is required";
    }
    if (pokeData.speed < 1) {
        error.speed = "Speed is required";
    }
    if (pokeData.height < 1) {
        error.height = "Height is required";
    }
    if (pokeData.weight < 1) {
        error.weight = "Weight is required";
    }
    if (!pokeData.image) {
        error.image = "Image is required";
    }
    if (!pokeData.types.length) {
        error.types = "Types is required";
    }
    return error
}

export default validations