function toNUmber(value:number | string) {
    if (typeof value === 'string') {
        return Number(value);
    }
    else if ( typeof value === 'number') {
        return value;
    }
    else {
        throw "Não é um número ou string'";
    }
}
console.log(toNUmber('3000'));