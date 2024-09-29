
function flattenObj(obj) {
    const finalObj = {};
    function flat(currentObj, parentKey) {
        for (let key in currentObj) {
            const newParent = parentKey + key ;
            const value = currentObj[key];
            if (typeof value === 'object') {
                flat(value, newParent + '.');
            } else {
                finalObj[newParent] = value;
            }
        }
    }

    flat(obj, '');

    return finalObj;
}

const obj = {
    name: 'Test',
    address: {
        city: {
            area: 'Mumbai'
        },
        state: 'Maharashtra',
        rooms:[3000, 5000]
    }
}

console.log(flattenObj(obj));
