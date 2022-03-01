function findMatching(array, str) {
    const result = array.filter(element => element.toLowerCase() === str.toLowerCase())
        return result
}

function fuzzyMatch(array, letter) {
    const match = array.filter(element => element.startsWith(letter))
    return match
}

function matchName(array, str) {
    const nameMatch = array.filter(element =>  element.name === str)
    return nameMatch
}