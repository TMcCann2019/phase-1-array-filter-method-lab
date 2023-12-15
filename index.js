// Code your solution here
function findMatching(drivers, query){
    return drivers.filter(driver =>
        driver.toLowerCase() === query.toLowerCase()
    )
}

function fuzzyMatch(drivers, query){
    return drivers.filter(driver =>
        driver.slice(0, 1) === query.slice(0, 1)
    )
}

function matchName(drivers, query){
    return drivers.filter(driver =>
        driver.name === query)
}