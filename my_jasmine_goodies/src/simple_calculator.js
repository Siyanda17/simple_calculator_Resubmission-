function add(...args){
    return args.reduce((previousValue, currentValue) => previousValue + currentValue)
}

function multiply(...args){
    return args.reduce((previousValue, currentValue) => previousValue * currentValue)
}
//console.log(add(1,5,8)+" "+multiply(5,6))
module.exports = {add,multiply}