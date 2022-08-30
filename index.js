const returnFirstTwoDrivers= function(drivers) {
    return drivers.slice(0,2)
}

const returnLastTwoDrivers= function(drivers) {
    return drivers.slice(2,4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(newFare) {
    return function (fare) {
        return fare * newFare
    }
}

const fareDoubler = function(createFareMultiplier){
    return createFareMultiplier * 2
}

const fareTripler = function(createFareMultiplier){
    return createFareMultiplier * 3
}

const selectDifferentDrivers = function(drivers, driverNames){
    if (driverNames === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers)
    } else if (driverNames === returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers)
    } 
}