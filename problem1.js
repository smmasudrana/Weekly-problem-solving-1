function findOddNumbers(numbers){
    const oddNums =[];
    for(const number of numbers){
        if(number % 2 ===1){
            oddNums.push(number);
        }
    }
    return oddNums;
}

const allNumbers =[12, 7, 5, 20, 33, 44, 19];
const result =findOddNumbers(allNumbers);
console.log(result);