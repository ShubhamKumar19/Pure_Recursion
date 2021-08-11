//Check odd values in a array using pure recursion
function collectOddValues(arr)
{
    var newArray=[];
    if(arr.length===0)
    return newArray;
    if(arr[0]%2!==0)
    {
        newArray.push(arr[0]);
    }
    return newArray.concat(collectOddValues(arr.slice(1)));
}
console.log(collectOddValues([1,2,3,4,5]));