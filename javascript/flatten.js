
function flattenObj(obj) {
  const finalObj = {};
  function flat(currentObj, parentKey) {
    for (let key in currentObj) {
      const newParent = parentKey + key;
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
    rooms: [3000, 5000]
  }
}

console.log(flattenObj(obj));


function flatArray(arr, depth = 1) {
  const results = [];

  const flatArr = (arr, currentDepth) => {
    if (currentDepth > depth && depth !== Infinity) {
      results.push(arr);
    } else {
      for (let item of arr) {
        if (Array.isArray(item)) {
          flatArr(item, currentDepth + 1)
        } else {
          results.push(item);
        }
      }
    }
  }

  flatArr(arr, 0)
  return results;
}

console.log("flat", flatArray([1, [2], [3, [4]]], 1));
console.log("flat", flatArray([1, [[[2]]], [3, [[4]]]], Infinity));
