function getClasses(inputArr) {

    const finalArray = inputArr.reduce((prev, current) => {
        if (prev[current.class]) {
            return {
                ...prev, names: [...prev.names, current.name]
            }
        } else {
            return 
        }
    }, [])
}

const arr = [
    {
        name: "A",
        class: 5
    },
    {
        name: "B",
        class: 6
    },
    {
        name: "C",
        class: 6
    },
    {
        name: "D",
        class: 5
    }
]

[
    {
        class: 5, names: ["A, D"]
    },
    {
        class: 6, names: ["B", "C"]
    }
]


console.log("getClasses", getClasses(a));


function generateFibo(num) {
    let cache ={};
    function fibo(n) {
      if(cache[n]) return cache[n];
      if (n === 0) return 0;
      if (n === 1 || n === 2) return 1;
  
      return cache[n]= fibo(n - 2) + fibo(n - 1);
    }
    return fibo(num);
  }
  
  console.log(generateFibo(6));

  function generateFibo(num) {
    let series = "";
    let n1 = 0;
    let n2 = 2;
    let next_num;
    for (let i = 0; i < num; i++) {
      series = series ? `${series},${n1}` : `${n1}`;
      next_num = n1 + n2;
      n1 = n2;
      n2 = next_num;
    }
  
    return series;
  }

  
  const factorialWithMemoization = (n) => {
  const factorialCache = [];
  const factorial = (n) => {
    if (n <= 1) {
      return 1;
    }

    return n * factorial(n - 1);
  };

  if (!factorialCache[n]) {
    factorialCache[n] = n <= 1 ? 1 : n * factorial(n - 1);
  }
  console.log("from cache");

  return factorialCache[n];
};

console.log(factorialWithMemoization(4));


function checkPrimeNumber(number) {
  let isPrimeNumber = true
  if (number === 1) {
      return false;
  }
  for (let i = 2; i < number; i++) {
      if (number % i === 0) {
          isPrimeNumber = false;
          break;
      }
  }
  return isPrimeNumber;
}


function findTwoSum(array, target) {
  let i = 0;
  let j = array.length - 1;
  while (i < j) {
      if (array[i] + array[j] === target) {
          return [array[i], array[j]];
      } else if (array[i] + array[j] < target) {
          i++;
      } else {
          j--;
      }
  }

  return []
}


