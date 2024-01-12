//map
console.log("-map-");
const arr = [1, 2, 3];
const arrConst = [10, 20, 30];

const plusone = (n) => n + 1;

const plusI = (n, i) => n + i;

const constant = () => 42;

const map = (arr, fn) => {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    array.push(fn(arr[i], i));
  }
  return array;
};

const newArray = map(arr, plusone); //Output: [2, 3, 4];
console.log(newArray);

const newArray2 = map(arr, plusI); //Output: [1,3,5]
console.log(newArray2);

const newArray3 = map(arrConst, constant); //Output: [42,42,42]
console.log(newArray3);

//filter
console.log("-filter-");
const arrFilter1 = [-2, -1, 0, 1, 2];
const arrFilter2 = [0, 10, 20, 30];
const arrFilter3 = [1, 2, 3];

const greaterThan10 = (n) => n > 10;
const firstIndex = (n, i) => i === 0;
const plusoneFilter = (n) => n + 1;

const filter = (arr, fn) => {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    const currentValue = arr[i];

    if (fn(currentValue, i)) {
      filteredArr.push(currentValue);
    }
  }
  return filteredArr;
};

const newArrayFilter = filter(arrFilter1, plusoneFilter); // Output: [-2,0,1,2]
const newArrayFilter2 = filter(arrFilter2, greaterThan10); // Output: [20,30]
const newArrayFilter3 = filter(arrFilter3, firstIndex); // Output: [1]

console.log(newArrayFilter);
console.log(newArrayFilter2);
console.log(newArrayFilter3);

//reduce
console.log("-reduce-");

const nums = [1, 2, 3, 4];
const numsSum3 = [];

const sum1 = (accum, curr) => accum + curr;
const sum2 = (accum, curr) => accum + curr * curr;
const sum3 = (accum, curr) => 0;

const reduce = (nums, fn, init) => {
  let result = init;
  for (let i = 0; i < nums.length; i++) {
    result = fn(result, nums[i]);
  }
  return result;
};

const resultReduce1 = reduce(nums, sum1, 0); //Output: 10
const resultRedude2 = reduce(nums, sum2, 100); //Output: 130
const resultReduce3 = reduce(numsSum3, sum3, 25); //Output: 25

console.log(resultReduce1);
console.log(resultRedude2);
console.log(resultReduce3);

//sort
console.log("-sort-");
const compareNumbers = (a, b) => a - b;

const arraySort = ["3", "10", "60", 30, 2, 4, 3];
arraySort.join();
arraySort.sort(compareNumbers);
console.log(arraySort); //Output:  [2, '3', 3, 4, '10', 30, '60']
