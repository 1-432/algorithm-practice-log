
function findCount(arr,target){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if (arr[i] === target){
            count = count +1;
        }
    }

    return count;
}
console.log(findCount([1,3,3,4,3,7], 3));