// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    if (someValue >= 42) {
        return someValue - 42
    } else if (someValue < 42) {
        return -(someValue - 42)
    }
}

// let distanceFromHqInBlocks = () => {
// }

function distanceFromHqInFeet(someValue) {
    let blocks = distanceFromHqInBlocks(someValue);
    return blocks * 264
    
}

function distanceTravelledInFeet (initial, final) {
    let deltaX = Math.abs(final - initial) * 264
        return deltaX
    // if (final >= initial) {
    //     return (final - initial) * 264
    // } else if (final < initial) {
    //     return -(final - initial) * 264
    // }
}

function calculatesFarePrice (start, destination) {
    let deltaX = Math.abs((destination - start) * 264)
    if (deltaX < 400) {
        return 0
    } else if (deltaX >= 400 && deltaX < 2000) {
        let finalFoot = (deltaX - 400)
        return (finalFoot * .02)
    } else if (deltaX >= 2000 && deltaX < 2500) {
        let flatFee = 25
        return flatFee
    } else if (deltaX >= 2500) {
        return 'cannot travel that far'
    }

}