export{}

let total: string | number = 200

total = '300'

function isNumber(value:string | number) {
    if(typeof value ==='number') {
        return true
    } else if(typeof value ==='string') {
        return false
    }
}

console.log(isNumber(2))