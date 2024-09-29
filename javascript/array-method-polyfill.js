const myArr = [1, 5, 10, 15];

function myCustomMap(cb) {
    const newArr = [];
    for (let i = 0; i < this.length; i++) {
        newArr.push(cb(this[i]));
    }

    return newArr;

}

Array.prototype.map = myCustomMap;

const newMapArr = myArr.map(item => item + 50);

console.log("newMapArr", newMapArr);

function myCustomFilter(cb) {
    const newArr = [];
    for(let i=0; i< this.length; i++ ){
        if(cb(this[i])){
            newArr.push(this[i]);
        }
    }

    return newArr;

}

Array.prototype.filter = myCustomFilter;

const newFilterArr = myArr.filter(item => item > 10);

console.log("newFilterArr", newFilterArr);


function myCustomReduce(cb, initialValue) {
    let results = initialValue || this[0];
    const initial = initialValue ? 0 : 1;
    for(let i=initial; i< this.length; i++ ){
        results = cb(results, this[i], i, this)
    }

    return results;

}

Array.prototype.reduce = myCustomReduce;

const newReduceArr = myArr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log("newReduceArr", newReduceArr);


