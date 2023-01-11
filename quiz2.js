// input: ['🍌', '🍓', '🍇', '🍓']
let arr = ['🍌', '🍓', '🍇', '🍓'];
//console.log(arr);
arr.splice(1, 1, '🥝');
arr.splice(3, 3, '🥝');

//console.log(arr);


//[ '🍌', '🥝', '🍇', '🥝' ], '🥝'
let arr2 = [ '🍌', '🥝', '🍇', '🥝' ];
let i = 0;

const newArr = arr2.forEach((current, index, array) => {
    if(current === '🥝') {
        i++;
        console.log(i);
    }
})

//['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
let array = ['🍌', '🥝', '🍇'];
let array2 = ['🍌', '🍓', '🍇', '🍓'];

array.forEach((e,v,c) => {
    array2.forEach((a,b,c) => {
        if(e === a) {
            let i = [e,a];
            console.log(i.flat(1));
        }
    })
});



