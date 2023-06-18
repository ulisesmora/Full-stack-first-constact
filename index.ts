//  1.- Create a function tha returns an array of n unique numbers, from 0 to N - 1, where N is the length of the array.
//  i: 5
//  o: [0, 1, 2, 3, 4]

function generateArrayNumber(n: number): number[] {
  const numberArray: number[] = [];
  for (let i = 0; i < n; i++) {
    numberArray.push(i);
  }
  console.log(numberArray);
  return numberArray;
}

//  given a result of the previous method, generate an array of n numbers, then alternate them between positive and negative using a new function.

// i: [0,1,2,3,4]
// o: [-3,-1,0,2,4]

function alternateArray(array:number[]):number[]{
  const newArray = array.map((item,index) => { return Math.random() >= 0.5 ? item : item * -1  }).sort((a,b) => a - b )
  console.log(newArray)
  return newArray;
}


// Consider the following code:

const randomValues = [
  "Hello",
  0,
  true,
  { name: "John Doe" },
  [3, 2],
  () => "Hello World",
];

//  create a function that infer parameters type, then return it ramdomly using the infered type.
//  from the parameter type


function shuffleStringArray(array:string[]):string[]{
  return array.map(value => ({value, sort: Math.random()})).sort((a,b) => a.sort - b.sort).map(({value}) => value);
}

function randomlyArrayParamaters<T>(array: T[]):string[]{
  const typesArray =  array.map((item) => { return typeof(item) })
  const shuffleArray = shuffleStringArray(typesArray)
  console.log(shuffleArray)
  return shuffleArray
}






// consider the following code:

const z = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // not use it
const r = Math.ceil(Math.random() * 10);
for(let value of z){
  try {
  const result = Math.ceil(Math.random() * value);
  } catch (error) {
    console.log(error)
  }
}
//  once you notice the posible error on it, make it visible using type checking. DONT FIX IT, just make it visible using a typescript error.




// EXTRA:
//  consider the following code:
const numbers = [5, 2, 3, 4, 1, 6, 7, 8, 9, 10] as const;
//  create a function that infer the parameter and return a TYPECHECK of the elements SORTED.
function sortArray<T extends readonly number[]>(array: T): readonly string[] {
  return array.map((item) => {return typeof(item)}).sort();
}


// Final Tests


const first = generateArrayNumber(5)
const second = alternateArray(first)
const third = randomlyArrayParamaters(randomValues)
const sortedNumbers = sortArray(numbers);
console.log(sortedNumbers)