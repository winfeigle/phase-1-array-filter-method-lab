const findMatching = (arr, query) => {
    return arr.filter(element => element.toLowerCase() === query.toLowerCase());
}

const fuzzyMatch = (arr, query) => {
    return arr.filter(element => element.slice(0, query.length).toLowerCase() === query.toLowerCase());
}

const matchName = (arr, query) => arr.filter(driver => driver.name === query);