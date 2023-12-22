

let numbers = [1, 2, 3, 4, 5]

let multiples = numbers.map((nums) => {
    return nums * 2;
})

console.log(`Multiples: ${multiples}`);

let evenNums = multiples.filter((nums) => {
    return nums % 2 == 0;
})



for(let i=0; i < evenNums.length; i++){
    console.log(evenNums[i])
}