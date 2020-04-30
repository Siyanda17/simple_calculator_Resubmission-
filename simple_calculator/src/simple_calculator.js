function add(...args){
    var sum = 0;
    for(var i = 0; args[i] != undefined; i++){
        sum += args[i]
    }
    return sum
}

function multiply(...args){
    product = 1
    for(var i = 0; args[i] != undefined; i++){
        product *= args[i]
    }
    return sum
}
module.exports = {add,multiply}