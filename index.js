// Add your functions here

const src = [1, 2, 3, -9]

function map(src, callback) {
	let newArray = [];
	 for (let i = 0; i < src.length; i++) {
		 newArray.push(callback(src[i]))
	 }
	 return newArray;
 }


function reduce(array, callback, startingPoint) {
    let memo;
    let i = 0;
    if (startingPoint) { 
        memo = startingPoint 
    } else {
        memo = array[0]
        i = 1
    }

    for (i; i < array.length; i++) {
        memo = callback(array[i], memo)
    } 
    return memo;
}

