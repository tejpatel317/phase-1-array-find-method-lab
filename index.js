function superbowlWin(record) {
    const x = record.find(callbackFunction)
    return !!x ? x.year : undefined;
}

function callbackFunction(element, index, array) {
    return (element.result === "W")
}