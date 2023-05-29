// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0,2)
}
const returnLastTwoDrivers = function (drivers){
    return drivers.slice(-2)
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(value){
    return function(value){return value * value}
}

const fareDoubler = function(value){
    return value * 2
}

const fareTripler = function(value){
    return value * 3
}

function selectDifferentDrivers(arrayOfDrivers, func){
    return func(arrayOfDrivers)
}
